// ============================================================
// i18n Translations — all UI strings in en/zh
// ============================================================
export type Lang = 'en' | 'zh'
export type TranslationKey = keyof typeof translations

export const translations = {
  // ---- Navbar ----
  'nav.learningPlatform': { en: 'Learning Platform', zh: '学习平台' },
  'nav.dashboard': { en: 'Dashboard', zh: '学习仪表盘' },
  'nav.learn': { en: 'Learning Center', zh: '课程学习' },
  'nav.practice': { en: 'Practice Center', zh: '练习中心' },
  'nav.flashcards': { en: 'Flashcards', zh: '闪卡' },
  'nav.vocabulary': { en: 'Vocabulary', zh: '古英语词汇' },
  'nav.mistakes': { en: 'Mistake Log', zh: '错题本' },
  'nav.teacher': { en: 'Teacher Mode', zh: '授课模式' },
  'nav.darkMode': { en: 'Dark Mode', zh: '深色模式' },
  'nav.switchLang': { en: '中文', zh: 'English' },
  'nav.langTip': { en: 'Switch Language', zh: '切换语言' },

  // ---- Sidebar ----
  'sidebar.unit1': { en: 'Unit 1 · Fiction Reading', zh: '单元一 · 小说阅读' },
  'sidebar.unit2': { en: 'Unit 2 · Poetry Reading', zh: '单元二 · 诗歌阅读' },

  // ---- Landing ----
  'landing.title': { en: 'SSAT / SAT Fiction & Poetry Prep Platform', zh: 'SSAT / SAT 小说与诗歌备考平台' },
  'landing.subtitle': {
    en: 'An interactive learning platform based on Fiction & Poetry Exam Prep Notes, supporting both self-study and teacher presentation modes.',
    zh: '基于《小说与诗歌考试备考笔记》的互动学习平台，支持自学与授课两种模式。',
  },
  'landing.totalModules': { en: 'Total Modules', zh: '模块总数' },
  'landing.completed': { en: 'Completed', zh: '已完成' },
  'landing.progress': { en: 'Progress', zh: '学习进度' },
  'landing.estTime': { en: 'Est. Time', zh: '预计时长' },
  'landing.learningMap': { en: 'Learning Map', zh: '学习地图' },
  'landing.learningMapDesc': {
    en: '14 skill modules progressing by cognitive level, from foundational schemas to advanced poetry analysis.',
    zh: '14 个技能模块按认知层级递进，从基础图式到高级诗歌分析。',
  },
  'landing.startLearning': { en: 'Start Learning', zh: '开始学习' },
  'landing.teacherMode': { en: 'Teacher Presentation Mode', zh: '授课演示模式' },
  'landing.teacherModeDesc': {
    en: 'Switch to Presentation Mode for step-by-step content reveal, ideal for classroom projection and board-level demonstration.',
    zh: '切换至演示模式，逐节展示内容，适合课堂投屏与板书讲解。',
  },
  'landing.enterPresentation': { en: 'Enter Presentation Mode', zh: '进入演示模式' },
  'landing.todayRecommend': { en: "Today's Recommendation", zh: '今日推荐' },
  'landing.recommendTitle': { en: 'Appointment with Love', zh: '《约会的爱》' },
  'landing.recommendDesc': {
    en: `The short story "Appointment with Love" is a classic example for practicing "Anticipate Outcome." Try answering the 6 prediction questions while reading.`,
    zh: '短篇小说《约会的爱》是练习"预测结果"策略的经典范例。边读边回答 6 道预测题试试看。',
  },
  'landing.goToModule': { en: 'Go to Module 1.3 →', zh: '前往模块 1.3 →' },

  // ---- Learn ----
  'learn.title': { en: 'Learning Center', zh: '课程学习' },
  'learn.subtitle': {
    en: 'Complete the following modules in order. Each module includes theory explanations, model passage analysis, and practice exercises.',
    zh: '按顺序完成以下模块。每个模块包含理论讲解、范文分析与练习题目。',
  },
  'learn.unit1': { en: 'Unit 1 · Fiction Reading', zh: '单元一 · 小说阅读' },
  'learn.unit2': { en: 'Unit 2 · Poetry Reading', zh: '单元二 · 诗歌阅读' },
  'learn.locked': { en: 'Locked', zh: '未解锁' },
  'learn.available': { en: 'Available', zh: '可学习' },
  'learn.inProgress': { en: 'In Progress', zh: '进行中' },
  'learn.completed': { en: 'Completed', zh: '已完成' },
  'learn.questions': { en: 'questions', zh: '道题' },
  'learn.enter': { en: 'Enter', zh: '进入' },
  'learn.review': { en: 'Review', zh: '复习' },

  // ---- Module Page ----
  'module.notFound': { en: 'Module Not Found', zh: '模块未找到' },
  'module.notFoundDesc': {
    en: 'Please check the URL or return to the Learning Center.',
    zh: '请检查 URL 或返回课程学习页面。',
  },
  'module.backToLearn': { en: 'Back to Learning Center', zh: '返回课程学习' },
  'module.passagePractice': { en: 'Passage Practice', zh: '篇章练习' },
  'module.questions': { en: 'questions', zh: '道题' },
  'module.showAllAnswers': { en: 'Show All Answers', zh: '显示全部答案' },
  'module.hideAllAnswers': { en: 'Hide All Answers', zh: '隐藏全部答案' },
  'module.noPractice': {
    en: 'No passage practice available for this module',
    zh: '本模块暂无篇章练习',
  },
  'module.choice': { en: 'Choice', zh: '选择题' },
  'module.multiselect': { en: 'Multi-Select', zh: '多选题' },
  'module.fillIn': { en: 'Fill-in', zh: '填空题' },
  'module.shortAnswer': { en: 'Short Answer', zh: '简答题' },
  'module.correctAnswer': { en: '← Correct Answer', zh: '← 正确答案' },
  'module.showAnswer': { en: 'Show Answer', zh: '显示答案' },
  'module.hideAnswer': { en: 'Hide Answer', zh: '隐藏答案' },
  'module.viewExplanation': { en: 'View Explanation', zh: '查看解析' },
  'module.clickToReveal': { en: 'Click "Show Answer" to reveal', zh: '点击"显示答案"查看' },
  'module.answer': { en: 'Answer:', zh: '答案：' },
  'module.studyMode': { en: 'Study Mode:', zh: '学习模式：' },
  'module.learnFirst': { en: 'Learn First', zh: '先学后练' },
  'module.practiceFirst': { en: 'Practice First', zh: '先练后学' },
  'module.progress': { en: 'Module Progress', zh: '模块进度' },
  'module.markCompleteDesc': {
    en: 'Mark this module as complete after finishing all learning content and passage practice.',
    zh: '完成全部学习内容和篇章练习后，将本模块标记为已完成。',
  },
  'module.markComplete': { en: 'Mark Complete', zh: '标记完成' },
  'module.info': { en: 'Module Info', zh: '模块信息' },
  'module.unit': { en: 'Unit', zh: '所属单元' },
  'module.estTime': { en: 'Est. Time', zh: '预计时长' },
  'module.prerequisites': { en: 'Prerequisites', zh: '前置模块' },
  'module.passagePracticeCount': { en: 'Passage Practice', zh: '篇章练习' },
  'module.skillTags': { en: 'Skill Tags', zh: '技能标签' },
  'module.none': { en: 'None', zh: '无' },
  'module.learningObjectives': { en: 'Learning Objectives', zh: '学习目标' },
  'module.unitLabel': { en: 'Unit', zh: '单元' },
  'module.addNote': { en: 'Add Note', zh: '添加笔记' },
  'module.writeNote': { en: 'Write your note...', zh: '写下你的笔记...' },
  'module.cancel': { en: 'Cancel', zh: '取消' },
  'module.save': { en: 'Save', zh: '保存' },

  // ---- Practice ----
  'practice.title': { en: 'Practice Center', zh: '练习中心' },
  'practice.allModules': { en: 'All Modules', zh: '全部模块' },
  'practice.allTypes': { en: 'All Types', zh: '全部题型' },
  'practice.multipleChoice': { en: 'Multiple Choice', zh: '单选题' },
  'practice.multipleSelect': { en: 'Multiple Select', zh: '多选题' },
  'practice.fillIn': { en: 'Fill in the Blank', zh: '填空题' },
  'practice.shortAnswer': { en: 'Short Answer', zh: '简答题' },
  'practice.submit': { en: 'Submit', zh: '提交' },
  'practice.correct': { en: 'Correct!', zh: '回答正确！' },
  'practice.incorrect': { en: 'Incorrect', zh: '回答错误' },
  'practice.yourAnswer': { en: 'Your answer:', zh: '你的答案：' },
  'practice.correctAnswer': { en: 'Correct answer:', zh: '正确答案：' },
  'practice.typeAnswer': { en: 'Type your answer...', zh: '输入你的答案...' },

  // ---- Dashboard ----
  'dashboard.title': { en: 'Learning Dashboard', zh: '学习仪表盘' },
  'dashboard.modulesCompleted': { en: 'Modules Completed', zh: '已学模块' },
  'dashboard.practiceAccuracy': { en: 'Practice Accuracy', zh: '练习正确率' },
  'dashboard.mistakes': { en: 'Mistakes', zh: '错题数' },
  'dashboard.moduleProgress': { en: 'Module Progress', zh: '模块进度' },
  'dashboard.done': { en: 'Done', zh: '完成' },

  // ---- Vocabulary ----
  'vocabulary.title': { en: 'Poetry Archaic Vocabulary', zh: '古英语诗歌词汇' },
  'vocabulary.flashcardMode': { en: 'Flashcard Mode', zh: '闪卡模式' },
  'vocabulary.subtitle': {
    en: '+ high-frequency poetry archaic vocabulary, categorized by 7 parts of speech.',
    zh: '+ 个高频诗歌古英语词汇，按 7 种词性分类。',
  },
  'vocabulary.search': { en: 'Search archaic or modern English...', zh: '搜索古英语或现代英语...' },
  'vocabulary.allPOS': { en: 'All POS', zh: '全部词性' },

  // ---- Flashcards ----
  'flashcards.title': { en: 'Vocabulary Flashcards', zh: '词汇闪卡' },
  'flashcards.backToVocab': { en: 'Back to Vocabulary', zh: '返回词汇表' },
  'flashcards.progress': { en: 'Mastered', zh: '已掌握' },
  'flashcards.tapToFlip': { en: 'Tap to Flip', zh: '点击翻转' },
  'flashcards.skip': { en: 'Skip', zh: '跳过' },
  'flashcards.mastered': { en: 'Mastered', zh: '已掌握' },

  // ---- Mistakes ----
  'mistakes.title': { en: 'Mistake Log', zh: '错题本' },
  'mistakes.clearLog': { en: 'Clear Log', zh: '清空记录' },
  'mistakes.noMistakes': { en: 'No mistakes yet', zh: '暂无错题' },
  'mistakes.keepUp': { en: 'Keep it up!', zh: '继续保持！' },
  'mistakes.yourAnswer': { en: 'Your answer:', zh: '你的答案：' },
  'mistakes.correctAnswer': { en: 'Correct answer:', zh: '正确答案：' },

  // ---- Teacher ----
  'teacher.title': { en: 'Teacher Presentation Panel', zh: '授课演示面板' },
  'teacher.presentationMode': { en: 'Presentation Mode', zh: '演示模式' },
  'teacher.presentationDesc': {
    en: 'When Presentation Mode is enabled, learning content supports step-by-step reveal, ideal for classroom projection. Font size is enlarged, the sidebar collapses, and full-screen display is one click away.',
    zh: '启用演示模式后，学习内容支持逐步展示，适合课堂投屏。字号增大，侧边栏收起，一键全屏。',
  },
  'teacher.enterPresentation': { en: 'Enter Presentation Mode', zh: '进入演示模式' },
  'teacher.exitPresentation': { en: 'Exit Presentation Mode', zh: '退出演示模式' },
  'teacher.quickNav': { en: 'Quick Navigation', zh: '快速导航' },
  'teacher.learningCenter': { en: 'Learning Center', zh: '课程学习' },
  'teacher.practiceCenter': { en: 'Practice Center', zh: '练习中心' },
  'teacher.classroomTips': { en: 'Classroom Tips', zh: '课堂提示' },
  'teacher.tip1': {
    en: 'In Presentation Mode, content is hidden by default. Click "Reveal Next" to show section by section.',
    zh: '演示模式下，内容默认隐藏。点击"显示下一节"逐节展示。',
  },
  'teacher.tip2': {
    en: 'Exercise answers are hidden by default in Presentation Mode, ideal for classroom Q&A.',
    zh: '演示模式下练习题答案默认隐藏，适合课堂提问互动。',
  },
  'teacher.tip3': {
    en: 'Press F11 to enter browser fullscreen.',
    zh: '按 F11 进入浏览器全屏模式。',
  },
  'teacher.tip4': {
    en: 'Use the sidebar to quickly navigate between modules.',
    zh: '使用侧边栏在模块之间快速跳转。',
  },

  // ---- StepReveal ----
  'stepReveal.next': { en: 'Reveal Next', zh: '显示下一节' },
  'stepReveal.showAll': { en: 'Show All', zh: '显示全部' },
  'stepReveal.stepByStep': { en: 'Step by Step', zh: '逐步展示' },

  // ---- Type Labels ----
  'type.choice': { en: 'Choice', zh: '选择题' },
  'type.multiselect': { en: 'Multi-Select', zh: '多选题' },
  'type.fill': { en: 'Fill-in', zh: '填空题' },
  'type.short_answer': { en: 'Short Answer', zh: '简答题' },
} as const

/** Get a translation string by key */
export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? key
}
