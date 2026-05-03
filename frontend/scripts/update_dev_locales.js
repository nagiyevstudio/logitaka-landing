import fs from 'fs';
import path from 'path';

const localesDir = 'd:/DEV/logitaka.com/frontend/public/locales';
const langs = ['ru', 'en', 'az'];

const translations = {
  ru: {
    s1: { label: "Logitaka Dev Chat", sub: "Обсуждаем задачу, формируем инструкцию" },
    actionPush: "push",
    gitInst: { label: "Git Repo", sub: "instruction file" },
    actionPull: "pull",
    s2: { label: "IDE / Code Editor", sub: "Агент получает готовую инструкцию" },
    actionExec: "выполняет",
    s34: { label: "Агент в IDE", sub: "Пишет код и пушит изменения" },
    gitCode: { label: "Git Repo", sub: "code changes" },
    actionRead: "читает diff",
    s5: { label: "Ревизия и отчёт", sub: "Logitaka читает дифф, составляет отчёт" },
    actionReady: "отчёт готов",
    s6: { label: "Dev Chat", sub: "Обсуждаем отчёт, планируем следующий шаг" }
  },
  en: {
    s1: { label: "Logitaka Dev Chat", sub: "Discuss task, formulate instruction" },
    actionPush: "push",
    gitInst: { label: "Git Repo", sub: "instruction file" },
    actionPull: "pull",
    s2: { label: "IDE / Code Editor", sub: "Agent receives ready instruction" },
    actionExec: "executes",
    s34: { label: "Agent in IDE", sub: "Writes code and pushes changes" },
    gitCode: { label: "Git Repo", sub: "code changes" },
    actionRead: "reads diff",
    s5: { label: "Review & Report", sub: "Logitaka reads diff, creates report" },
    actionReady: "report ready",
    s6: { label: "Dev Chat", sub: "Discuss report, plan next step" }
  },
  az: {
    s1: { label: "Logitaka Dev Chat", sub: "Tapşırığı müzakirə edir, təlimat yaradırıq" },
    actionPush: "push",
    gitInst: { label: "Git Repo", sub: "instruction file" },
    actionPull: "pull",
    s2: { label: "IDE / Code Editor", sub: "Agent hazır təlimatı qəbul edir" },
    actionExec: "icra edir",
    s34: { label: "IDE-də Agent", sub: "Kodu yazır və dəyişiklikləri push edir" },
    gitCode: { label: "Git Repo", sub: "code changes" },
    actionRead: "diff oxuyur",
    s5: { label: "Yoxlama və Hesabat", sub: "Logitaka diff oxuyur, hesabat hazırlayır" },
    actionReady: "hesabat hazırdır",
    s6: { label: "Dev Chat", sub: "Hesabatı müzakirə edirik, növbəti addımı planlaşdırırıq" }
  }
};

for (const lang of langs) {
  const filePath = path.join(localesDir, lang, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.landing = data.landing || {};
    data.landing.devFlow = translations[lang];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}`);
  }
}
