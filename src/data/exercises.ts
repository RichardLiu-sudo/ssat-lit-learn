export interface Exercise {
  id: string
  moduleId: string
  moduleTitle: string
  type: 'choice' | 'fill' | 'short_answer'
  typeLabel: string
  passage?: string
  passageTitle?: string
  question: string
  answer: string
  options?: string[]
  explanation?: string
}

export const exercises: Exercise[] = [
  // ===== Unit 1: Fiction =====

  // 1.1 Schema — 3 篇短文 genre 识别
  {
    id: '1-1-ex01', moduleId: '1-1', moduleTitle: '1.1 图式认知',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Passage A',
    passage: `The door creaked open, revealing a long, dimly lit corridor. Dust motes danced in the thin slivers of light that pierced through the boarded windows. At the far end, a grandfather clock ticked steadily, its pendulum swinging with a mechanical certainty that seemed to mock the eerie silence of the abandoned mansion. Sarah took a deep breath and stepped inside.`,
    question: '这篇 Passage 最可能属于哪种体裁？',
    answer: '小说（哥特/悬疑）',
    options: ['议论文', '说明文', '小说（哥特/悬疑）', '新闻报导'],
    explanation: '开篇（门吱吱作响、昏暗走廊、尘埃、废弃宅邸）激活哥特小说图式：阴暗场景、悬念氛围、人物冒险进入。',
  },
  {
    id: '1-1-ex02', moduleId: '1-1', moduleTitle: '1.1 图式认知',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Passage B',
    passage: `The Industrial Revolution marked a significant shift in human history, transforming agrarian societies into industrial powerhouses. Beginning in Britain in the late 18th century, this period saw the introduction of mechanized manufacturing, steam power, and the factory system. These innovations fundamentally altered the nature of work, urban life, and global trade.`,
    question: '这篇 Passage 最可能属于哪种体裁？',
    answer: '说明文',
    options: ['小说', '议论文', '说明文', '诗歌'],
    explanation: '开门见山陈述事实性信息，无人物情节，纯客观解释工业革命的背景和影响。这是典型的说明文图式。',
  },
  {
    id: '1-1-ex03', moduleId: '1-1', moduleTitle: '1.1 图式认知',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Passage C',
    passage: `While many argue that social media has connected the world like never before, a closer examination reveals a more troubling reality. Studies show that excessive social media use correlates with increased rates of anxiety and depression among adolescents. Moreover, the curated nature of online profiles often leads to unrealistic comparisons. Therefore, we must reconsider our uncritical embrace of these platforms.`,
    question: '这篇 Passage 最可能属于哪种体裁？',
    answer: '议论文',
    options: ['说明文', '小说', '议论文', '书信'],
    explanation: '"While many argue..." "a closer examination reveals..." "Therefore, we must reconsider..." 这些都是议论文的标准图式：提出对立观点→反驳→结论。',
  },

  // 1.2 Narrative Structure — Passage with 5-element analysis
  {
    id: '1-2-ex01', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Appointment with Love（节选）',
    passage: `Six minutes to six, said the great round clock over the information booth in Grand Central Station. The tall young Army lieutenant who had just come from the direction of the tracks lifted his sunburned face, and his eyes narrowed to note the exact time. His heart was pounding with a beat that shocked him because he could not control it. In six minutes he would see the woman who had filled such a special place in his life for the past thirteen months, the woman he had never seen, yet whose written words had been with him and sustained him unfailingly.`,
    question: '这个段落在叙事结构中主要属于哪个要素？',
    answer: 'Setting（背景）',
    options: ['Setting（背景）', 'Conflict（冲突）', 'Climax（高潮）', 'Resolution（结局）'],
    explanation: '开篇明确交代了时间（six minutes to six）、地点（Grand Central Station）、人物初步信息（年轻陆军中尉），这是典型的 Setting 部分。',
  },
  {
    id: '1-2-ex02', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'Appointment with Love（节选）',
    passage: `Six minutes to six... In six minutes he would see the woman who had filled such a special place in his life for the past thirteen months, the woman he had never seen, yet whose written words had been with him and sustained him unfailingly.`,
    question: '从这段文字中推断故事的 Conflict（冲突）是什么？',
    answer: '男主角从未见过这位写信的女性，紧张于现实见面是否与想象一致（现实vs期待）。',
    explanation: 'Conflict 的核心是 John 的内心紧张——13 个月的书信建立了深厚的感情连接，但他从未见过对方，见面可能打破这个理想化的形象。',
  },
  {
    id: '1-2-ex03', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'The Tell-Tale Heart（节选）',
    passage: `True! — nervous — very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses — not destroyed — not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad? Hearken! and observe how healthily — how calmly I can tell you the whole story.`,
    question: '叙述者在这段中试图建立的自我形象是 _____（填入一个形容词，英文）。',
    answer: 'sane',
    explanation: '叙述者反复争辩自己没疯（"why will you say that I am mad?"），声称自己的感官反而更敏锐，试图说服读者他是理智的（sane）。然而正是这种过度的辩解暴露了他的疯狂。',
  },
  {
    id: '1-2-ex04', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Tell-Tale Heart',
    passage: `True! — nervous — very, very dreadfully nervous I had been and am; but why will you say that I am mad? ... I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad?`,
    question: '这段在完整故事中属于叙事结构的哪个阶段？为什么？',
    answer: 'Setting / Exposition（开场/展示）。这是故事的开篇，在引入情境和叙述者，尚未展开主要行动。',
    explanation: '这是小说的第一段，属于 Exposition（开场展示）阶段。它在建立叙述者的声音、语气和基本情境，为后续的冲突（老头被杀）做铺垫。',
  },

  // 1.3 Anticipate Outcome — multi-passage prediction
  {
    id: '1-3-ex01', moduleId: '1-3', moduleTitle: '1.3 预测结局',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Open Window（节选 — 第 1 段）',
    passage: `"My aunt will be down presently, Mr. Nuttel," said a very self-possessed young lady of fifteen; "in the meantime you must try and put up with me." Framton Nuttel endeavoured to say the correct something which should duly flatter the niece of the moment without unduly discounting the aunt that was to come.`,
    question: '基于这第 1 段，预测：（1）故事发生在什么地点？（2）Framton 来这里的目的可能是什么？',
    answer: '（1）在某位女性的家中（aunt 的家）；（2）社交拜访，可能是初次见面（"the correct something" 暗示他紧张、不熟悉）。',
    explanation: '"Mr. Nuttel" 的正式称呼 + "My aunt" + 他在努力说恰当的话 → 暗示他是一位访客，初次来此，正在等待女主人。',
  },
  {
    id: '1-3-ex02', moduleId: '1-3', moduleTitle: '1.3 预测结局',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'The Open Window（继续）',
    passage: `"You may wonder why we keep that window wide open on an October afternoon," said the niece, indicating a large French window that opened on to a lawn. "Out through that window, three years ago to a day, her husband and her two young brothers went off for their day's shooting. They never came back. In crossing the moor to their favourite snipe-shooting ground they were all three engulfed in a treacherous piece of bog."`,
    question: '侄女说这段话时，最可能的面部表情是 _____（英文，一个词）。',
    answer: 'calm',
    explanation: '"a very self-possessed young lady" 暗示她非常镇定自若。她在讲述一个可怕的悲剧，但语气平静，这种反差是作者有意制造的悬念。',
  },
  {
    id: '1-3-ex03', moduleId: '1-3', moduleTitle: '1.3 预测结局',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'The Open Window（继续）',
    passage: `"Poor dear aunt, she has often told me how they went out, her husband with his white waterproof coat over his arm ... It had been that dreadful wet summer, you know, and places that were safe in other years gave way suddenly without warning. Their bodies were never recovered."`,
    question: '基于侄女的叙述，预测 Framton 可能的反应是什么？',
    answer: '他会对即将出现的 aunt 产生同情和不安',
    options: [
      '他会立即离开',
      '他会对即将出现的 aunt 产生同情和不安',
      '他会完全不相信这个故事',
      '他会大笑认为这是个笑话',
    ],
    explanation: 'Framton 是初次造访的客人，正在经历神经衰弱的疗养。面对一个"失去全家人"的寡妇故事，他最自然的反应是产生不适感和同情。',
  },
  {
    id: '1-3-ex04', moduleId: '1-3', moduleTitle: '1.3 预测结局',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Open Window（结局）',
    passage: `In the deepening twilight three figures were walking across the lawn towards the window; they all carried guns under their arms... Framton grabbed wildly at his stick and hat; the hall-door, the gravel-drive, and the front gate were dimly noted stages in his headlong retreat. A cyclist coming along the road had to run into the hedge to avoid imminent collision.`,
    question: 'Framton 为什么会如此惊慌地逃跑？之前侄女告诉了他什么？',
    answer: '侄女之前告诉他，窗外那三个人（her aunt\'s husband 和两个兄弟）三年前在沼泽中淹死了。所以当 Framton 看到"死人"走来时，他吓坏了。实际上侄女编造了整个故事。',
    explanation: '侄女编造了"三人死于沼泽"的故事让 Framton 相信他们已经死了。当那三人真的出现（他们根本没死！），Framton 以为看见了鬼魂。"The Open Window" = 开头被操控的图式。这正是预测失败的经典案例：读者和 Framton 都被侄女的故事引导做出了错误预测。',
  },

  // 1.4 Figure/Ground
  {
    id: '1-4-ex01', moduleId: '1-4', moduleTitle: '1.4 图形/背景分析',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'The Yellow Wallpaper（节选）',
    passage: `He is very careful and loving, and hardly lets me stir without special direction. I have a schedule prescription for each hour in the day; he takes all care from me, and so I feel basely ungrateful not to value it more. He said we came here solely on my account, that I was to have perfect rest and all the air I could get.`,
    question: '在这段中，叙述者（Figure）与她所处的社会环境（Ground）属于什么关系？',
    answer: '对比（Contrast）——她表面顺从，内心反抗',
    options: ['融合（Blend）', '对比（Contrast）', '渐变（Transition）', '无法判断'],
    explanation: '叙述者表面说"he is very careful and loving"，但"basely ungrateful"揭示了她内心的压抑和反叛。她与社会对她"需要被照顾"的期待形成对比。',
  },
  {
    id: '1-4-ex02', moduleId: '1-4', moduleTitle: '1.4 图形/背景分析',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Yellow Wallpaper（节选）',
    passage: `John is a physician, and perhaps — (I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind) — perhaps that is one reason I do not get well faster. You see, he does not believe I am sick!`,
    question: '作者如何通过"Show, don\'t tell"的方式传达叙述者的压抑感？找出具体的文本证据。',
    answer: '"this is dead paper and a great relief to my mind"——她说纸是"死的"因此可以倾诉，暗示没有任何活人倾听她。括号中的"我不会对任何活人说"展示了她被完全孤立的状态。',
    explanation: '作者没有直接说"她感到压抑和被忽视"，而是通过"死人般"的纸、括号里的秘密倾诉来展示。这就是 Show, don\'t tell。',
  },

  // 1.5 Context Clues
  {
    id: '1-5-ex01', moduleId: '1-5', moduleTitle: '1.5 上下文猜词',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'The Most Dangerous Game（节选）',
    passage: `He was finding the general a most thoughtful and affable host, a true cosmopolite. But there was one small trait of the general's that made Rainsford uncomfortable. Whenever the general smiled, his lips drew back from his teeth in a way that was more predatory than genial.`,
    question: 'predatory 在上下文中最接近的含义是？',
    answer: '掠食性的 / 充满威胁的',
    options: ['友好的', '掠食性的 / 充满威胁的', '智慧型的', '幽默的'],
    explanation: '对比线索（Comparison-Contrast）："more predatory than genial"（更有掠食性而非温和）。predatory 与 genial（温和友好）形成对比。',
  },
  {
    id: '1-5-ex02', moduleId: '1-5', moduleTitle: '1.5 上下文猜词',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Of Mice and Men（节选）',
    passage: `Lennie dabbled his big paw in the water and wiggled his fingers so the water arose in little splashes; rings widened across the pool to the other side and came back again. Lennie watched them go. "Look, George. Look what I done."`,
    question: 'dabbled 在上下文中最接近的意思是 _____（一个中文动词）。',
    answer: '拍打',
    explanation: '共现线索：后面的 "wiggled his fingers" 和 "water arose in little splashes" 解释了这个动作——在水里拨弄、拍打。经验线索：大手 + 水花四溅 → 拍打水面。',
  },

  // 1.6 Narrative Perspective — 不可靠叙述者深度练习
  {
    id: '1-6-ex01', moduleId: '1-6', moduleTitle: '1.6 叙事视角',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'The Tell-Tale Heart（节选）',
    passage: `Now this is the point. You fancy me mad. Madmen know nothing. But you should have seen me. You should have seen how wisely I proceeded — with what caution — with what foresight — with what dissimulation I went to work! I was never kinder to the old man than during the whole week before I killed him.`,
    question: '叙述者声称自己"wise"和"cautious"，但实际上证据表明他是什么状态？',
    answer: '他疯了，他的"聪明谨慎"正是疯了的证明',
    options: [
      '他确实聪明且谨慎',
      '他疯了，他的"聪明谨慎"正是疯了的证明',
      '他只是误会了老头的意图',
      '他本来想帮助老头但失手了',
    ],
    explanation: '叙述者用声称自己"聪明谨慎"来反驳"疯了"的指控，但他描述的谨慎行为——在一整周里对老头格外友善只是为了杀他——本身就是一个扭曲的"理智观"。这是典型的不可靠叙述者。',
  },
  {
    id: '1-6-ex02', moduleId: '1-6', moduleTitle: '1.6 叙事视角',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Tell-Tale Heart（节选）',
    passage: `I was never kinder to the old man than during the whole week before I killed him. And every night, about midnight, I turned the latch of his door and opened it — oh, so gently!`,
    question: '叙述者是"有意不可靠"还是"无意不可靠"？为什么？',
    answer: '无意不可靠。叙述者真的相信自己没疯，他真心认为自己的行为是"聪明"和"谨慎"的，而非有意欺骗读者。',
    explanation: '区分关键：有意不可靠 = 叙述者明知自己在撒谎（如《洛丽塔》）；无意不可靠 = 叙述者因自身局限（精神疾病/年龄/偏见）而不自知地歪曲事实。Poe 的叙述者属于后者。',
  },
  {
    id: '1-6-ex03', moduleId: '1-6', moduleTitle: '1.6 叙事视角',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'The Tell-Tale Heart（节选）',
    passage: `Object there was none. Passion there was none. I loved the old man. He had never wronged me. He had never given me insult. For his gold I had no desire. I think it was his eye! Yes, it was this! He had the eye of a vulture — a pale blue eye, with a film over it.`,
    question: '叙述者给出的杀人理由是什么？（用英文回答）',
    answer: 'the old man\'s eye (the vulture eye)',
    explanation: '"I think it was his eye!" 叙述者声称自己爱这位老人，没有动机杀他——除了他那只"秃鹰般的眼睛"。这种荒谬的理由（因为一只眼睛杀人）正是不可靠叙述者的标志。',
  },
  {
    id: '1-6-ex04', moduleId: '1-6', moduleTitle: '1.6 叙事视角',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'To Kill a Mockingbird（节选）',
    passage: `When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury.`,
    question: '这段使用的叙述视角是？',
    answer: '第一人称旁观 / 回忆视角',
    options: ['第三人称全知', '第一人称主角', '第一人称旁观 / 回忆视角', '第三人称有限'],
    explanation: '"my brother Jem" 说明叙述者是 Jem 的姐妹（Scout），她在回忆童年往事。这是第一人称旁观/回忆视角——叙述者"我"是故事中的配角，观察哥哥 Jem。',
  },

  // 1.7 Elegant Variation
  {
    id: '1-7-ex01', moduleId: '1-7', moduleTitle: '1.7 优雅变体',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'A Tale of Two Cities（节选）',
    passage: `A large cask of wine had been dropped and broken, in the street. The accident had happened in getting it out of a cart ... All the people within reach had suspended their business, or their idleness, to run to the spot and drink the wine. The rough, irregular stones of the street, pointing every way, and designed, one might have thought, expressly to lame all living creatures that approached them, had dammed it into little pools.`,
    question: '"it" 指代什么？',
    answer: 'the wine',
    options: ['the street', 'the cask（酒桶）', 'the wine', 'the cart'],
    explanation: '"had dammed it into little pools" — 什么东西被挡成水洼？是葡萄酒。街头石块阻止了酒流走，形成了小水池。这是一个远距离代词回指。',
  },
  {
    id: '1-7-ex02', moduleId: '1-7', moduleTitle: '1.7 优雅变体',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'A Tale of Two Cities（节选）',
    passage: `A large cask of wine had been dropped and broken, in the street. ... All the people within reach had suspended their business, or their idleness, to run to the spot and drink the wine. ... Some men kneeled down, made scoops of their two hands joined, and sipped, or tried to help women, who bent over their shoulders, to sip, before the liquid had all run out between their fingers.`,
    question: '在这段中，"the wine" 的优雅变体是什么？',
    answer: 'the liquid',
    explanation: '"before the liquid had all run out" — liquid 指代的就是前面提到的 wine。从 wine → the liquid，用上义词替代，避免重复。',
  },

  // ===== Unit 2: Poetry =====

  // 2.1 Major Components
  {
    id: '2-1-ex01', moduleId: '2-1', moduleTitle: '2.1 诗歌基本要素',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Robert Frost — The Road Not Taken',
    passage: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.`,
    question: '这首诗有多少个 stanza？每个 stanza 有多少行？',
    answer: '4 个 stanza，每个 5 行',
    options: ['4 个 stanza，每个 5 行', '5 个 stanza，每个 4 行', '3 个 stanza，每个 7 行', '4 个 stanza，每个 4 行'],
    explanation: 'Stanza 1: lines 1-5; Stanza 2: lines 6-10; Stanza 3: lines 11-15; Stanza 4: lines 16-20。每个 stanza 有 5 行，总共 4 个 stanza。',
  },
  {
    id: '2-1-ex02', moduleId: '2-1', moduleTitle: '2.1 诗歌基本要素',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Robert Frost — The Road Not Taken（第一 stanza）',
    passage: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
    question: '这个 stanza 有 _____ 行。（填数字）',
    answer: '5',
    explanation: '直接数：每行以首字母大写开始，共 5 行。',
  },

  // 2.2 Rhyme Scheme
  {
    id: '2-2-ex01', moduleId: '2-2', moduleTitle: '2.2 尾韵格式',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Robert Frost — The Road Not Taken（第一 stanza）',
    passage: `Two roads diverged in a yellow wood, ( )
And sorry I could not travel both ( )
And be one traveler, long I stood ( )
And looked down one as far as I could ( )
To where it bent in the undergrowth; ( )`,
    question: '请标注这个 stanza 的押韵格式（用 a, b 表示）。第 1 行标 ___，第 2 行标 ___，第 3 行标 ___，第 4 行标 ___，第 5 行标 ___。',
    answer: 'abaab',
    explanation: 'wood(a) — both(b) — stood(a) — could(a) — undergrowth(b)。注意：wood/stood/could 押韵 → a；both/undergrowth 押韵 → b。所以格式是 abaab。',
  },
  {
    id: '2-2-ex02', moduleId: '2-2', moduleTitle: '2.2 尾韵格式',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Emily Dickinson — Hope is the thing with feathers',
    passage: `"Hope" is the thing with feathers —
That perches in the soul —
And sings the tune without the words —
And never stops — at all —`,
    question: '这个 stanza 的押韵格式是？',
    answer: 'abcb',
    options: ['aabb', 'abab', 'abcb', 'aaaa'],
    explanation: 'feathers(a) 和 words(c) 不押韵；soul(b) 和 all(b) 押韵。所以格式是 abcb。',
  },

  // 2.3 Alliteration
  {
    id: '2-3-ex01', moduleId: '2-3', moduleTitle: '2.3 头韵',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Edgar Allan Poe — The Raven',
    passage: `Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—
While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.`,
    question: '在这段诗中，哪三个连续的单词使用了头韵（alliteration）？（填入那三个单词，用空格分隔）',
    answer: 'weak and weary',
    explanation: '"weak and weary" 三个词都以 w 开头，形成头韵。Poe 用头韵增强节奏感，同时 w 音的绵软感烘托出叙述者的疲惫和虚弱。',
  },
  {
    id: '2-3-ex02', moduleId: '2-3', moduleTitle: '2.3 头韵',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Edgar Allan Poe — The Raven',
    passage: `And the silken, sad, uncertain rustling of each purple curtain
Thrilled me — filled me with fantastic terrors never felt before;`,
    question: 'silken, sad, uncertain rustling 使用了什么修辞手法？',
    answer: 'Alliteration（头韵）',
    options: ['Simile（明喻）', 'Alliteration（头韵）', 'Personification（拟人）', 'Metaphor（暗喻）'],
    explanation: 'silken, sad 都以 s 开头，形成头韵。s 音模仿窗帘沙沙作响的声音（也是一种拟声/onomatopoeia），同时传达哀伤氛围。',
  },

  // 2.4 Poetic Forms
  {
    id: '2-4-ex01', moduleId: '2-4', moduleTitle: '2.4 诗歌体式',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Shakespeare — Sonnet 18',
    passage: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date:
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade
Nor lose possession of that fair thou owest;
Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou growest:
So long as men can breathe or eyes can see,
So long lives this and this gives life to thee.`,
    question: '这首诗属于什么体式？',
    answer: 'Sonnet（十四行诗）—— Shakespearean Sonnet',
    options: ['Limerick（打油诗）', 'Free Verse（自由诗）', 'Sonnet（十四行诗）—— Shakespearean Sonnet', 'Petrarchan Sonnet'],
    explanation: '14 行 = Sonnet。Shakespearean Sonnet 的特征是 3 个 quatrain（4行组）+ 1 个 couplet（2行对句），韵式为 abab cdcd efef gg。',
  },
  {
    id: '2-4-ex02', moduleId: '2-4', moduleTitle: '2.4 诗歌体式',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Edward Lear — Limerick',
    passage: `There was an Old Man with a beard,
Who said, "It is just as I feared!—
Two Owls and a Hen,
Four Larks and a Wren,
Have all built their nests in my beard!"`,
    question: '这首诗的体式和风格特征是？',
    answer: 'Limerick（打油诗）—— 5 行、aabba 韵、幽默荒诞',
    options: [
      'Sonnet（十四行诗）',
      'Limerick（打油诗）—— 5 行、aabba 韵、幽默荒诞',
      'Free Verse（自由诗）',
      'Elegy（挽歌）',
    ],
    explanation: '5 行 + aabba 韵（beard/feared/Hen/Wren/beard）+ 幽默内容 = Limerick 的标志性特征。内容荒诞——胡子里的鸟巢，典型的利默里克幽默。',
  },
  {
    id: '2-4-ex03', moduleId: '2-4', moduleTitle: '2.4 诗歌体式',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'Walt Whitman — Song of Myself（节选）',
    passage: `I celebrate myself, and sing myself,
And what I assume you shall assume,
For every atom belonging to me as good belongs to you.

I loafe and invite my soul,
I lean and loafe at my ease observing a spear of summer grass.`,
    question: '这首诗属于什么体式？说出两个判断依据。',
    answer: 'Free Verse（自由诗）。依据：（1）无固定韵式（无押韵）；（2）无固定节奏（各行音节数不一致，依赖自然语言节奏）。',
    explanation: 'Walt Whitman 是自由诗的先锋。此诗无 rhyme scheme、各行长度不一（第一行 10 个音节 vs 第三行 17 个音节），依赖呼吸节奏而非固定 meter。',
  },

  // 2.5 Figurative Language
  {
    id: '2-5-ex01', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Shakespeare — Sonnet 18',
    passage: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:`,
    question: '"Shall I compare thee to a summer\'s day?" 使用了什么修辞手法？',
    answer: 'Simile（明喻）的引子 / 扩展隐喻的开端',
    options: ['Metaphor（暗喻）', 'Simile（明喻）的引子 / 扩展隐喻的开端', 'Personification（拟人）', 'Imagery（意象）'],
    explanation: '"compare...to..." 是明喻的标志性结构。整首诗展开了一个扩展比喻（extended metaphor）：将爱人比作夏日，但更胜夏日。',
  },
  {
    id: '2-5-ex02', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Shakespeare — Sonnet 18',
    passage: `Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;`,
    question: '"the eye of heaven" 使用了什么修辞手法？指代什么？',
    answer: 'Metaphor（暗喻）+ Personification（拟人）。"the eye of heaven" = the sun（太阳）',
    options: [
      'Simile（明喻），指代月亮',
      'Metaphor（暗喻）+ Personification（拟人），指代太阳',
      'Symbol（象征），指代上帝',
      'Alliteration（头韵），指代天空',
    ],
    explanation: '太阳被比作"天空的眼睛"（暗喻），同时被赋予"有金色面容"和"有时太热"的人性特征（拟人）。这是双重修辞手法叠加。',
  },
  {
    id: '2-5-ex03', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Walter de la Mare — Silver',
    passage: `Slowly, silently, now the moon
Walks the night in her silver shoon;
This way, and that, she peers, and sees
Silver fruit upon silver trees;`,
    question: '月亮"walks"和"peers"，这种手法是？',
    answer: 'Personification（拟人）',
    options: ['Simile（明喻）', 'Metaphor（暗喻）', 'Personification（拟人）', 'Alliteration（头韵）'],
    explanation: '将月亮赋予人的行为——行走（walks）和注视（peers），这是典型的拟人手法。月光因此被赋予了一种温柔、巡视大地的母性形象。',
  },
  {
    id: '2-5-ex04', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'Walter de la Mare — Silver（节选）',
    passage: `Slowly, silently, now the moon
Walks the night in her silver shoon;
This way, and that, she peers, and sees
Silver fruit upon silver trees;
One by one the casements catch
Her beams beneath the silvery thatch;
Couched in his kennel, like a log,
With paws of silver sleeps the dog;`,
    question: '找出这首诗中的两个 Simile 和两个 Imagery 例子。',
    answer: 'Simile："like a log"（狗像木头一样躺着）。Imagery：银色月光、银色的果实、银色的树、银色的狗爪——全诗都是银色的视觉意象。',
    explanation: 'Imagery：整首诗用"silver"反复描绘月光的视觉意象，营造静谧、超现实的氛围。Simile 只有一处："like a log"直接用 like 进行明喻。de la Mare 用密集的视觉意象让读者"看见"月光下的银色世界。',
  },

  // 2.6 Poetic Vocabulary
  {
    id: '2-6-ex01', moduleId: '2-6', moduleTitle: '2.6 古英语词汇',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Robert Burns — A Red, Red Rose',
    passage: `O my Luve is like a red, red rose
That's newly sprung in June;
O my Luve is like the melody
That's sweetly played in tune.

As fair art thou, my bonnie lass,
So deep in luve am I;
And I will luve thee still, my dear,
Till a' the seas gang dry.`,
    question: '将 "As fair art thou, my bonnie lass" 翻译为现代英语。',
    answer: 'As beautiful you are, my pretty girl',
    explanation: 'fair = beautiful; art = are (与 thou 搭配); thou = you; bonnie = pretty; lass = girl。整句 = 你多么美丽，我漂亮的姑娘。',
  },
  {
    id: '2-6-ex02', moduleId: '2-6', moduleTitle: '2.6 古英语词汇',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Robert Burns — A Red, Red Rose',
    passage: `And I will luve thee still, my dear,
Till a' the seas gang dry.`,
    question: '"thee" 是 _____ 的宾格形式，"a\'" 是 _____ 的缩写，"gang" 的意思是 _____。',
    answer: 'thou / all / go',
    explanation: 'thee = thou 的宾格（you object）；a\' = all（苏格兰方言缩写）；gang = go。全句意为：我会一直爱你，直到所有海洋都干涸。',
  },
  {
    id: '2-6-ex03', moduleId: '2-6', moduleTitle: '2.6 古英语词汇',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Shakespeare — Sonnet 18',
    passage: `Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou growest:`,
    question: '"thou wander\'st" 和 "thou growest" 中的 -est 后缀表示什么？',
    answer: '第二人称单数（与 thou 搭配）',
    options: [
      '过去式',
      '第二人称单数（与 thou 搭配）',
      '第三人称单数（与 he/she 搭配）',
      '被动语态',
    ],
    explanation: '-est / -st 后缀与 thou 搭配，表示第二人称单数。thou wander\'st = you wander；thou growest = you grow。对比 -th/-eth 后缀（第三人称单数，如 he goeth）。',
  },

  // 2.7 Poetic Grammar
  {
    id: '2-7-ex01', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Samuel Taylor Coleridge — The Rime of the Ancient Mariner',
    passage: `The ship was cheered, the harbour cleared,
Merrily did we drop
Below the kirk, below the hill,
Below the lighthouse top.`,
    question: '"Merrily did we drop" 的正常语序是什么？',
    answer: 'We dropped merrily',
    explanation: '这是主谓倒装（Inversion）的一种：副词提前 + 助动词 do + 主语 + 动词原形。正常语序：We dropped merrily。Coleridge 用倒装来维持韵律（ballad meter）。',
  },
  {
    id: '2-7-ex02', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'John Keats — La Belle Dame sans Merci',
    passage: `O what can ail thee, knight-at-arms,
Alone and palely loitering?
The sedge has withered from the lake,
And no birds sing.`,
    question: '"palely loitering" 中，为什么 palely 放在 loitering 前面？',
    answer: '形容词/副词前置的倒装，正常语序是 "loitering palely"',
    options: [
      '这是正常语序',
      '形容词/副词前置的倒装，正常语序是 "loitering palely"',
      '这是语法错误',
      'palely 修饰 knight-at-arms 而非 loitering',
    ],
    explanation: '正常语序应为 "loitering palely"（苍白地徘徊），但 Keats 将副词 palely 提前，形成更诗意的语序，同时强调骑士的"苍白"状态。这是诗歌中常见的修辞倒装。',
  },
  {
    id: '2-7-ex03', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'John Donne — Holy Sonnet 10',
    passage: `Death, be not proud, though some have called thee
Mighty and dreadful, for thou art not so;
For those whom thou think'st thou dost overthrow
Die not, poor Death, nor yet canst thou kill me.`,
    question: '"canst thou" 中，-st 后缀表示什么人称？canst 的现代英语形式是什么？',
    answer: '第二人称单数（与 thou 搭配）/ can',
    explanation: 'canst = 第二人称单数的 can，与 thou 搭配。thou canst = you can。类似的还有 thou dost (you do)、thou hast (you have)。',
  },
  {
    id: '2-7-ex04', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'John Donne — Holy Sonnet 10（节选）',
    passage: `Death, be not proud, though some have called thee
Mighty and dreadful, for thou art not so;
For those whom thou think'st thou dost overthrow
Die not, poor Death, nor yet canst thou kill me.`,
    question: '将前两行翻译为现代英语，并指出其中包含的古英语语法特征。',
    answer: '"Death, do not be proud, although some have called you mighty and dreadful, for you are not so." 语法特征：thee = you（宾格）、thou art = you are、否定倒装 "be not proud"（现代 = do not be proud）。',
    explanation: 'Donne 在这首 Sonnet 中直接对"死亡"说话（apostrophe 呼语），使用古英语代词营造庄严氛围。thou art、thee 等古形式在此诗中不是障碍，而是语气的一部分——增加面对终极命题时的庄重感。',
  },
]

export function getExercisesByModule(moduleId: string): Exercise[] {
  return exercises.filter((e) => e.moduleId === moduleId)
}
