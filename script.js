const translations = {
  ru: {
    navProjects: 'Проекты', navAbout: 'Обо мне', heroEyebrow: 'НЕЗАВИСИМЫЙ РАЗРАБОТЧИК · 2026', heroTitle: 'Делаю<br><em>идеи</em> осязаемыми.', heroCopy: 'pav / An Ra. Экспериментирую с ИИ, Python, десктопными утилитами, игровыми прототипами и тем, что интересно собрать своими руками.', heroCta: 'Смотреть работы', focusLabel: 'СЕЙЧАС В ФОКУСЕ', focusText: 'Модели языка,<br>инструменты и<br>живые прототипы.', selectedWork: 'ИЗБРАННЫЕ РАБОТЫ', projectCount: 'проекта в каталоге', projectCountSingular: 'проект в каталоге', projectsTitle: 'Работы в процессе<br>и уже готовые вещи.', filterAll: 'Все', filterAi: 'ИИ', filterGames: 'Игры', aiTag: 'ИИ', statusBuilding: 'В развитии', statusExplore: 'Исследование', clyxDescription: 'Собственный пайплайн для датасета и обучения языковой модели с нуля. Уже обучена Clyx 0.2 — 115.67M BASE.', stage: 'Этап', clyxStage: 'Доказательство концепции', clyxStep1: 'Датасет и токенайзер', clyxStep2: 'Обучение базовой модели', clyxStep3: 'Следующая версия', openRepository: 'Открыть репозиторий', modDescription: 'Песочница для изучения Minecraft Forge: структура модов, Gradle-сборка и подготовка собственного мода.', modStage: 'Настройка окружения', modStep1: 'Forge окружение', modStep2: 'Первый модуль', modStep3: 'Игровая механика', localProject: 'Локальный проект', aboutLabel: 'ОБО МНЕ', aboutTitle: 'Любопытство —<br>мой основной стек.', aboutText1: 'Мне интересно не только пользоваться технологиями, но и разбирать их на части: от игровых экспериментов до обучения собственной языковой модели.', aboutText2: 'Этот сайт — живая карта работ. У каждого проекта есть не только описание, но и честный этап, на котором он находится.', findGithub: 'Найти меня на GitHub', footer: 'СДЕЛАНО В МЛЕЧНОМ ПУТИ · 2026', modelAria: 'Открыть подробности о модели Clyx', modelDetails: `<p class="dialog-kicker">Clyx 0.2 · 115.67M BASE</p><h2 id="model-dialog-title">Модель,<br><em>собранная с нуля.</em></h2><p class="dialog-lead">Clyx — авторская causal language model: она предсказывает и продолжает текст, опираясь на предшествующий контекст.</p><div class="model-facts"><div><span>ПАРАМЕТРЫ</span><strong>115.67M</strong></div><div><span>КОНТЕКСТ</span><strong>2 048 токенов</strong></div><div><span>СЛОВАРЬ</span><strong>40 000 BPE</strong></div><div><span>ОБУЧЕНИЕ</span><strong>~1.57B токенов</strong></div></div><div class="detail-grid"><section><h3>Что сделано</h3><p>С нуля подготовлены данные и ByteLevel BPE-токенайзер, создан Transformer и проведено обучение без внешних предобученных весов.</p><ul><li>12 слоёв, hidden size 768, 12 attention heads</li><li>RoPE, RMSNorm и SwiGLU</li><li>Веса в Safetensors, точность bfloat16</li></ul></section><section><h3>Как обучалась</h3><p>Датасет — русский и английский текст, а также Python и C/C++ код: около 10 GB исходных данных.</p><ul><li>AdamW (fused) + Cosine LR с warmup</li><li>3 000 шагов, эффективный batch size 256</li><li>NVIDIA RTX PRO 6000 · validation loss 1.4565</li></ul></section><section class="detail-warning"><h3>Важно знать</h3><p>Это базовая модель, а не готовый чат-ассистент: она продолжает текст, но не обучена отвечать на вопросы или следовать инструкциям. Для диалогов ей нужен отдельный этап instruction tuning.</p></section></div><div class="dialog-actions"><a class="button button-primary" href="https://huggingface.co/syntropic-clx/Clyx_0.2-115.67M-BASE" target="_blank" rel="noreferrer">Открыть на Hugging Face <span>↗</span></a><a class="button button-quiet" href="https://github.com/PavBss/LM" target="_blank" rel="noreferrer">Исходный код ↗</a></div>`
  },
  en: {
    navProjects: 'Projects', navAbout: 'About', heroEyebrow: 'INDEPENDENT BUILDER · 2026', heroTitle: 'Turning <em>ideas</em><br>into real things.', heroCopy: 'pav / An Ra. I explore AI, Python, desktop tools, game prototypes, and anything worth building by hand.', heroCta: 'View work', focusLabel: 'CURRENT FOCUS', focusText: 'Language models,<br>tools, and living<br>prototypes.', selectedWork: 'SELECTED WORK', projectCount: 'projects in the catalogue', projectCountSingular: 'project in the catalogue', projectsTitle: 'Work in progress<br>and things already built.', filterAll: 'All', filterAi: 'AI', filterGames: 'Games', aiTag: 'AI', statusBuilding: 'In progress', statusExplore: 'Exploration', clyxDescription: 'A custom dataset and language-model training pipeline built from scratch. Clyx 0.2 — 115.67M BASE is already trained.', stage: 'Stage', clyxStage: 'Proof of concept', clyxStep1: 'Dataset & tokenizer', clyxStep2: 'Base-model training', clyxStep3: 'Next version', openRepository: 'Open repository', modDescription: 'A sandbox for learning Minecraft Forge: mod structure, Gradle builds, and the groundwork for an original mod.', modStage: 'Environment setup', modStep1: 'Forge environment', modStep2: 'First module', modStep3: 'Game mechanic', localProject: 'Local project', aboutLabel: 'ABOUT', aboutTitle: 'Curiosity is<br>my main stack.', aboutText1: 'I am interested in more than using technology — I like taking it apart, from game experiments to training a language model of my own.', aboutText2: 'This site is a living map of the work. Each project has both a description and an honest development stage.', findGithub: 'Find me on GitHub', footer: 'MADE IN THE MILKY WAY · 2026', modelAria: 'Open Clyx model details', modelDetails: `<p class="dialog-kicker">Clyx 0.2 · 115.67M BASE</p><h2 id="model-dialog-title">A model<br><em>built from scratch.</em></h2><p class="dialog-lead">Clyx is an original causal language model: it predicts and continues text from the preceding context.</p><div class="model-facts"><div><span>PARAMETERS</span><strong>115.67M</strong></div><div><span>CONTEXT</span><strong>2,048 tokens</strong></div><div><span>VOCABULARY</span><strong>40,000 BPE</strong></div><div><span>TRAINING</span><strong>~1.57B tokens</strong></div></div><div class="detail-grid"><section><h3>What was built</h3><p>The data and ByteLevel BPE tokenizer were prepared from scratch, then a Transformer was created and trained without external pretrained weights.</p><ul><li>12 layers, hidden size 768, 12 attention heads</li><li>RoPE, RMSNorm and SwiGLU</li><li>Safetensors weights, bfloat16 precision</li></ul></section><section><h3>How it was trained</h3><p>The dataset combines Russian and English text with Python and C/C++ code: roughly 10 GB of raw data.</p><ul><li>AdamW (fused) + cosine LR with warmup</li><li>3,000 steps, effective batch size of 256</li><li>NVIDIA RTX PRO 6000 · validation loss 1.4565</li></ul></section><section class="detail-warning"><h3>Good to know</h3><p>This is a base model, not a ready-made chat assistant: it continues text but has not been trained to answer questions or follow instructions. A separate instruction-tuning stage is needed for dialogue.</p></section></div><div class="dialog-actions"><a class="button button-primary" href="https://huggingface.co/syntropic-clx/Clyx_0.2-115.67M-BASE" target="_blank" rel="noreferrer">Open on Hugging Face <span>↗</span></a><a class="button button-quiet" href="https://github.com/PavBss/LM" target="_blank" rel="noreferrer">Source code ↗</a></div>`
  }
};
translations.ru.robloxDescription = 'Волейбольная игра в Roblox: механики матча, движения игроков и фундамент для соревновательного игрового процесса.';
translations.ru.robloxStage = 'Активная разработка · 49%';
translations.ru.robloxStep1 = 'Основа игры';
translations.ru.robloxStep2 = 'Базовые механики';
translations.ru.robloxStep3 = 'Матчи и полировка';
translations.en.robloxDescription = 'A Roblox volleyball game with match systems, player movement, and the foundation for competitive gameplay.';
translations.en.robloxStage = 'Active development · 49%';
translations.en.robloxStep1 = 'Game foundation';
translations.en.robloxStep2 = 'Core mechanics';
translations.en.robloxStep3 = 'Matches & polish';
const language = navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
const dictionary = translations[language];
document.documentElement.lang = language;
document.title = language === 'ru' ? 'pav — проекты и эксперименты' : 'pav — projects & experiments';
document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = dictionary[element.dataset.i18n]; });
document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.innerHTML = dictionary[element.dataset.i18nHtml]; });
const modelCard = document.querySelector('.model-card');
const modelDialog = document.querySelector('#model-dialog');
const modelContent = document.querySelector('#model-dialog-content');
const closeModel = document.querySelector('[data-close-model]');
modelCard.setAttribute('aria-label', dictionary.modelAria);
modelContent.innerHTML = dictionary.modelDetails;
const openModel = () => modelDialog.showModal();
modelCard.addEventListener('click', (event) => { if (!event.target.closest('a')) openModel(); });
modelCard.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openModel(); } });
closeModel.addEventListener('click', () => modelDialog.close());
modelDialog.addEventListener('click', (event) => { if (event.target === modelDialog) modelDialog.close(); });
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
const count = document.querySelector('#project-count');
const countLabel = document.querySelector('#project-count-label');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    let visible = 0;
    filters.forEach((button) => button.classList.toggle('is-active', button === filter));
    cards.forEach((card) => {
      const show = category === 'all' || card.dataset.category.includes(category);
      card.classList.toggle('hidden', !show);
      if (show) visible += 1;
    });
    count.textContent = visible;
    countLabel.textContent = visible === 1 ? dictionary.projectCountSingular : dictionary.projectCount;
  });
});
