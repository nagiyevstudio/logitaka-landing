import os
import shutil

# Config
LANGUAGES = ['az', 'en', 'ru']
PAGES = ['index.html', 'models.html', 'privacy.html', 'terms.html']
BASE_DIR = 'd:/DEV/logitaka.com/landing'

def update_paths(content, depth=1):
    prefix = '../' * depth
    # Update CSS, JS, Assets
    content = content.replace('href="css/', f'href="{prefix}css/')
    content = content.replace('src="js/', f'src="{prefix}js/')
    content = content.replace('src="./assets/', f'src="{prefix}assets/')
    content = content.replace('href="./assets/', f'href="{prefix}assets/')
    content = content.replace('src="assets/', f'src="{prefix}assets/')
    content = content.replace('href="assets/', f'href="{prefix}assets/')
    
    # Update JSON fetch paths (in JS they are usually relative to the HTML)
    # But since we update i18n.js to be path-aware, we need to make sure 
    # fetch calls in index.js/models.js are correct.
    # index.js does: fetch(`./locales/${target}.json`)
    # If index.html is in /en/, it will fetch /en/locales/en.json -> FAIL.
    # It should fetch ../locales/en.json.
    content = content.replace("fetch(`./locales/", f"fetch(`{prefix}locales/")
    content = content.replace("fetch('./locales/", f"fetch('{prefix}locales/")
    
    # Update links between pages to stay in the same language folder
    # No change needed if they are relative like "models.html"
    
    return content

def generate():
    for lang in LANGUAGES:
        lang_dir = os.path.join(BASE_DIR, lang)
        if not os.path.exists(lang_dir):
            os.makedirs(lang_dir)
            print(f"Created directory: {lang_dir}")

        for page in PAGES:
            src_path = os.path.join(BASE_DIR, page)
            if not os.path.exists(src_path):
                continue
                
            with open(src_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # 1. Set HTML lang
            content = content.replace('<html lang="az"', f'<html lang="{lang}"')
            content = content.replace('<html lang="en"', f'<html lang="{lang}"')
            content = content.replace('<html lang="ru"', f'<html lang="{lang}"')

            # 2. Inject hreflang tags for SEO
            hreflangs = ""
            for l in LANGUAGES:
                hreflangs += f'  <link rel="alternate" hreflang="{l}" href="https://logitaka.com/{l}/{page}" />\n'
            hreflangs += f'  <link rel="alternate" hreflang="x-default" href="https://logitaka.com/{page}" />\n'
            
            if '</head>' in content:
                content = content.replace('</head>', f'{hreflangs}</head>')

            # 3. Update relative paths
            content = update_paths(content)

            # 4. Save
            dest_path = os.path.join(lang_dir, page)
            with open(dest_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Generated: {dest_path}")

if __name__ == "__main__":
    generate()
