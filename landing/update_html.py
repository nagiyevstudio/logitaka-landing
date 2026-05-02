#!/usr/bin/env python3
"""Replace inline <style> and <script> blocks with external file references."""

import re

INDEX_CSS = """  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="css/footer.css">"""

INDEX_JS = """  <script src="js/i18n.js"></script>
  <script src="js/theme.js"></script>
  <script src="js/index.js"></script>"""

MODELS_CSS = """  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/models.css">
  <link rel="stylesheet" href="css/footer.css">"""

MODELS_JS = """  <script src="js/i18n.js"></script>
  <script src="js/theme.js"></script>
  <script src="js/models.js"></script>"""

def process_file(path, css_block, js_block):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace <style>...</style> (including all content between)
    content = re.sub(r'  <style>.*?</style>', css_block, content, count=1, flags=re.DOTALL)
    
    # Replace <script>...</script> (NOT <script src=...>)
    content = re.sub(r'\s*<script>\s*.*?\s*</script>', '\n' + js_block + '\n', content, count=1, flags=re.DOTALL)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated: {path}")

process_file('index.html', INDEX_CSS, INDEX_JS)
process_file('models.html', MODELS_CSS, MODELS_JS)
print("Done!")