import json
import os

files = {
    'ru': 'd:/CLOUD/Cloud Mail.Ru/CASES/Logitaka/site/landing/locales/ru.json',
    'en': 'd:/CLOUD/Cloud Mail.Ru/CASES/Logitaka/site/landing/locales/en.json',
    'az': 'd:/CLOUD/Cloud Mail.Ru/CASES/Logitaka/site/landing/locales/az.json',
}

updates = {
    'ru': {
        'hero': {
            'headline': 'Logitaka. Система которая ведёт твои дела.',
            'subheadline': 'Скажи что происходит — голосом или текстом. Logitaka сама соберёт структуру, расставит приоритеты, напомнит и скажет что делать дальше.',
            'ctaPrimary': 'Получить доступ',
            'ctaSecondary': 'Посмотреть как это работает'
        },
        'problem': {
            'title': 'Узнай себя хотя бы в одном.',
            'items': [
                {'title': 'Дел много — голова одна', 'body': 'Работа, личное, планы, обещания. Всё важное, всё срочное. Просто не помещается.'},
                {'title': 'Забываешь не потому что безответственный', 'body': 'Просто некому было напомнить в нужный момент. И некому было проследить.'},
                {'title': 'Знаешь что делать — но не знаешь с чего начать', 'body': 'Задач полно. А садишься — и непонятно за что хвататься прямо сейчас.'},
                {'title': 'Планируешь — но планы не живут', 'body': 'Написал список, составил план. Через три дня он уже не отражает реальность.'},
                {'title': 'Чувствуешь что тормозишь — но не понимаешь где', 'body': 'Что-то идёт не так, но сформулировать сложно. И спросить не у кого.'}
            ]
        },
        'transformation': {
            'title': 'Как это работает.',
            'body': [
                'При первом входе Logitaka задаёт вопросы и слушает. На основе того что ты рассказываешь — автоматически формирует структуру: проекты, задачи, решения, план, календарь.',
                'Чем больше рассказываешь — тем точнее система понимает твою ситуацию.',
                'В основе — не просто ИИ. Методология выстроена на 30-летнем опыте управления в семи разных индустриях и пяти годах профессиональной работы с языковыми моделями. Система работает по проверенным принципам — не подстраивается под хаос, а помогает из него выйти.'
            ]
        },
        'capabilities': {
            'title': 'Что делает система.',
            'items': [
                {'title': 'Собирает структуру из того что ты говоришь', 'body': 'Проекты, задачи, сроки, решения — формируются автоматически на основе твоих слов. Ничего не нужно вбивать вручную.'},
                {'title': 'Ведёт ежедневные сессии', 'body': 'Расскажи как прошёл день. Система пройдётся по активным проектам, уточнит статусы, сдвинет сроки, добавит напоминания.'},
                {'title': 'Управляет календарём', 'body': 'Подключается к твоему календарю. Напоминания и задачи добавляются автоматически — тебе и твоим сотрудникам.'},
                {'title': 'Держит решения и договорённости', 'body': 'Всё что обсуждалось и решалось — фиксируется отдельно. Не теряется в переписке.'},
                {'title': 'Работает по методологии а не по твоему настроению', 'body': 'Система имеет чёткую структуру. Она направляет — ты следуешь. Именно это даёт результат.'}
            ]
        },
        'context': {
            'title': 'Контекст который не исчезает.',
            'body': [
                'Обычный ИИ-чат не помнит тебя между сессиями. Logitaka работает иначе.',
                'Каждый разговор суммируется и вносится в контекст проекта. Решения фиксируются отдельно. Планы вытаскиваются автоматически. Ты можешь вернуться через неделю — система знает где ты остановился.',
                'Работает с ведущими моделями — OpenAI, Google, Anthropic и другими. Можно переключаться между моделями — контекст общий и актуальный.'
            ]
        },
        'audience': {
            'title': 'Для любого у кого много дел.',
            'items': [
                {'title': 'Фрилансер / дизайнер / блогер', 'body': 'Клиенты, дедлайны, идеи, переписки — система держит всё в одном месте.'},
                {'title': 'Руководитель / предприниматель', 'body': 'Команда, проекты, решения, контроль — без необходимости держать всё в голове.'},
                {'title': 'Разработчик', 'body': 'Контекст проекта, история решений, задачи — плюс прямая интеграция с редактором кода.'},
                {'title': 'Любой человек с большим объёмом дел', 'body': 'Неважно чем ты занимаешься. Порог входа нулевой — просто говори.'}
            ]
        },
        'devTeam': {
            'title': 'Операционный слой вокруг разработки.',
            'body': [
                'Код — не единственное место где теряется контекст. Решения исчезают в чатах. Через неделю команда не может восстановить почему сделали именно так.',
                'Logitaka фиксирует историю решений, текущее состояние проекта и следующие шаги — в одном месте, всегда актуально.',
                'Для тех кто работает с ИИ-ассистентами в коде: обсуждаешь задачу в Logitaka — одним действием отправляешь готовые инструкции в редактор. Код выполняется под твоим контролем, с проверенными инструкциями, без лишних итераций.'
            ]
        },
        'pricing': {
            'title': 'Тарифы.',
            'cards': [
                {
                    'label': 'Starter',
                    'name': 'Starter',
                    'price': '$10 / месяц',
                    'body': 'Полный доступ к системе. Подходит для личного использования и небольшого объёма задач.',
                    'cta': 'Войти в список'
                },
                {
                    'label': 'Pro',
                    'name': 'Pro',
                    'price': '$25 / месяц',
                    'body': 'Для тех кто использует Logitaka ежедневно как основной рабочий инструмент.',
                    'cta': 'Войти в список'
                },
                {
                    'label': 'Custom',
                    'name': 'Custom',
                    'price': 'Для компаний',
                    'body': 'Для организаций с требованиями к приватности данных. Развёртывание на локальной инфраструктуре с локальной языковой моделью. Свяжитесь с нами.',
                    'cta': 'Связаться'
                }
            ],
            'waitlist': 'Сейчас идёт бета-тест. Оставь заявку — получишь доступ одним из первых.'
        },
        'faq': {
            'title': 'FAQ',
            'items': [
                {'question': 'Что такое Logitaka?', 'answer': 'Система управления делами на основе ИИ. Ты рассказываешь что происходит — она собирает структуру, ведёт проекты, напоминает и направляет.'},
                {'question': 'Это просто ИИ-чат?', 'answer': 'Нет. Обычный чат отвечает на вопросы и забывает тебя. Logitaka ведёт постоянный контекст и работает как операционная система вокруг твоих дел.'},
                {'question': 'Нужно ли разбираться в технологиях?', 'answer': 'Нет. Достаточно говорить или писать — система делает остальное.'},
                {'question': 'Для кого это?', 'answer': 'Для любого у кого много задач и нет системы которая держит их в порядке.'},
                {'question': 'Нужно ли быть уже организованным?', 'answer': 'Нет. Система принимает хаос и структурирует его сама.'},
                {'question': 'Работает ли это для команд?', 'answer': 'Да. Можно управлять задачами и напоминаниями для сотрудников через систему.'},
                {'question': 'Что с приватностью данных?', 'answer': 'Для компаний с высокими требованиями — Custom план с локальным развёртыванием без внешних агентов.'}
            ]
        },
        'finalCta': {
            'headline': 'Logitaka. Система которая ведёт твои дела.',
            'body': 'Бета-тест открыт. Оставь заявку — получишь доступ и увидишь как это работает на твоих реальных задачах.',
            'primary': 'Войти в список',
            'secondary': 'Посмотреть как это работает'
        }
    },
    'en': {
        'hero': {
            'headline': 'Logitaka. The system that manages your tasks.',
            'subheadline': 'Say what\'s happening — by voice or text. Logitaka will automatically build the structure, set priorities, remind you, and tell you what to do next.',
            'ctaPrimary': 'Get Access',
            'ctaSecondary': 'See how it works'
        },
        'problem': {
            'title': 'Recognize yourself in at least one.',
            'items': [
                {'title': 'Too much to do — only one head', 'body': 'Work, personal life, plans, promises. Everything important, everything urgent. It just doesn\'t fit.'},
                {'title': 'You forget not because you are irresponsible', 'body': 'There was just no one to remind you at the right moment. And no one to keep track.'},
                {'title': 'You know what to do — but don\'t know where to start', 'body': 'Plenty of tasks. But when you sit down — it\'s unclear what to grab right now.'},
                {'title': 'You plan — but plans don\'t live', 'body': 'You wrote a list, made a plan. Three days later it no longer reflects reality.'},
                {'title': 'You feel you are stalling — but don\'t understand where', 'body': 'Something goes wrong, but it\'s hard to articulate. And there\'s no one to ask.'}
            ]
        },
        'transformation': {
            'title': 'How it works.',
            'body': [
                'On first login, Logitaka asks questions and listens. Based on what you tell — it automatically forms the structure: projects, tasks, decisions, plan, calendar.',
                'The more you tell — the more accurately the system understands your situation.',
                'At the core is not just AI. The methodology is built on 30 years of management experience in seven different industries and five years of professional work with language models. The system works on proven principles — it doesn\'t adapt to chaos, but helps you get out of it.'
            ]
        },
        'capabilities': {
            'title': 'What the system does.',
            'items': [
                {'title': 'Builds structure from what you say', 'body': 'Projects, tasks, deadlines, decisions — are formed automatically based on your words. Nothing needs to be typed manually.'},
                {'title': 'Conducts daily sessions', 'body': 'Tell how the day went. The system will go through active projects, clarify statuses, shift deadlines, add reminders.'},
                {'title': 'Manages your calendar', 'body': 'Connects to your calendar. Reminders and tasks are added automatically — to you and your employees.'},
                {'title': 'Holds decisions and agreements', 'body': 'Everything discussed and decided is recorded separately. Doesn\'t get lost in messages.'},
                {'title': 'Works by methodology, not your mood', 'body': 'The system has a clear structure. It guides — you follow. This is exactly what brings results.'}
            ]
        },
        'context': {
            'title': 'Context that never disappears.',
            'body': [
                'A regular AI chat doesn\'t remember you between sessions. Logitaka works differently.',
                'Every conversation is summarized and added to the project context. Decisions are recorded separately. Plans are extracted automatically. You can return in a week — the system knows where you left off.',
                'Works with leading models — OpenAI, Google, Anthropic, and others. You can switch between models — the context is shared and up-to-date.'
            ]
        },
        'audience': {
            'title': 'For anyone who has a lot to do.',
            'items': [
                {'title': 'Freelancer / designer / blogger', 'body': 'Clients, deadlines, ideas, messages — the system keeps everything in one place.'},
                {'title': 'Manager / entrepreneur', 'body': 'Team, projects, decisions, control — without having to keep everything in your head.'},
                {'title': 'Developer', 'body': 'Project context, decision history, tasks — plus direct integration with code editor.'},
                {'title': 'Anyone with a large volume of tasks', 'body': 'It doesn\'t matter what you do. Zero entry barrier — just speak.'}
            ]
        },
        'devTeam': {
            'title': 'Operational layer around development.',
            'body': [
                'Code isn\'t the only place where context gets lost. Decisions disappear in chats. A week later, the team can\'t restore why they did it exactly this way.',
                'Logitaka records the history of decisions, the current state of the project, and next steps — in one place, always up-to-date.',
                'For those working with AI assistants in code: discuss a task in Logitaka — with one action, send ready instructions to the editor. The code executes under your control, with verified instructions, without unnecessary iterations.'
            ]
        },
        'pricing': {
            'title': 'Pricing.',
            'cards': [
                {
                    'label': 'Starter',
                    'name': 'Starter',
                    'price': '$10 / month',
                    'body': 'Full access to the system. Suitable for personal use and a small volume of tasks.',
                    'cta': 'Join the waitlist'
                },
                {
                    'label': 'Pro',
                    'name': 'Pro',
                    'price': '$25 / month',
                    'body': 'For those who use Logitaka daily as their main working tool.',
                    'cta': 'Join the waitlist'
                },
                {
                    'label': 'Custom',
                    'name': 'Custom',
                    'price': 'For companies',
                    'body': 'For organizations with data privacy requirements. Deployment on local infrastructure with a local language model. Contact us.',
                    'cta': 'Contact'
                }
            ],
            'waitlist': 'Beta test is currently underway. Leave an application — get access as one of the first.'
        },
        'faq': {
            'title': 'FAQ',
            'items': [
                {'question': 'What is Logitaka?', 'answer': 'An AI-based task management system. You tell what\'s happening — it builds structure, manages projects, reminds, and guides.'},
                {'question': 'Is it just an AI chat?', 'answer': 'No. A regular chat answers questions and forgets you. Logitaka maintains constant context and works as an operating system around your tasks.'},
                {'question': 'Do you need to understand technology?', 'answer': 'No. It\'s enough to speak or write — the system does the rest.'},
                {'question': 'Who is this for?', 'answer': 'For anyone who has many tasks and no system that keeps them in order.'},
                {'question': 'Do you need to be already organized?', 'answer': 'No. The system takes chaos and structures it itself.'},
                {'question': 'Does it work for teams?', 'answer': 'Yes. You can manage tasks and reminders for employees through the system.'},
                {'question': 'What about data privacy?', 'answer': 'For companies with high requirements — Custom plan with local deployment without external agents.'}
            ]
        },
        'finalCta': {
            'headline': 'Logitaka. The system that manages your tasks.',
            'body': 'Beta test is open. Leave an application — get access and see how it works on your real tasks.',
            'primary': 'Join the waitlist',
            'secondary': 'See how it works'
        }
    },
    'az': {
        'hero': {
            'headline': 'Logitaka. İşlərini idarə edən sistem.',
            'subheadline': 'Nə baş verdiyini de — səslə və ya mətnlə. Logitaka özü strukturu toplayacaq, prioritetləri müəyyən edəcək, xatırladacaq və növbəti addımı deyəcək.',
            'ctaPrimary': 'Giriş əldə et',
            'ctaSecondary': 'Necə işlədiyinə bax'
        },
        'problem': {
            'title': 'Özünü ən azı birində tanı.',
            'items': [
                {'title': 'İş çoxdur — baş isə birdir', 'body': 'İş, şəxsi həyat, planlar, vədlər. Hər şey vacibdir, hər şey təcilidir. Sadəcə sığmır.'},
                {'title': 'Məsuliyyətsiz olduğun üçün unutmursan', 'body': 'Sadəcə lazım olan anda xatırladacaq və nəzarət edəcək kimsə yox idi.'},
                {'title': 'Nə edəcəyini bilirsən — amma nədən başlayacağını yox', 'body': 'Tapşırıq çoxdur. Amma iş başına keçəndə hazırda nədən yapışacağın aydın olmur.'},
                {'title': 'Planlayırsan — amma planlar yaşamır', 'body': 'Siyahı yazdın, plan qurdun. Üç gün sonra artıq reallığı əks etdirmir.'},
                {'title': 'Ləngidiyini hiss edirsən — amma harada olduğunu anlamırsan', 'body': 'Nəsə səhv gedir, amma bunu ifadə etmək çətindir. Və soruşmağa kimsə yoxdur.'}
            ]
        },
        'transformation': {
            'title': 'Necə işləyir.',
            'body': [
                'İlk girişdə Logitaka suallar verir və dinləyir. Danışdıqlarına əsasən — avtomatik olaraq strukturu formalaşdırır: layihələr, tapşırıqlar, qərarlar, plan, təqvim.',
                'Nə qədər çox danışırsansa — sistem vəziyyətini bir o qədər dəqiq anlayır.',
                'Əsasında — sadəcə süni intellekt deyil. Metodologiya yeddi fərqli sahədə 30 illik idarəçilik təcrübəsi və dil modelləri ilə beş illik peşəkar iş üzərində qurulub. Sistem sübut edilmiş prinsiplərlə işləyir — xaosa uyğunlaşmır, ondan çıxmağa kömək edir.'
            ]
        },
        'capabilities': {
            'title': 'Sistem nə edir.',
            'items': [
                {'title': 'Danışdıqlarından struktur formalaşdırır', 'body': 'Layihələr, tapşırıqlar, müddətlər, qərarlar — sözlərin əsasında avtomatik formalaşır. Heç nəyi əllə daxil etməyə ehtiyac yoxdur.'},
                {'title': 'Gündəlik sessiyalar keçirir', 'body': 'Günün necə keçdiyini danış. Sistem aktiv layihələrin üzərindən keçəcək, statusları dəqiqləşdirəcək, müddətləri dəyişəcək, xatırlatmalar əlavə edəcək.'},
                {'title': 'Təqvimi idarə edir', 'body': 'Təqviminə qoşulur. Xatırlatmalar və tapşırıqlar avtomatik əlavə olunur — sənə və əməkdaşlarına.'},
                {'title': 'Qərarları və razılaşmaları saxlayır', 'body': 'Müzakirə olunan və qərara alınan hər şey ayrıca qeyd olunur. Yazışmalarda itmir.'},
                {'title': 'Sənin əhvalına görə yox, metodologiyaya əsasən işləyir', 'body': 'Sistemin dəqiq strukturu var. O istiqamətləndirir — sən təqib edirsən. Məhz bu nəticə verir.'}
            ]
        },
        'context': {
            'title': 'İtməyən kontekst.',
            'body': [
                'Adi Sİ-çat sessiyalar arasında səni xatırlamır. Logitaka isə fərqli işləyir.',
                'Hər söhbət xülasə edilir və layihənin kontekstinə daxil edilir. Qərarlar ayrıca qeyd olunur. Planlar avtomatik olaraq çıxarılır. Bir həftə sonra qayıda bilərsən — sistem harada qaldığını bilir.',
                'Aparıcı modellərlə işləyir — OpenAI, Google, Anthropic və digərləri. Modellər arasında keçid edə bilərsən — kontekst ümumi və aktualdır.'
            ]
        },
        'audience': {
            'title': 'Çox işi olan hər kəs üçün.',
            'items': [
                {'title': 'Frilanser / dizayner / bloqer', 'body': 'Müştərilər, deadline-lar, ideyalar, yazışmalar — sistem hər şeyi bir yerdə saxlayır.'},
                {'title': 'Rəhbər / sahibkar', 'body': 'Komanda, layihələr, qərarlar, nəzarət — hər şeyi başda saxlamağa ehtiyac olmadan.'},
                {'title': 'Developer', 'body': 'Layihə konsepsiyası, qərarlar tarixçəsi, tapşırıqlar — üstəgəl kod redaktoru ilə birbaşa inteqrasiya.'},
                {'title': 'Böyük həcmdə işi olan hər kəs', 'body': 'Nə ilə məşğul olduğunun fərqi yoxdur. Giriş baryeri sıfırdır — sadəcə danış.'}
            ]
        },
        'devTeam': {
            'title': 'İnkişafın ətrafında əməliyyat qatı.',
            'body': [
                'Kontekst yalnız kodda itmir. Qərarlar çatlarda yox olur. Bir həftə sonra komanda məhz nəyə görə belə etdiyini bərpa edə bilmir.',
                'Logitaka qərarlar tarixini, layihənin cari vəziyyətini və növbəti addımları tək bir yerdə saxlayır — həmişə aktualdır.',
                'Koddaki Sİ köməkçiləri ilə işləyənlər üçün: tapşırığı Logitaka-da müzakirə et — bir hərəkətlə hazır təlimatları redaktora göndər. Kod lazımsız təkrarlanmalar olmadan, təsdiqlənmiş təlimatlarla sənin nəzarətin altında icra olunur.'
            ]
        },
        'pricing': {
            'title': 'Tariflər.',
            'cards': [
                {
                    'label': 'Starter',
                    'name': 'Starter',
                    'price': '$10 / ay',
                    'body': 'Sistemə tam giriş. Şəxsi istifadə və az həcmli tapşırıqlar üçün uyğundur.',
                    'cta': 'Siyahıya qoşul'
                },
                {
                    'label': 'Pro',
                    'name': 'Pro',
                    'price': '$25 / ay',
                    'body': 'Logitaka-nı gündəlik əsas iş aləti kimi istifadə edənlər üçün.',
                    'cta': 'Siyahıya qoşul'
                },
                {
                    'label': 'Custom',
                    'name': 'Custom',
                    'price': 'Şirkətlər üçün',
                    'body': 'Məlumat məxfiliyi tələbləri olan təşkilatlar üçün. Yerli dil modeli ilə yerli infrastrukturda quraşdırma. Bizimlə əlaqə saxlayın.',
                    'cta': 'Əlaqə'
                }
            ],
            'waitlist': 'İndi beta-test gedir. Müraciət et — giriş əldə edən ilk şəxslərdən ol.'
        },
        'faq': {
            'title': 'FAQ',
            'items': [
                {'question': 'Logitaka nədir?', 'answer': 'Sİ əsaslı iş idarəetmə sistemi. Sən nə baş verdiyini danışırsan — o isə strukturu yığır, layihələri idarə edir, xatırladır və istiqamətləndirir.'},
                {'question': 'Bu sadəcə bir Sİ-çatdır?', 'answer': 'Xeyr. Adi çat suallara cavab verir və səni unudur. Logitaka isə daimi konteksti qoruyur və işlərinin ətrafında əməliyyat sistemi kimi fəaliyyət göstərir.'},
                {'question': 'Texnologiyaları anlamaq lazımdırmı?', 'answer': 'Xeyr. Sadəcə danışmaq və ya yazmaq kifayətdir — sistem qalan hər şeyi özü edir.'},
                {'question': 'Bu kimin üçündür?', 'answer': 'Çoxlu işi olan və onları qaydada saxlayan sistemi olmayan hər kəs üçün.'},
                {'question': 'Artıq mütəşəkkil olmaq lazımdırmı?', 'answer': 'Xeyr. Sistem xaosu alır və onu özü strukturlaşdırır.'},
                {'question': 'Bu, komandalar üçün işləyir?', 'answer': 'Bəli. Sistem vasitəsilə əməkdaşlar üçün tapşırıq və xatırlatmaları idarə edə bilərsiniz.'},
                {'question': 'Məlumatların məxfiliyi ilə bağlı vəziyyət necədir?', 'answer': 'Yüksək tələbləri olan şirkətlər üçün — xarici agentlər olmadan yerli quraşdırılan Custom planı.'}
            ]
        },
        'finalCta': {
            'headline': 'Logitaka. İşlərini idarə edən sistem.',
            'body': 'Beta-test açıqdır. Müraciət et — giriş əldə et və bunun sənin real tapşırıqlarında necə işlədiyini gör.',
            'primary': 'Siyahıya qoşul',
            'secondary': 'Necə işlədiyinə bax'
        }
    }
}

for lang, filepath in files.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    update_data = updates[lang]
    
    # Update hero
    for k, v in update_data['hero'].items():
        data['hero'][k] = v
    # Ensure stats are kept? Let's keep stats. Visual cards are kept? Let's keep them if not in update.
    # The keys not in update_data won't be modified.
    
    data['problem']['title'] = update_data['problem']['title']
    data['problem']['items'] = update_data['problem']['items']
    # Not modifying closing if not specified (wait, closing is not in new text? Let's set it to empty? No, leave as is or clear it? In the text there is none, so let's delete closing or keep as is. Let's keep, it's fine).
    
    data['transformation']['title'] = update_data['transformation']['title']
    data['transformation']['body'] = update_data['transformation']['body']
    
    data['capabilities']['title'] = update_data['capabilities']['title']
    data['capabilities']['items'] = update_data['capabilities']['items']
    
    data['context']['title'] = update_data['context']['title']
    data['context']['body'] = update_data['context']['body']
    
    data['audience']['title'] = update_data['audience']['title']
    data['audience']['items'] = update_data['audience']['items']
    
    data['devTeam']['title'] = update_data['devTeam']['title']
    data['devTeam']['body'] = update_data['devTeam']['body']
    
    data['pricing']['title'] = update_data['pricing']['title']
    data['pricing']['cards'][0]['name'] = update_data['pricing']['cards'][0]['name']
    data['pricing']['cards'][0]['price'] = update_data['pricing']['cards'][0]['price']
    data['pricing']['cards'][0]['body'] = update_data['pricing']['cards'][0]['body']
    data['pricing']['cards'][0]['cta'] = update_data['pricing']['cards'][0]['cta']
    
    data['pricing']['cards'][1]['name'] = update_data['pricing']['cards'][1]['name']
    data['pricing']['cards'][1]['price'] = update_data['pricing']['cards'][1]['price']
    data['pricing']['cards'][1]['body'] = update_data['pricing']['cards'][1]['body']
    data['pricing']['cards'][1]['cta'] = update_data['pricing']['cards'][1]['cta']
    
    data['pricing']['cards'][2]['name'] = update_data['pricing']['cards'][2]['name']
    data['pricing']['cards'][2]['price'] = update_data['pricing']['cards'][2]['price']
    data['pricing']['cards'][2]['body'] = update_data['pricing']['cards'][2]['body']
    data['pricing']['cards'][2]['cta'] = update_data['pricing']['cards'][2]['cta']
    
    data['pricing']['waitlist'] = update_data['pricing']['waitlist']
    
    data['faq']['title'] = update_data['faq']['title']
    data['faq']['items'] = update_data['faq']['items']
    
    data['finalCta']['title'] = update_data['finalCta']['headline'] # JSON maps it to title
    data['finalCta']['body'] = update_data['finalCta']['body']
    data['finalCta']['primary'] = update_data['finalCta']['primary']
    data['finalCta']['secondary'] = update_data['finalCta']['secondary']
    
    if 'founder' in data:
        del data['founder']
        
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Updates completed successfully.")
