import fs from 'fs';
import path from 'path';

const localesDir = 'd:/DEV/logitaka.com/frontend/public/locales';
const langs = ['ru', 'en', 'az'];

const translations = {
  ru: {
    project: "Редизайн сайта",
    badge: "АКТИВНЫЙ",
    subtitle: "Обновлено сегодня · 3 сессии",
    tabs: { overview: "Обзор", decisions: "Решения", history: "История" },
    labels: {
      status: "СТАТУС",
      tasks: "ЗАДАЧИ",
      questions: "ОТКРЫТЫЕ ВОПРОСЫ",
      decisions: "ЗАФИКСИРОВАННЫЕ РЕШЕНИЯ",
      history: "ИСТОРИЯ СЕССИЙ",
      models: "Модели в этом проекте:"
    },
    overview: {
      statusText: "Дизайн в работе",
      tasks: [
        { done: true, text: "Согласовать структуру страниц", due: "23 апр", urgent: false },
        { done: true, text: "Передать бриф дизайнеру", due: "25 апр", urgent: false },
        { done: false, text: "Уведомить клиента о сдвиге сроков", due: "сегодня", urgent: true },
        { done: false, text: "Финальная проверка макетов", due: "7 мая", urgent: false }
      ],
      questions: [
        "Клиент одобрил новый дедлайн?",
        "Нужна ли мобильная версия в этом релизе?"
      ]
    },
    decisions: [
      { text: "Дизайнер задерживает на неделю — новый дедлайн 7 мая.", date: "28 апр" },
      { text: "Структура сайта: 5 страниц, без блога в первом релизе.", date: "24 апр" },
      { text: "Работаем с текущим дизайнером, не ищем нового.", date: "23 апр" }
    ],
    history: [
      { date: "Сегодня, 10:15", title: "Сессия 3.", text: " Обновили статус по дизайнеру. Добавили задачу уведомить клиента. Зафиксировали 1 решение." },
      { date: "28 апр, 17:40", title: "Сессия 2.", text: " Дизайнер сдвигает сроки. Обсудили варианты — решили не менять подрядчика. Зафиксировали 2 решения." },
      { date: "23 апр, 14:05", title: "Сессия 1.", text: " Запустили проект. Согласовали структуру из 5 страниц, передали бриф дизайнеру." }
    ]
  },
  en: {
    project: "Website Redesign",
    badge: "ACTIVE",
    subtitle: "Updated today · 3 sessions",
    tabs: { overview: "Overview", decisions: "Decisions", history: "History" },
    labels: {
      status: "STATUS",
      tasks: "TASKS",
      questions: "OPEN QUESTIONS",
      decisions: "LOGGED DECISIONS",
      history: "SESSION HISTORY",
      models: "Models in this project:"
    },
    overview: {
      statusText: "Design in progress",
      tasks: [
        { done: true, text: "Approve page structure", due: "Apr 23", urgent: false },
        { done: true, text: "Hand over brief to designer", due: "Apr 25", urgent: false },
        { done: false, text: "Notify client about timeline shift", due: "today", urgent: true },
        { done: false, text: "Final mockup review", due: "May 7", urgent: false }
      ],
      questions: [
        "Did the client approve the new deadline?",
        "Do we need a mobile version for this release?"
      ]
    },
    decisions: [
      { text: "Designer is delayed by a week — new deadline May 7.", date: "Apr 28" },
      { text: "Site structure: 5 pages, no blog in the first release.", date: "Apr 24" },
      { text: "Continuing with current designer, not looking for a new one.", date: "Apr 23" }
    ],
    history: [
      { date: "Today, 10:15", title: "Session 3.", text: " Updated designer status. Added task to notify client. Logged 1 decision." },
      { date: "Apr 28, 17:40", title: "Session 2.", text: " Timeline shifted. Discussed options — decided to keep current contractor. Logged 2 decisions." },
      { date: "Apr 23, 14:05", title: "Session 1.", text: " Project launched. Approved 5-page structure, handed over brief." }
    ]
  },
  az: {
    project: "Saytın Yenidən Dizaynı",
    badge: "AKTİV",
    subtitle: "Bu gün yeniləndi · 3 sessiya",
    tabs: { overview: "İcmal", decisions: "Qərarlar", history: "Tarixçə" },
    labels: {
      status: "STATUS",
      tasks: "TAPŞIRIQLAR",
      questions: "AÇIQ SUALLAR",
      decisions: "QEYD EDİLMİŞ QƏRARLAR",
      history: "SESSİYA TARİXÇƏSİ",
      models: "Bu layihədəki modellər:"
    },
    overview: {
      statusText: "Dizayn prosesindədir",
      tasks: [
        { done: true, text: "Səhifə strukturunu təsdiqləmək", due: "23 Apr", urgent: false },
        { done: true, text: "Brifi dizaynerə təhvil vermək", due: "25 Apr", urgent: false },
        { done: false, text: "Müştəriyə müddət dəyişikliyini bildirmək", due: "bu gün", urgent: true },
        { done: false, text: "Maketlərin yekun yoxlanışı", due: "7 May", urgent: false }
      ],
      questions: [
        "Müştəri yeni son tarixi təsdiqlədi?",
        "Bu buraxılışda mobil versiyaya ehtiyac var?"
      ]
    },
    decisions: [
      { text: "Dizayner bir həftə gecikir — yeni son tarix 7 May.", date: "28 Apr" },
      { text: "Saytın strukturu: 5 səhifə, ilk buraxılışda bloq yoxdur.", date: "24 Apr" },
      { text: "Mövcud dizaynerlə davam edirik, yenisini axtarmırıq.", date: "23 Apr" }
    ],
    history: [
      { date: "Bu gün, 10:15", title: "Sessiya 3.", text: " Dizaynerin statusu yeniləndi. Müştərini məlumatlandırmaq üçün tapşırıq əlavə edildi. 1 qərar qeyd edildi." },
      { date: "28 Apr, 17:40", title: "Sessiya 2.", text: " Müddət uzadıldı. Variantlar müzakirə edildi — podratçını dəyişməmək qərarı alındı. 2 qərar qeyd edildi." },
      { date: "23 Apr, 14:05", title: "Sessiya 1.", text: " Layihəyə başlanıldı. 5 səhifəlik struktur təsdiqləndi, brif təhvil verildi." }
    ]
  }
};

for (const lang of langs) {
  const filePath = path.join(localesDir, lang, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.landing = data.landing || {};
    data.landing.contextCard = translations[lang];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}`);
  }
}
