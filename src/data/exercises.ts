export interface Exercise {
  id: string
  moduleId: string
  moduleTitle: string
  type: 'choice' | 'fill' | 'short_answer'
  typeLabel: string
  question: string
  answer: string
  options?: string[]
  hint?: string
  explanation?: string
}

export const exercises: Exercise[] = [
  // 1.1 Schema
  {
    id: '1-1-ex01', moduleId: '1-1', moduleTitle: '1.1 图式认知',
    type: 'choice', typeLabel: '选择题',
    question: 'Schema 理论的核心作用是什么？',
    answer: '用已有知识框架快速理解新信息',
    options: ['逐字翻译文本', '用已有知识框架快速理解新信息', '记忆所有生词', '分析句子语法结构'],
    explanation: '图式是认知心理学概念，指用大脑中已有的知识框架（图式）来快速归类和理解新信息。',
  },
  {
    id: '1-1-ex02', moduleId: '1-1', moduleTitle: '1.1 图式认知',
    type: 'choice', typeLabel: '选择题',
    question: 'SSAT 阅读中，Schema 理论最有助于解决哪类问题？',
    answer: '快速判断文章体裁和预期内容',
    options: ['背诵文章细节', '快速判断文章体裁和预期内容', '学习新语法结构', '提高书写速度'],
    explanation: '激活正确的图式能让读者在首段就判断出文章类型，从而带着正确的预期框架去阅读。',
  },
  {
    id: '1-1-ex03', moduleId: '1-1', moduleTitle: '1.1 图式认知',
    type: 'fill', typeLabel: '填空题',
    question: '阅读以下开篇，判断它触发了哪种图式（小说/议论文/说明文）？\n\n"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
    answer: '小说',
    explanation: '这是《傲慢与偏见》的开篇。虽然语气像在论述一个"普遍真理"，但整句的讽刺口吻和话题（婚姻、财富）触发的是小说图式而非议论文。',
  },

  // 1.2 Narrative Structure
  {
    id: '1-2-ex01', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'choice', typeLabel: '选择题',
    question: '叙事结构的五要素中，哪个要素通常揭示故事的主题？',
    answer: 'Resolution（结局）',
    options: ['Setting（背景）', 'Conflict（冲突）', 'Climax（高潮）', 'Resolution（结局）'],
    explanation: '结局（Resolution）展示了冲突解决后的状态，通常暗示作者想传达的主题或价值观。',
  },
  {
    id: '1-2-ex02', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'fill', typeLabel: '填空题',
    question: '在 Narrative Structure 五要素中，故事的转折点（turning point）对应哪个要素？',
    answer: 'Climax',
    explanation: 'Climax（高潮）是冲突达到顶点的时刻，是整个故事的转折点。此后情节走向结局。',
  },
  {
    id: '1-2-ex03', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'choice', typeLabel: '选择题',
    question: '以下哪个选项是 SSAT 主旨题的正确答题策略？',
    answer: '重点关注结局（Resolution）部分',
    options: [
      '逐字读完整篇文章后再作答',
      '只看开头段落即可作答',
      '重点关注结局（Resolution）部分',
      '不需要理解结构，直接凭感觉选',
    ],
    explanation: 'Resolution 是作者观点的最终落点，往往直接暗示文章主题。',
  },
  {
    id: '1-2-ex04', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'fill', typeLabel: '填空题',
    question: '在叙事五要素中，"Where and when does the story take place?" 对应 _____ 要素。（填英文）',
    answer: 'Setting',
    explanation: 'Setting 涵盖了故事发生的时间和地点，是所有叙事文本的基础要素。',
  },

  // 1.5 Context Clues
  {
    id: '1-5-ex01', moduleId: '1-5', moduleTitle: '1.5 上下文猜词',
    type: 'choice', typeLabel: '选择题',
    question: '"The ancient manuscript was *illegible*; the ink had faded so badly that not a single word could be made out."\n\n*illegible* 最可能的意思是？',
    answer: '无法辨认的',
    options: ['珍贵的', '无法辨认的', '手写的', '古代的'],
    explanation: '分号后面直接解释：墨水褪色严重，一个字也认不出 → illegible = 无法辨认的。这是 Explanation 类型的上下文线索。',
  },
  {
    id: '1-5-ex02', moduleId: '1-5', moduleTitle: '1.5 上下文猜词',
    type: 'choice', typeLabel: '选择题',
    question: '以下哪种不是 7 种上下文猜词线索之一？',
    answer: '词根词缀法',
    options: ['Explanation（解释）', '词根词缀法', 'Comparison-Contrast（对比）', 'Co-occurrence（共现）'],
    explanation: '词根词缀法是词汇学方法，不属于上下文线索猜词策略。7 种线索均基于语境信息。',
  },
  {
    id: '1-5-ex03', moduleId: '1-5', moduleTitle: '1.5 上下文猜词',
    type: 'fill', typeLabel: '填空题',
    question: '猜词三原则中，"不要孤立看一个词，要看整段甚至全文"对应哪条原则？（填英文）',
    answer: 'Whole picture',
    explanation: 'Whole picture 原则强调从全局语境出发判断词义，而非只看单词所在的那一句话。',
  },

  // 2.1 Major Components
  {
    id: '2-1-ex01', moduleId: '2-1', moduleTitle: '2.1 诗歌基本要素',
    type: 'choice', typeLabel: '选择题',
    question: '诗歌中，Stanza 指的是什么？',
    answer: '由多行组成的段落单位',
    options: ['诗歌中的一行', '由多行组成的段落单位', '行末的押韵', '诗歌的节奏模式'],
    explanation: 'Stanza（诗节）= 多行组成的段落，相当于散文中的段落。Line（行）= 一行。',
  },
  {
    id: '2-1-ex02', moduleId: '2-1', moduleTitle: '2.1 诗歌基本要素',
    type: 'fill', typeLabel: '填空题',
    question: '诗歌的"行"在英文中称为 _____。',
    answer: 'line',
    explanation: 'Line 是诗歌最基本的组成单位。',
  },

  // 2.2 Rhyme Scheme
  {
    id: '2-2-ex01', moduleId: '2-2', moduleTitle: '2.2 尾韵格式',
    type: 'choice', typeLabel: '选择题',
    question: '"Whose woods these are I think I know.\nHis house is in the village though;\nHe will not see me stopping here\nTo watch his woods fill up with snow."\n\n这段诗的押韵格式是？',
    answer: 'abab',
    options: ['aabb', 'abab', 'abba', 'aaaa'],
    explanation: 'know(a) — though(b) — here(a) — snow(b)，隔行押韵 = abab（交叉韵）。',
  },
  {
    id: '2-2-ex02', moduleId: '2-2', moduleTitle: '2.2 尾韵格式',
    type: 'choice', typeLabel: '选择题',
    question: 'aabb 押韵格式也称为？',
    answer: 'Couplet Rhyme（联韵）',
    options: ['Alternate Rhyme（交叉韵）', 'Couplet Rhyme（联韵）', 'Free Verse（自由诗）', 'Blank Verse（无韵诗）'],
    explanation: 'aabb 格式中相邻两行押韵，形成"对联"效果，称为 Couplet Rhyme。',
  },

  // 2.5 Figurative Language
  {
    id: '2-5-ex01', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'choice', typeLabel: '选择题',
    question: '"Her eyes were like stars in the night sky." 这句话使用了什么修辞手法？',
    answer: 'Simile（明喻）',
    options: ['Metaphor（暗喻）', 'Simile（明喻）', 'Personification（拟人）', 'Symbol（象征）'],
    explanation: '"like stars" = 用 like 进行直接比较 → Simile。Metaphor 不用 like/as。',
  },
  {
    id: '2-5-ex02', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'choice', typeLabel: '选择题',
    question: '"All the world\'s a stage, and all the men and women merely players."\n这句话使用了什么修辞手法？',
    answer: 'Metaphor（暗喻）',
    options: ['Simile（明喻）', 'Metaphor（暗喻）', 'Personification（拟人）', 'Imagery（意象）'],
    explanation: '没有 like/as，直接将世界比作舞台 → Metaphor。',
  },
  {
    id: '2-5-ex03', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'choice', typeLabel: '选择题',
    question: '在诗歌中，玫瑰通常象征什么？',
    answer: '爱情与美丽',
    options: ['智慧', '死亡', '爱情与美丽', '战争'],
    explanation: '玫瑰是英语文学中最常见的象征之一，代表爱情、美丽和短暂的美好（因为花会凋谢）。',
  },
  {
    id: '2-5-ex04', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'fill', typeLabel: '填空题',
    question: '"The wind whispered through the trees." 这句话使用了 _____ 修辞手法。（填英文）',
    answer: 'Personification',
    explanation: '"风在低语"——赋予无生命的自然现象以人的行为（whispered）→ Personification（拟人）。',
  },

  // 2.6 Poetic Vocabulary
  {
    id: '2-6-ex01', moduleId: '2-6', moduleTitle: '2.6 古英语词汇',
    type: 'fill', typeLabel: '填空题',
    question: '"Thou art more lovely and more temperate." (Shakespeare)\n\n"Thou art" 在现代英语中应翻译为 _____。',
    answer: 'You are',
    explanation: 'thou = you（主格），art = are（与 thou 搭配的特殊形式）。thou art = you are。',
  },
  {
    id: '2-6-ex02', moduleId: '2-6', moduleTitle: '2.6 古英语词汇',
    type: 'choice', typeLabel: '选择题',
    question: '"She doth teach the torches to burn bright." (Romeo and Juliet)\n\n"doth teach" 的现代英语等价是？',
    answer: 'does teach',
    options: ['do teach', 'does teach', 'did teach', 'is teaching'],
    explanation: 'doth = does（第三人称单数），所以 doth teach = does teach。',
  },

  // 2.7 Poetic Grammar
  {
    id: '2-7-ex01', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'choice', typeLabel: '选择题',
    question: '"Came the dawn with rosy fingers." 这种句法结构称为？',
    answer: '倒装（Inversion）',
    options: ['省略（Elision）', '倒装（Inversion）', '头韵（Alliteration）', '押韵（Rhyme）'],
    explanation: '正常语序应为"The dawn came with rosy fingers." 主语 dawn 被放到动词 came 之后 → 主谓倒装。',
  },
  {
    id: '2-7-ex02', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'fill', typeLabel: '填空题',
    question: 'o\'er 是哪个词的音节省略形式？',
    answer: 'over',
    explanation: 'o\'er = over，\'twas = it was。音节省略是诗歌中保持韵律节奏的常见手法。',
  },
  {
    id: '2-7-ex03', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'fill', typeLabel: '填空题',
    question: '"Him I saw in the garden." 这个倒装句的正常语序是什么？',
    answer: 'I saw him in the garden',
    explanation: '宾语 him 被提前到句首 → 宾动倒装。还原为正常语序：I saw him in the garden。',
  },

  // 1.6 Narrative Perspective
  {
    id: '1-6-ex01', moduleId: '1-6', moduleTitle: '1.6 叙事视角',
    type: 'choice', typeLabel: '选择题',
    question: '在 Poe 的《The Tell-Tale Heart》中，叙述者不断声称自己没疯，但读者能明显感知他疯了。这是哪种叙述者类型？',
    answer: '无意不可靠叙述者',
    options: ['全知叙述者', '有意不可靠叙述者', '无意不可靠叙述者', '可靠的第一人称叙述者'],
    explanation: '叙述者并非有意欺骗读者——他真的相信自己没疯。这种因自身局限而不自知地歪曲事实，属于无意不可靠 (Unintentionally Unreliable)。',
  },
]

export function getExercisesByModule(moduleId: string): Exercise[] {
  return exercises.filter((e) => e.moduleId === moduleId)
}
