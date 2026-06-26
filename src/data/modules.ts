export interface Module {
  id: string
  unit: number
  order: number
  title: string
  titleCn: string
  description: string
  estimatedTime: string
  exerciseCount: number
  prerequisites: string[]
  tags: string[]
  learningObjectives: string[]
  content: { title: string; text: string }[]
}

export const modules: Module[] = [
  {
    id: '1-1', unit: 1, order: 1,
    title: 'Schema', titleCn: '1.1 图式认知',
    description: '用已有知识框架快速归类文本信息，把握文章题材和预期内容。',
    estimatedTime: '30 min', exerciseCount: 3, prerequisites: [],
    tags: ['认知策略', '阅读基础'],
    learningObjectives: ['理解 Schema 图式理论', '学会激活背景知识', '快速判断文章类型'],
    content: [
      {
        title: '理论讲解',
        text: 'Schema（图式）是认知心理学核心概念，指人脑中存储的知识框架。当我们阅读一篇文章时，大脑会自动调用已存储的相关图式来帮助理解新信息。\n\n花的图式示例：听到"花"这个词，你会立刻联想到花瓣、颜色、香气——这就是你的"花图式"在起作用。同理，如果识别出一篇文章是"短篇小说"，你就会自动激活关于人物、情节、冲突、结局的预期框架。\n\n对SSAT阅读考试，激活正确的图式意味着：能在第一段就判断出文章体裁；能预测接下来可能出现的内容类型；能更快定位关键信息（人物、时间、地点）。',
      },
      {
        title: '示例分析',
        text: '假设读到以下开篇：\n\n"It was a dark and stormy night. The old house stood alone on the hill, its windows like empty eyes staring into the darkness."\n\n你的"哥特小说图式"会立即激活，预期出现神秘事件或超自然现象、人物可能遭遇危险、氛围将持续阴暗紧张。这种预期引导你更快地处理文本信息。',
      },
      {
        title: 'SSAT 应用',
        text: '快速体裁识别：打开文章先用10秒扫读前两句话，判断是记叙文、议论文还是说明文。激活对应框架：记叙文关注人物/时间线/冲突；议论文关注论点/论据/结论；说明文关注主题句/要点/例证。带着预期阅读，不要逐字翻译。',
      },
    ],
  },
  {
    id: '1-2', unit: 1, order: 2,
    title: 'Narrative Structure', titleCn: '1.2 叙事结构',
    description: '掌握 Setting → Characters → Conflict → Climax → Resolution 五要素分析法。',
    estimatedTime: '45 min', exerciseCount: 4, prerequisites: ['1-1'],
    tags: ['结构分析', '主旨题'],
    learningObjectives: ['掌握叙事结构五要素', '使用叙事图表分析小说', '主旨题和结构题技巧'],
    content: [
      {
        title: '叙事五要素',
        text: '每篇叙事文本都包含五个基本要素：\n\nSetting（背景）：故事发生的时间和地点\nCharacters（人物）：涉及的人物\nConflict（冲突）：人物面临的问题\nClimax（高潮）：故事的转折点\nResolution（结局）：冲突如何解决\n\nThomas G. Devine 叙事图表：将以上五要素填入时间线图表，可以直观呈现故事结构。建议在阅读时画出这个图表并边读边填。',
      },
      {
        title: '范文示例',
        text: '以经典短篇《Appointment with Love》为例：\n\nSetting：Grand Central Station, New York, during WWII\nCharacters：Lieutenant John Blandford, Hollis Meynell\nConflict：John 从未见过 Hollis（仅通信13个月），他紧张于现实是否匹配想象\nClimax：John 看到一位美丽的年轻女子和一位年长女性，他必须决定走向谁\nResolution：年长女性揭示——年轻女子在考验 John 的真诚，Hollis 就是那位年长女性\n\nSSAT 常见考法：问"what is the main conflict"或"where does the climax occur"。',
      },
      {
        title: '答题技巧',
        text: '主旨题（Main Idea）：看 Resolution（结局），结局往往暗示主题\n结构题（Structure）：快速划分五要素边界，注意转折连词（but, however, suddenly）\n人物关系题：在 Characters 部分画出人物关系图\n时间线题：标注每个自然段对应的时间节点',
      },
    ],
  },
  {
    id: '1-3', unit: 1, order: 3,
    title: 'Anticipate the Outcome While Reading', titleCn: '1.3 预测结局',
    description: '6 个预测问题框架，分段阅读逐步推进，4 篇配套练习共 23 题。',
    estimatedTime: '60 min', exerciseCount: 23, prerequisites: ['1-2'],
    tags: ['预测', '推理', 'SSAT阅读'],
    learningObjectives: ['掌握6个预测问题框架', '学会分段阅读策略', '主动预测并验证'],
    content: [
      {
        title: '6 个预测问题',
        text: '在阅读过程中，使用以下6个问题框架主动预测：\n\n1. 时间 (When?)：故事发生在什么时间？\n2. 地点 (Where?)：故事发生在什么地方？\n3. 身份 (Who?)：主人公是谁？有什么特征？\n4. 遭遇 (What happens?)：主人公会遭遇什么？\n5. 行动 (What will they do?)：主人公会采取什么行动？\n6. 结局 (How does it end?)：故事如何结束？\n\n这些问题分阶段推进：第1段 → 第5段 → 第12段 → 第18段，每到一个阶段更新预测。',
      },
      {
        title: '分段阅读策略（Appointment with Love）',
        text: '阶段一（第1段）：When? → 1944年5月（二战期间）；Where? → Grand Central Station, New York。预测：战场士兵与后方恋人的故事。\n\n阶段二（第5段）：Who? → 空军中尉 John Blandford；新信息：读了13个月来信，从未见过写信人。修正预测：见面将是故事的转折点。\n\n阶段三（第12段）：新信息：他在人群中寻找戴红玫瑰的女性。预测修正：两种可能——见面成功 or 出现意外。\n\n阶段四（第18段）：结局：是那位"年长女性"在考验他。验证之前的预测哪些对了、哪些错了。',
      },
    ],
  },
  {
    id: '1-4', unit: 1, order: 4,
    title: 'Figure / Ground', titleCn: '1.4 图形/背景分析',
    description: '人物与社会背景的对比/融合分析，"Show, don\'t tell" 写作原则。',
    estimatedTime: '45 min', exerciseCount: 3, prerequisites: ['1-3'],
    tags: ['人物分析', '文学技巧'],
    learningObjectives: ['理解 Figure/Ground 理论', '识别人物与背景关系', '掌握 Show, don\'t tell 分析'],
    content: [
      {
        title: '理论框架',
        text: 'Figure/Ground 理论来源于视觉感知心理学。在文学分析中：\n\nFigure（图形/人物）：文本中最突出的元素——通常是主人公，读者注意力集中的对象\nGround（背景）：人物所处的社会、历史、物理环境\n\n三种关系模式：\n1. 对比（Contrast）：人物与背景格格不入（如《辛德勒的名单》中穿红衣的小女孩在黑白影像中）\n2. 融合（Blend）：人物完全融入背景（如普通市民在大都市的匿名生活）\n3. 渐变（Transition）：人物从格格不入逐渐融入，或反之',
      },
      {
        title: 'Show, Don\'t Tell',
        text: '"Show, don\'t tell" 是现代小说创作的金科玉律：\n\nTell（直接告诉）："John was angry."\nShow（间接展示）："John\'s knuckles went white as he gripped the table edge."\n\n通过描写人物与环境的互动来"展示"内在状态，而不是直接"告诉"读者。SSAT 常考"作者如何展示X的情感"，考察的就是这个能力。',
      },
      {
        title: '练习题示例',
        text: '阅读 Katherine Mansfield 的《Feuille d\'Album》选段：\n\n1. 找出文中所有描写画家的词句\n2. 判断画家与他所处的社会环境是怎样的关系（对比/融合）\n3. 作者如何通过"展示"来传达画家的孤独感？',
      },
    ],
  },
  {
    id: '1-5', unit: 1, order: 5,
    title: 'Context Clues', titleCn: '1.5 上下文猜词',
    description: '7 种线索类型，三原则辅助猜词，SSAT 词汇题突破。',
    estimatedTime: '40 min', exerciseCount: 3, prerequisites: ['1-4'],
    tags: ['词汇策略', '语境分析'],
    learningObjectives: ['掌握7种上下文线索', '不查词典推断生词', '应用三原则'],
    content: [
      {
        title: '7 种线索类型',
        text: '1. Explanation（解释）：作者直接解释词义。例："He was a gregarious person, always enjoying the company of others."\n\n2. Example（举例）：通过举例暗示。例："Celestial bodies, such as the sun, moon, and stars..."\n\n3. Comparison-Contrast（对比）：通过对比暗示。例："Unlike his gregarious brother, Tom was shy."\n\n4. Experience（经验）：依赖读者的生活经验\n5. Summary（总结）：前文铺垫，此时总结\n6. Co-occurrence（共现）：词与词的搭配暗示\n7. Mood-Setting（情境）：通过情境氛围暗示',
      },
      {
        title: '三原则',
        text: 'Emphasis（重点）：生词所在句子或段落，作者往往有额外强调\nRepetition（重复）：关键概念在近处以不同方式重复，找近义词/反义词线索\nWhole Picture（全局）：不要孤立看一个词，看整段甚至全文语境',
      },
      {
        title: 'SSAT 词汇题策略',
        text: 'SSAT 阅读约20%的题目是"词汇在上下文中的含义"题。策略：\n\n1. 不要凭记忆选——即使认识这个词，也必须在文中确认\n2. 找到生词前后1-2句的线索\n3. 用排除法排除明显不搭的选项\n4. 代入验证：把选项代入原文，看是否通顺',
      },
    ],
  },
  {
    id: '1-6', unit: 1, order: 6,
    title: 'Narrative Perspective: Manipulation', titleCn: '1.6 叙事视角与不可靠叙述者',
    description: 'Booth 不可靠叙述者理论，含 Poe《泄密的心》完整分析。',
    estimatedTime: '60 min', exerciseCount: 4, prerequisites: ['1-5'],
    tags: ['视角分析', '批判阅读'],
    learningObjectives: ['区分各类视角', '理解不可靠叙述者理论', '判断叙述者可信度'],
    content: [
      {
        title: '视角分类',
        text: '小说中的叙述视角（Point of View）分为：\n\n第一人称主角（First-person protagonist）："I"是故事主角\n第一人称旁观（First-person witness）："I"是配角观察者\n第三人称全知（Third-person omniscient）：知道所有人物内心想法\n第三人称有限（Third-person limited）：只跟随一个/几个人物\n\nSSAT 视角题常问："这段话是从谁的视角叙述的？"',
      },
      {
        title: '不可靠叙述者（Wayne C. Booth）',
        text: 'Wayne C. Booth 在《小说修辞学》中提出——不可靠叙述者指叙述者的话与文本隐含作者的价值观/事实存在差距。\n\n无意不可靠（Unintentionally Unreliable）：叙述者因年龄、智力、偏见而不自知地歪曲事实\n- 《麦田守望者》Holden Caulfield（青少年视角的片面性）\n- 《杀死一只知更鸟》Scout（儿童视角的纯真偏差）\n\n有意不可靠（Intentionally Unreliable）：叙述者故意欺骗读者\n- 《洛丽塔》Humbert Humbert（美化自己的罪行）\n- 《泄密的心》叙述者声称自己没疯，但每句话都在证明自己疯了',
      },
      {
        title: '《泄密的心》分析',
        text: 'Poe 的《The Tell-Tale Heart》是不可靠叙述者的教科书级范例：\n\n文本证据1："True! — nervous — very, very dreadfully nervous I had been and am; but why will you say that I am mad?" 第一句就自证其疯：用"you will say I am mad"预设读者认为他疯了。\n\n文本证据2："I loved the old man. He had never wronged me." 随即说杀了老人只因为他的"秃鹰般的眼睛"——矛盾！\n\n文本证据3："I heard all things in the heaven and in the earth. I heard many things in hell." 声称能听到天堂地狱的声音——明显精神分裂。\n\nSSAT 可能出题：叙述者是否可靠？给出两个文本证据。',
      },
    ],
  },
  {
    id: '1-7', unit: 1, order: 7,
    title: 'Elegant Variation', titleCn: '1.7 优雅变体',
    description: '同义替换识别——不同词性/表达方式换着说同一概念。',
    estimatedTime: '25 min', exerciseCount: 2, prerequisites: ['1-6'],
    tags: ['语言敏感度', '指代题'],
    learningObjectives: ['理解优雅变体概念', '识别同指不同形表达', '破解指代题'],
    content: [
      {
        title: '概念定义',
        text: 'Elegant Variation（优雅变体）是英语写作中的常见手法：用不同的词或表达方式指代同一对象，避免重复。\n\n例如在同一篇报道中："the president" → "the commander-in-chief" → "the White House occupant" → "Mr. Biden"\n\nSSAT 阅读中常考：某个代词（it, this, that, they）指代什么？或者某段中用不同说法描述的实际上是同一个人/物吗？',
      },
      {
        title: '识别策略',
        text: '三步识别法：\n1. 锚定首提：找到概念首次出现时的表述\n2. 追踪变体：圈出后续所有指代同一概念的不同说法\n3. 验证一致性：把每个变体代回首次出现的位置，看是否通顺\n\n常见变体手法：同义词替换 / 上下义词（animal → dog）/ 代词回指 / 描述性替换（the tall man → the lawyer）/ 角色转换（the killer → the suspect → the defendant）',
      },
    ],
  },

  // === Unit 2: Poetry ===
  {
    id: '2-1', unit: 2, order: 1,
    title: 'Major Components', titleCn: '2.1 诗歌基本要素',
    description: 'Line / Stanza / Meter / Rhyme 定义与识别。',
    estimatedTime: '30 min', exerciseCount: 3, prerequisites: ['1-7'],
    tags: ['诗歌基础', '结构识别'],
    learningObjectives: ['掌握四大基本要素定义', '数出 stanza 和 line 数量', '理解 meter 和 rhyme 概念'],
    content: [
      {
        title: '四大要素',
        text: 'Line（行）：诗歌的一行，基础单位\nStanza（节）：多行组成的段落，结构单位\nMeter（韵律）：轻重音的模式（SSAT不常考）\nRhyme（押韵）：行末音节的重复（高频考点）\n\nSSAT 诗歌题的第一问往往是"这首诗有多少个 stanza？"或"每个 stanza 有多少行？"。务必养成拿到诗歌后立即数 stanza 和 line 的习惯。',
      },
    ],
  },
  {
    id: '2-2', unit: 2, order: 2,
    title: 'End Rhyme Scheme', titleCn: '2.2 尾韵格式',
    description: 'aabb 联韵 / abab 交叉韵 / 同韵（一韵到底），附经典诗例。',
    estimatedTime: '40 min', exerciseCount: 3, prerequisites: ['2-1'],
    tags: ['韵律分析', '押韵格式'],
    learningObjectives: ['识别三种押韵格式', '标注任意诗歌尾韵', '理解押韵与情感关联'],
    content: [
      {
        title: '三种押韵格式',
        text: 'aabb 联韵（Couplet Rhyme）：相邻两行押韵，适合轻快/说理风格。Longfellow "A Psalm of Life"：\nTell me not, in mournful numbers, (a)\nLife is but an empty dream! (a)\nFor the soul is dead that slumbers, (b)\nAnd things are not what they seem. (b)\n\nabab 交叉韵（Alternate Rhyme）：隔行押韵，适合叙述/抒情。Frost "Stopping by Woods"：\nWhose woods these are I think I know. (a)\nHis house is in the village though; (b)\nHe will not see me stopping here (a)\nTo watch his woods fill up with snow. (b)\n\n同韵（一韵到底）：全诗使用同一个韵脚。',
      },
    ],
  },
  {
    id: '2-3', unit: 2, order: 3,
    title: 'Alliteration', titleCn: '2.3 头韵',
    description: '头韵的定义、识别与修辞效果分析。',
    estimatedTime: '20 min', exerciseCount: 2, prerequisites: ['2-2'],
    tags: ['修辞手法'],
    learningObjectives: ['识别诗歌中的头韵', '分析头韵修辞效果'],
    content: [
      {
        title: '头韵详解',
        text: 'Alliteration（头韵）指相邻或相近单词的首辅音相同。\n\n经典示例（Swinburne）："The full fathom five thy father lies" —— 连续4个f音。\n\n修辞效果：\n- 节奏感：连续的相同辅音创造音乐性\n- 强调：被头韵标记的词汇得到额外关注\n- 氛围：s音 → 静谧，b/p音 → 爆破/力量\n\nSSAT 常见考法：标出诗中哪行使用了 alliteration。识别关键：找连续两个以上相同首辅音的单词。',
      },
    ],
  },
  {
    id: '2-4', unit: 2, order: 4,
    title: 'Poetic Forms', titleCn: '2.4 诗歌体式',
    description: '十四行诗 / 打油诗 / 自由诗 / 拟声手法。',
    estimatedTime: '40 min', exerciseCount: 3, prerequisites: ['2-3'],
    tags: ['体式识别', '风格判断'],
    learningObjectives: ['区分三种主要体式', '理解十四行诗结构', '根据体式判断风格'],
    content: [
      {
        title: '体式一览',
        text: 'Sonnet（十四行诗）：14行，iambic pentameter。两种子类：Petrarchan（八行+六行）和 Shakespearean（三组四行+对句）。代表：Shakespeare, Petrarch。SSAT最关键特征 = 14行。\n\nLimerick（打油诗）：5行，aabba韵，幽默/荒诞。代表：Edward Lear。\n\nFree Verse（自由诗）：无固定韵律和节奏，依赖自然语言节奏。代表：Walt Whitman。\n\nOnomatopoeia（拟声）：词音模仿现实声音（buzz, hiss, splash）。',
      },
    ],
  },
  {
    id: '2-5', unit: 2, order: 5,
    title: 'Figurative Language', titleCn: '2.5 修辞语言',
    description: 'Imagery / Symbol / Simile / Metaphor / Personification，含常见象征对照表。',
    estimatedTime: '50 min', exerciseCount: 5, prerequisites: ['2-4'],
    tags: ['修辞手法', '意象分析'],
    learningObjectives: ['区分5种修辞手法', '解读诗歌象征含义', '使用象征对照表'],
    content: [
      {
        title: '五种修辞手法',
        text: '1. Imagery（意象）：用语言激发感官体验（视觉/听觉/嗅觉/触觉/味觉）\n2. Symbol（象征）：具体事物代表抽象概念。常见对照表：玫瑰→爱情/美丽，蛇→邪恶/诱惑，鸽子→和平，黑暗→死亡/未知，光明→知识/希望，旅程→人生\n3. Simile（明喻）：用 like/as 直接比较。"My love is like a red, red rose"\n4. Metaphor（暗喻）：不用 like/as 的隐含比较。"All the world\'s a stage"\n5. Personification（拟人）：赋予非生命物以人的特征。"The wind whispered through the trees"',
      },
      {
        title: 'Walter de la Mare "Silver" 分析',
        text: '完整分析 de la Mare 的 "Silver"：\n\n"Slowly, silently, now the moon / Walks the night in her silver shoon;"\n\nImagery：银色月光营造静谧视觉意象\nPersonification：月亮"行走"，赋予人性\nSymbol：银色 → 宁静/神秘/超脱\n\nSSAT 常见考法：指出诗中哪行使用了 simile/metaphor/personification，并解释其效果。',
      },
    ],
  },
  {
    id: '2-6', unit: 2, order: 6,
    title: 'Poetic Vocabulary', titleCn: '2.6 诗歌古英语词汇',
    description: '80+ 高频古英语词汇表，分 7 个词性，SSAT 诗歌常见障碍突破。',
    estimatedTime: '40 min', exerciseCount: 2, prerequisites: ['2-5'],
    tags: ['古英语', '词汇积累'],
    learningObjectives: ['掌握80+高频古英语词汇', '快速翻译古英语诗歌'],
    content: [
      {
        title: '词性分类速查',
        text: '代词：thou=you, thee=you(宾格), thy=your, thine=yours\n动词：doth=does, hath=has, art=are, wilt=will, shalt=shall, spake=spoke\n副词：ere=before, hither=here, thither=there, whence=from where, oft=often\n形容词：fair=beautiful, bonny=pretty, comely=attractive, wan=pale\n名词：maiden=young woman, foe=enemy, steed=horse, vale=valley\n连接词：lest=for fear that, albeit=although, nay=no, yea=yes\n前置词：o\'er=over, \'neath=beneath, \'mid=amid, \'twixt=between',
      },
      {
        title: '记忆策略',
        text: '建议使用"语境记忆法"而非死记硬背：\n1. 每学一个古英语词，找一首包含该词的诗句\n2. 尝试把诗句改写为现代英语\n3. 在闪卡模式中反复练习（推荐每日10个词）\n\n例如：原句"I doth protest too much" → 现代"I do protest too much"',
      },
    ],
  },
  {
    id: '2-7', unit: 2, order: 7,
    title: 'Poetic Grammar', titleCn: '2.7 诗歌古英语语法',
    description: '词法（-th/-st 尾）+ 句法（倒装/省略），诗歌长难句理解核心突破。',
    estimatedTime: '45 min', exerciseCount: 4, prerequisites: ['2-6'],
    tags: ['语法', '长难句'],
    learningObjectives: ['识别翻译-th/-st尾动词', '还原诗歌倒装句', '补全省略成分'],
    content: [
      {
        title: '词法：古动词变形',
        text: '-th 尾 = 现代 -s/-es（第三人称单数）：he goeth→he goes, she hath→she has, it doth→it does\n\n-st 尾 = 与 thou 搭配（第二人称单数）：thou art→you are, thou hast→you have, thou dost→you do\n\n古过去式（注意区分！）：spake=spoke, brake=broke, bare=bore, clomb=climbed',
      },
      {
        title: '句法：倒装与省略',
        text: '倒装（Inversion）——古英语诗歌最常见句法难点：\n1. 主谓倒装："Came the dawn" → "The dawn came"\n2. 宾动倒装："Him I saw" → "I saw him"\n3. 形容词后置："the night dark" → "the dark night"\n\n省略（Elision）：\n1. 冠词省略："Bird sang on branch" → "A bird sang on a branch"\n2. 音节省略：o\'er=over, \'twas=it was, e\'en=even\n3. 关系代词省略："The man (whom) I saw"',
      },
    ],
  },
]
