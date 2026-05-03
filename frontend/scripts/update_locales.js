import fs from 'fs';
import path from 'path';

const localesDir = 'd:/DEV/logitaka.com/frontend/public/locales';
const langs = ['ru', 'en', 'az'];

const translations = {
  ru: {
    scenarios: [
      { name: "Руководитель" },
      { name: "Фрилансер" },
      { name: "Разработчик" }
    ],
    roles: { user: "ВЫ", agent: "АГЕНТ" },
    messages: {
      s0: [
        { type: "user", text: "Завтра встреча с командой по Q2. Нужно подготовить повестку и напомнить всем к вечеру." },
        { type: "sys", icon: "✓", text: "Создана задача: Подготовить повестку — до завтра" },
        { type: "sys", icon: "✓", text: "Создано событие: Встреча команды Q2" },
        { type: "agent", text: "Зафиксировал встречу и добавил задачи. Напоминание команде отправлю сегодня в 18:00 — или выбрать другое время?" }
      ],
      s1: [
        { type: "user", text: "Клиент Арт-студия должен был прислать правки по логотипу ещё вчера. Пока тишина." },
        { type: "sys", icon: "⚑", text: "Зафиксировано: Ожидаем правки от Арт-студии" },
        { type: "sys", icon: "?", text: "Открытый вопрос: Нет ответа от клиента" },
        { type: "agent", text: "Понял, статус проекта обновил. Напомнить тебе написать им если к вечеру не откликнутся?" }
      ],
      s2: [
        { type: "user", text: "Переезжаем на новый сервер в пятницу. Надо не забыть про переменные окружения и SSL." },
        { type: "sys", icon: "✓", text: "Создана задача: Настроить SSL — пятница" },
        { type: "sys", icon: "✓", text: "Создана задача: Перенести переменные окружения" },
        { type: "agent", text: "Добавил задачи по деплою. Сделать чек-лист по миграции — чтобы ничего не упустить в пятницу?" }
      ]
    }
  },
  en: {
    scenarios: [
      { name: "Manager" },
      { name: "Freelancer" },
      { name: "Developer" }
    ],
    roles: { user: "YOU", agent: "AGENT" },
    messages: {
      s0: [
        { type: "user", text: "We have a Q2 team meeting tomorrow. Need to prepare an agenda and remind everyone by evening." },
        { type: "sys", icon: "✓", text: "Task created: Prepare agenda — by tomorrow" },
        { type: "sys", icon: "✓", text: "Event created: Q2 Team Meeting" },
        { type: "agent", text: "I've scheduled the meeting and added the tasks. Should I send a reminder to the team today at 18:00, or choose another time?" }
      ],
      s1: [
        { type: "user", text: "Client Art-Studio was supposed to send logo edits yesterday. Silence so far." },
        { type: "sys", icon: "⚑", text: "Logged: Waiting for edits from Art-Studio" },
        { type: "sys", icon: "?", text: "Open issue: No response from client" },
        { type: "agent", text: "Understood, project status updated. Should I remind you to write them if they don't reply by evening?" }
      ],
      s2: [
        { type: "user", text: "We're migrating to a new server on Friday. Can't forget about environment variables and SSL." },
        { type: "sys", icon: "✓", text: "Task created: Configure SSL — Friday" },
        { type: "sys", icon: "✓", text: "Task created: Migrate environment variables" },
        { type: "agent", text: "Added deployment tasks. Would you like me to create a migration checklist so we don't miss anything on Friday?" }
      ]
    }
  },
  az: {
    scenarios: [
      { name: "Menecer" },
      { name: "Frilanser" },
      { name: "Proqramçı" }
    ],
    roles: { user: "SİZ", agent: "AGENT" },
    messages: {
      s0: [
        { type: "user", text: "Sabah Q2 komanda iclasımız var. Gündəliyi hazırlamaq və axşama qədər hamıya xatırlatmaq lazımdır." },
        { type: "sys", icon: "✓", text: "Tapşırıq yaradıldı: Gündəliyi hazırlamaq — sabaha qədər" },
        { type: "sys", icon: "✓", text: "Tədbir yaradıldı: Q2 Komanda İclası" },
        { type: "agent", text: "İclası qeydə aldım və tapşırıqları əlavə etdim. Komandaya xatırlatmanı bu gün 18:00-da göndərim, yoxsa başqa vaxt seçək?" }
      ],
      s1: [
        { type: "user", text: "Art-Studio müştərisi loqo düzəlişlərini dünən göndərməli idi. Hələ də səssizlikdir." },
        { type: "sys", icon: "⚑", text: "Qeydə alındı: Art-Studio-dan düzəlişlər gözlənilir" },
        { type: "sys", icon: "?", text: "Açıq məsələ: Müştəridən cavab yoxdur" },
        { type: "agent", text: "Aydındır, layihə statusunu yenilədim. Əgər axşama qədər cavab verməsələr, onlara yazmağı sizə xatırladım?" }
      ],
      s2: [
        { type: "user", text: "Cümə günü yeni serverə keçirik. Mühit dəyişənləri və SSL-i unutmaq olmaz." },
        { type: "sys", icon: "✓", text: "Tapşırıq yaradıldı: SSL-i konfiqurasiya etmək — Cümə" },
        { type: "sys", icon: "✓", text: "Tapşırıq yaradıldı: Mühit dəyişənlərini köçürmək" },
        { type: "agent", text: "Yerləşdirmə tapşırıqları əlavə edildi. Cümə günü heç nəyi unutmamaq üçün miqrasiya yoxlama siyahısı yaradım?" }
      ]
    }
  }
};

for (const lang of langs) {
  const filePath = path.join(localesDir, lang, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.landing = data.landing || {};
    data.landing.chatDemo = translations[lang];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}`);
  }
}
