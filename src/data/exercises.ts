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

  // 1.1 Schema
  {
    id: '1-1-ex01', moduleId: '1-1', moduleTitle: '1.1 图式认知',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Passage A',
    passage: `The door creaked open, revealing a long, dimly lit corridor. Dust motes danced in the thin slivers of light that pierced through the boarded windows. At the far end, a grandfather clock ticked steadily, its pendulum swinging with a mechanical certainty that seemed to mock the eerie silence of the abandoned mansion. Sarah took a deep breath and stepped inside.`,
    question: 'What genre does this passage most likely belong to?',
    answer: 'Fiction (Gothic/Suspense)',
    options: ['Argumentative Essay', 'Expository Writing', 'Fiction (Gothic/Suspense)', 'News Report'],
    explanation: 'The creaking door, dimly lit corridor, dust motes, and abandoned mansion activate the Gothic schema: a dark, suspenseful setting and a character venturing into danger.',
  },
  {
    id: '1-1-ex02', moduleId: '1-1', moduleTitle: '1.1 图式认知',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Passage B',
    passage: `The Industrial Revolution marked a significant shift in human history, transforming agrarian societies into industrial powerhouses. Beginning in Britain in the late 18th century, this period saw the introduction of mechanized manufacturing, steam power, and the factory system. These innovations fundamentally altered the nature of work, urban life, and global trade.`,
    question: 'What genre does this passage most likely belong to?',
    answer: 'Expository Writing',
    options: ['Fiction', 'Argumentative Essay', 'Expository Writing', 'Poetry'],
    explanation: 'The passage opens with objective factual statements about the Industrial Revolution, with no characters or plot. This is a textbook example of expository schema: information presented neutrally to explain a topic.',
  },
  {
    id: '1-1-ex03', moduleId: '1-1', moduleTitle: '1.1 图式认知',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Passage C',
    passage: `While many argue that social media has connected the world like never before, a closer examination reveals a more troubling reality. Studies show that excessive social media use correlates with increased rates of anxiety and depression among adolescents. Moreover, the curated nature of online profiles often leads to unrealistic comparisons. Therefore, we must reconsider our uncritical embrace of these platforms.`,
    question: 'What genre does this passage most likely belong to?',
    answer: 'Argumentative Essay',
    options: ['Expository Writing', 'Fiction', 'Argumentative Essay', 'Letter'],
    explanation: '"While many argue..." → "a closer examination reveals..." → "Therefore, we must reconsider..." — this is the classic argumentative schema: present an opposing view, refute it with evidence, and conclude with a call to action.',
  },

  // 1.2 Narrative Structure
  {
    id: '1-2-ex01', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Appointment with Love (excerpt)',
    passage: `Six minutes to six, said the great round clock over the information booth in Grand Central Station. The tall young Army lieutenant who had just come from the direction of the tracks lifted his sunburned face, and his eyes narrowed to note the exact time. His heart was pounding with a beat that shocked him because he could not control it. In six minutes he would see the woman who had filled such a special place in his life for the past thirteen months, the woman he had never seen, yet whose written words had been with him and sustained him unfailingly.`,
    question: 'Which element of narrative structure does this passage primarily establish?',
    answer: 'Setting',
    options: ['Setting', 'Conflict', 'Climax', 'Resolution'],
    explanation: 'The opening explicitly establishes time (six minutes to six), place (Grand Central Station), and initial character details (young Army lieutenant). This is classic Setting (Exposition).',
  },
  {
    id: '1-2-ex02', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'Appointment with Love (excerpt)',
    passage: `Six minutes to six... In six minutes he would see the woman who had filled such a special place in his life for the past thirteen months, the woman he had never seen, yet whose written words had been with him and sustained him unfailingly.`,
    question: 'What is the Conflict implied in this passage?',
    answer: 'Internal conflict: the protagonist has built a deep emotional bond through 13 months of letters with a woman he has never met. The imminent meeting creates tension between his idealized image and the unknown reality.',
    explanation: 'The conflict is John\'s internal anxiety — thirteen months of letters have created a profound emotional connection, yet he has never seen her face. The meeting could shatter his idealized image.',
  },
  {
    id: '1-2-ex03', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'The Tell-Tale Heart (excerpt)',
    passage: `True! — nervous — very, very dreadfully nervous I had been and am; but why will you say that I am mad? The disease had sharpened my senses — not destroyed — not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad? Hearken! and observe how healthily — how calmly I can tell you the whole story.`,
    question: 'The narrator is desperately trying to establish an image of being _____. (one word, in English)',
    answer: 'sane',
    explanation: 'The narrator repeatedly argues against the accusation of madness ("why will you say that I am mad?"), insisting that his senses have been "sharpened" and that he can tell the story "healthily" and "calmly." However, the very excess of his protestations reveals his insanity — this is the hallmark of an unreliable narrator.',
  },
  {
    id: '1-2-ex04', moduleId: '1-2', moduleTitle: '1.2 叙事结构',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Tell-Tale Heart',
    passage: `True! — nervous — very, very dreadfully nervous I had been and am; but why will you say that I am mad? ... I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad?`,
    question: 'Which stage of narrative structure does this passage belong to, and why?',
    answer: 'Exposition (Opening). This is the first paragraph of the story. It establishes the narrator\'s voice, tone, and psychological state, setting the stage before the main action (the murder) unfolds.',
    explanation: 'This is the opening paragraph — Exposition. It introduces the narrator\'s unstable voice and sets up the psychological framework. The main conflict (the narrator\'s obsession with the old man\'s eye and the subsequent murder) has not yet begun.',
  },

  // 1.3 Anticipate Outcome
  {
    id: '1-3-ex01', moduleId: '1-3', moduleTitle: '1.3 预测结局',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Open Window (excerpt — paragraph 1)',
    passage: `"My aunt will be down presently, Mr. Nuttel," said a very self-possessed young lady of fifteen; "in the meantime you must try and put up with me." Framton Nuttel endeavoured to say the correct something which should duly flatter the niece of the moment without unduly discounting the aunt that was to come.`,
    question: 'Based on this opening paragraph, predict: (1) Where is the story taking place? (2) What is likely Framton\'s purpose for being there?',
    answer: '(1) At the home of the aunt (a private residence). (2) A social visit — he is likely meeting the aunt for the first time (his nervous attempt to say "the correct something" suggests unfamiliarity and social anxiety).',
    explanation: 'The formal address "Mr. Nuttel," the reference to "My aunt," and Framton\'s struggle to find the right words all suggest he is a first-time visitor waiting for the hostess. His nervous condition (revealed later as a "nerve cure") frames his vulnerability.',
  },
  {
    id: '1-3-ex02', moduleId: '1-3', moduleTitle: '1.3 预测结局',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'The Open Window (continued)',
    passage: `"You may wonder why we keep that window wide open on an October afternoon," said the niece, indicating a large French window that opened on to a lawn. "Out through that window, three years ago to a day, her husband and her two young brothers went off for their day's shooting. They never came back. In crossing the moor to their favourite snipe-shooting ground they were all three engulfed in a treacherous piece of bog."`,
    question: 'Based on the earlier description of the niece as "very self-possessed," what is the most likely expression on her face as she tells this story? (one word, in English)',
    answer: 'calm',
    explanation: 'The phrase "very self-possessed" signals that the niece is extraordinarily composed. She is relating a horrific tragedy with unsettling calm — a contrast that should alert the careful reader to possible deception.',
  },
  {
    id: '1-3-ex03', moduleId: '1-3', moduleTitle: '1.3 预测结局',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'The Open Window (continued)',
    passage: `"Poor dear aunt, she has often told me how they went out, her husband with his white waterproof coat over his arm ... It had been that dreadful wet summer, you know, and places that were safe in other years gave way suddenly without warning. Their bodies were never recovered."`,
    question: 'Based on the niece\'s story, predict how Framton will most likely react when the aunt appears.',
    answer: 'He will feel sympathy and deep unease toward the aunt',
    options: [
      'He will leave immediately',
      'He will feel sympathy and deep unease toward the aunt',
      'He will dismiss the story entirely',
      'He will laugh, assuming it is a joke',
    ],
    explanation: 'Framton is a first-time visitor undergoing a nerve cure. Faced with a woman who has supposedly lost her entire family in a tragic accident, his most natural response is discomfort and sympathy — which the niece exploits.',
  },
  {
    id: '1-3-ex04', moduleId: '1-3', moduleTitle: '1.3 预测结局',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Open Window (ending)',
    passage: `In the deepening twilight three figures were walking across the lawn towards the window; they all carried guns under their arms... Framton grabbed wildly at his stick and hat; the hall-door, the gravel-drive, and the front gate were dimly noted stages in his headlong retreat. A cyclist coming along the road had to run into the hedge to avoid imminent collision.`,
    question: 'Why does Framton flee in terror? What had the niece told him earlier?',
    answer: 'The niece had fabricated a story that the three men (the aunt\'s husband and two brothers) died in a bog three years ago. When Framton sees these supposedly dead men approaching, he believes he is seeing ghosts. In reality, the niece made up the entire tragedy — the men were never dead.',
    explanation: 'This is the classic schema manipulation at work: the niece planted a story that activated Framton\'s "tragic widow" schema, causing him to interpret the appearance of three living men as supernatural. "The Open Window" = the schema through which Framton was tricked. This is an example of failed prediction: both the reader and Framton are led by the niece\'s story to make a catastrophically wrong prediction.',
  },

  // 1.4 Figure/Ground
  {
    id: '1-4-ex01', moduleId: '1-4', moduleTitle: '1.4 图形/背景分析',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'The Yellow Wallpaper (excerpt)',
    passage: `He is very careful and loving, and hardly lets me stir without special direction. I have a schedule prescription for each hour in the day; he takes all care from me, and so I feel basely ungrateful not to value it more. He said we came here solely on my account, that I was to have perfect rest and all the air I could get.`,
    question: 'What is the Figure/Ground relationship between the narrator and her social environment?',
    answer: 'Contrast — she outwardly complies but inwardly resists',
    options: ['Blend', 'Contrast', 'Transition', 'Cannot determine'],
    explanation: 'The narrator says "he is very careful and loving" on the surface, but the phrase "basely ungrateful" reveals her suppressed resentment. She stands in stark contrast (Contrast) to the Ground of a society that expects her to be a compliant, grateful patient.',
  },
  {
    id: '1-4-ex02', moduleId: '1-4', moduleTitle: '1.4 图形/背景分析',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Yellow Wallpaper (excerpt)',
    passage: `John is a physician, and perhaps — (I would not say it to a living soul, of course, but this is dead paper and a great relief to my mind) — perhaps that is one reason I do not get well faster. You see, he does not believe I am sick!`,
    question: 'How does the author use "Show, don\'t tell" to convey the narrator\'s sense of oppression? Identify specific textual evidence.',
    answer: '"this is dead paper and a great relief to my mind" — she calls the paper "dead" because only dead things can receive her confession, implying no living person listens to her. The parenthetical asides "(I would not say it to a living soul)" reveal her complete isolation: she has no living confidante.',
    explanation: 'Instead of directly stating "she feels oppressed and unheard," Gilman shows it through the narrator\'s secret confession to "dead paper" and the parenthetical whispers that can only be shared with the reader. This is textbook "Show, don\'t tell."',
  },

  // 1.5 Context Clues
  {
    id: '1-5-ex01', moduleId: '1-5', moduleTitle: '1.5 上下文猜词',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'The Most Dangerous Game (excerpt)',
    passage: `He was finding the general a most thoughtful and affable host, a true cosmopolite. But there was one small trait of the general's that made Rainsford uncomfortable. Whenever the general smiled, his lips drew back from his teeth in a way that was more predatory than genial.`,
    question: 'What does "predatory" most likely mean in this context?',
    answer: 'Like a predator — threatening and carnivorous',
    options: ['Friendly and warm', 'Like a predator — threatening and carnivorous', 'Intellectual and wise', 'Humorous and witty'],
    explanation: 'Comparison-Contrast clue: "more predatory than genial" — "genial" means friendly/pleasant, so "predatory" must be its opposite. The contrast structure reveals the meaning: predatory = like a hunter seeking prey.',
  },
  {
    id: '1-5-ex02', moduleId: '1-5', moduleTitle: '1.5 上下文猜词',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Of Mice and Men (excerpt)',
    passage: `Lennie dabbled his big paw in the water and wiggled his fingers so the water arose in little splashes; rings widened across the pool to the other side and came back again. Lennie watched them go. "Look, George. Look what I done."`,
    question: 'What does "dabbled" most likely mean? (one English verb)',
    answer: 'splashed',
    explanation: 'Co-occurrence clue: the subsequent description — "wiggled his fingers" and "water arose in little splashes" — directly explains the action. Experience clue: the image of "big paw" + splashing water suggests playful splashing or paddling in water.',
  },

  // 1.6 Narrative Perspective
  {
    id: '1-6-ex01', moduleId: '1-6', moduleTitle: '1.6 叙事视角',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'The Tell-Tale Heart (excerpt)',
    passage: `Now this is the point. You fancy me mad. Madmen know nothing. But you should have seen me. You should have seen how wisely I proceeded — with what caution — with what foresight — with what dissimulation I went to work! I was never kinder to the old man than during the whole week before I killed him.`,
    question: 'The narrator claims he is "wise" and "cautious." What does the evidence actually suggest about his mental state?',
    answer: 'He is insane — his "wisdom" and "caution" are proof of his madness',
    options: [
      'He is genuinely wise and cautious',
      'He is insane — his "wisdom" and "caution" are proof of his madness',
      'He simply misunderstands the old man\'s intentions',
      'He originally intended to help the old man but made a mistake',
    ],
    explanation: 'The narrator uses claims of "wisdom" and "caution" to refute the charge of madness, but the very behavior he describes — being excessively kind to a man for an entire week just to murder him — is itself a twisted definition of "sanity." This is a textbook example of an unreliable narrator.',
  },
  {
    id: '1-6-ex02', moduleId: '1-6', moduleTitle: '1.6 叙事视角',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'The Tell-Tale Heart (excerpt)',
    passage: `I was never kinder to the old man than during the whole week before I killed him. And every night, about midnight, I turned the latch of his door and opened it — oh, so gently!`,
    question: 'Is this narrator intentionally unreliable or unintentionally unreliable? Why?',
    answer: 'Unintentionally unreliable. The narrator genuinely believes he is not mad — he truly thinks his actions are "wise" and "cautious" rather than deliberately deceiving the reader.',
    explanation: 'Key distinction: intentionally unreliable = the narrator knows they are lying (e.g., Lolita\'s Humbert); unintentionally unreliable = the narrator distorts reality without self-awareness due to mental illness, age, or bias. Poe\'s narrator belongs to the latter category.',
  },
  {
    id: '1-6-ex03', moduleId: '1-6', moduleTitle: '1.6 叙事视角',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'The Tell-Tale Heart (excerpt)',
    passage: `Object there was none. Passion there was none. I loved the old man. He had never wronged me. He had never given me insult. For his gold I had no desire. I think it was his eye! Yes, it was this! He had the eye of a vulture — a pale blue eye, with a film over it.`,
    question: 'What reason does the narrator give for the murder? (answer in English)',
    answer: 'the old man\'s eye (the vulture eye)',
    explanation: '"I think it was his eye!" — the narrator claims he loved the old man and had no motive for murder except the "vulture eye." This absurd justification (murdering someone because of their eye) is the defining mark of the unreliable narrator.',
  },
  {
    id: '1-6-ex04', moduleId: '1-6', moduleTitle: '1.6 叙事视角',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'To Kill a Mockingbird (excerpt)',
    passage: `When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury.`,
    question: 'What narrative perspective is used in this passage?',
    answer: 'First-person peripheral / retrospective',
    options: ['Third-person omniscient', 'First-person protagonist', 'First-person peripheral / retrospective', 'Third-person limited'],
    explanation: '"My brother Jem" indicates the narrator is Jem\'s sister (Scout), recalling a childhood event. This is first-person peripheral/retrospective: the "I" narrator is a supporting character in the story, observing her brother Jem.',
  },

  // 1.7 Elegant Variation
  {
    id: '1-7-ex01', moduleId: '1-7', moduleTitle: '1.7 优雅变体',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'A Tale of Two Cities (excerpt)',
    passage: `A large cask of wine had been dropped and broken, in the street. The accident had happened in getting it out of a cart ... All the people within reach had suspended their business, or their idleness, to run to the spot and drink the wine. The rough, irregular stones of the street, pointing every way, and designed, one might have thought, expressly to lame all living creatures that approached them, had dammed it into little pools.`,
    question: 'What does "it" refer to in "had dammed it into little pools"?',
    answer: 'the wine',
    options: ['the street', 'the cask', 'the wine', 'the cart'],
    explanation: '"had dammed it into little pools" — what was dammed into little pools? The wine. The rough stones of the street prevented the wine from flowing away, forming small puddles. This is a distant pronominal reference.',
  },
  {
    id: '1-7-ex02', moduleId: '1-7', moduleTitle: '1.7 优雅变体',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'A Tale of Two Cities (excerpt)',
    passage: `A large cask of wine had been dropped and broken, in the street. ... All the people within reach had suspended their business, or their idleness, to run to the spot and drink the wine. ... Some men kneeled down, made scoops of their two hands joined, and sipped, or tried to help women, who bent over their shoulders, to sip, before the liquid had all run out between their fingers.`,
    question: 'In this passage, what is the elegant variation used for "the wine"?',
    answer: 'the liquid',
    explanation: '"before the liquid had all run out" — "liquid" refers back to the previously mentioned "wine." This is an example of elegant variation using a superordinate term (hypernym) to avoid repetition.',
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
    question: 'How many stanzas does this poem have, and how many lines per stanza?',
    answer: '4 stanzas, 5 lines each',
    options: ['4 stanzas, 5 lines each', '5 stanzas, 4 lines each', '3 stanzas, 7 lines each', '4 stanzas, 4 lines each'],
    explanation: 'Stanza 1: lines 1-5; Stanza 2: lines 6-10; Stanza 3: lines 11-15; Stanza 4: lines 16-20. Each stanza contains exactly 5 lines, for a total of 4 stanzas.',
  },
  {
    id: '2-1-ex02', moduleId: '2-1', moduleTitle: '2.1 诗歌基本要素',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Robert Frost — The Road Not Taken (stanza 1)',
    passage: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;`,
    question: 'This stanza has _____ lines. (enter a number)',
    answer: '5',
    explanation: 'Simply count: each line begins with a capital letter, and there are 5 lines total.',
  },

  // 2.2 Rhyme Scheme
  {
    id: '2-2-ex01', moduleId: '2-2', moduleTitle: '2.2 尾韵格式',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Robert Frost — The Road Not Taken (stanza 1)',
    passage: `Two roads diverged in a yellow wood, ( )
And sorry I could not travel both ( )
And be one traveler, long I stood ( )
And looked down one as far as I could ( )
To where it bent in the undergrowth; ( )`,
    question: 'Mark the rhyme scheme of this stanza (use a, b). Line 1: ___, Line 2: ___, Line 3: ___, Line 4: ___, Line 5: ___.',
    answer: 'abaab',
    explanation: 'wood(a) — both(b) — stood(a) — could(a) — undergrowth(b). Note: wood/stood/could rhyme → a; both/undergrowth rhyme → b. The scheme is abaab.',
  },
  {
    id: '2-2-ex02', moduleId: '2-2', moduleTitle: '2.2 尾韵格式',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Emily Dickinson — Hope is the thing with feathers',
    passage: `"Hope" is the thing with feathers —
That perches in the soul —
And sings the tune without the words —
And never stops — at all —`,
    question: 'What is the rhyme scheme of this stanza?',
    answer: 'abcb',
    options: ['aabb', 'abab', 'abcb', 'aaaa'],
    explanation: 'feathers(a) and words(c) do not rhyme; soul(b) and all(b) rhyme. Therefore the scheme is abcb.',
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
    question: 'In this stanza, which three consecutive words form an alliteration? (enter the three words, separated by spaces)',
    answer: 'weak and weary',
    explanation: '"weak and weary" — all three words begin with the w sound, forming alliteration. Poe uses alliteration to enhance rhythm while the soft w sound conveys the narrator\'s exhaustion and fragility.',
  },
  {
    id: '2-3-ex02', moduleId: '2-3', moduleTitle: '2.3 头韵',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Edgar Allan Poe — The Raven',
    passage: `And the silken, sad, uncertain rustling of each purple curtain
Thrilled me — filled me with fantastic terrors never felt before;`,
    question: 'What literary device is used in "silken, sad, uncertain rustling"?',
    answer: 'Alliteration',
    options: ['Simile', 'Alliteration', 'Personification', 'Metaphor'],
    explanation: '"silken, sad" both begin with s, forming alliteration. The s sound mimics the rustling of curtains (also an example of onomatopoeia) while conveying a sorrowful atmosphere.',
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
    question: 'What poetic form does this poem belong to?',
    answer: 'Sonnet — specifically, a Shakespearean (English) Sonnet',
    options: ['Limerick', 'Free Verse', 'Sonnet — specifically, a Shakespearean (English) Sonnet', 'Petrarchan (Italian) Sonnet'],
    explanation: '14 lines = Sonnet. A Shakespearean Sonnet is characterized by 3 quatrains + 1 couplet, with the rhyme scheme abab cdcd efef gg.',
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
    question: 'What poetic form and characteristic features does this poem exhibit?',
    answer: 'Limerick — 5 lines, aabba rhyme scheme, humorous/absurd content',
    options: [
      'Sonnet',
      'Limerick — 5 lines, aabba rhyme scheme, humorous/absurd content',
      'Free Verse',
      'Elegy',
    ],
    explanation: '5 lines + aabba rhyme (beard/feared/Hen/Wren/beard) + absurd humor = the defining characteristics of a Limerick. The content — birds nesting in a beard — is classic limerick absurdity.',
  },
  {
    id: '2-4-ex03', moduleId: '2-4', moduleTitle: '2.4 诗歌体式',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'Walt Whitman — Song of Myself (excerpt)',
    passage: `I celebrate myself, and sing myself,
And what I assume you shall assume,
For every atom belonging to me as good belongs to you.

I loafe and invite my soul,
I lean and loafe at my ease observing a spear of summer grass.`,
    question: 'What poetic form does this poem belong to? Give two reasons for your answer.',
    answer: 'Free Verse. Reasons: (1) No fixed rhyme scheme — there is no end rhyme pattern. (2) No fixed meter — line lengths vary considerably (line 1 has 10 syllables vs. line 3 with 17 syllables), relying on natural speech rhythms rather than a consistent metrical pattern.',
    explanation: 'Walt Whitman was the pioneer of free verse in English. This poem has no rhyme scheme, and line lengths vary dramatically, depending on breath rhythm rather than a fixed meter.',
  },

  // 2.5 Figurative Language
  {
    id: '2-5-ex01', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Shakespeare — Sonnet 18',
    passage: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:`,
    question: 'What figure of speech is used in "Shall I compare thee to a summer\'s day?"',
    answer: 'A simile introduction / the opening of an extended metaphor',
    options: ['Metaphor', 'A simile introduction / the opening of an extended metaphor', 'Personification', 'Imagery'],
    explanation: '"compare...to..." is the hallmark structure of a simile. The entire poem unfolds as an extended metaphor: comparing the beloved to a summer\'s day, but ultimately declaring the beloved superior to summer.',
  },
  {
    id: '2-5-ex02', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Shakespeare — Sonnet 18',
    passage: `Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;`,
    question: 'What figure of speech is "the eye of heaven," and what does it refer to?',
    answer: 'Metaphor + Personification. "The eye of heaven" = the sun',
    options: [
      'Simile, referring to the moon',
      'Metaphor + Personification, referring to the sun',
      'Symbol, referring to God',
      'Alliteration, referring to the sky',
    ],
    explanation: 'The sun is compared to an "eye" (metaphor) and is given human attributes — a "gold complexion" and the capacity to shine "too hot" (personification). This is a layered use of two figures of speech.',
  },
  {
    id: '2-5-ex03', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Walter de la Mare — Silver',
    passage: `Slowly, silently, now the moon
Walks the night in her silver shoon;
This way, and that, she peers, and sees
Silver fruit upon silver trees;`,
    question: 'The moon "walks" and "peers." What figure of speech is this?',
    answer: 'Personification',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    explanation: 'Attributing human actions — walking and peering — to the moon is classic personification. The moonlight is thus given a gentle, maternal quality of surveying the earth.',
  },
  {
    id: '2-5-ex04', moduleId: '2-5', moduleTitle: '2.5 修辞语言',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'Walter de la Mare — Silver (excerpt)',
    passage: `Slowly, silently, now the moon
Walks the night in her silver shoon;
This way, and that, she peers, and sees
Silver fruit upon silver trees;
One by one the casements catch
Her beams beneath the silvery thatch;
Couched in his kennel, like a log,
With paws of silver sleeps the dog;`,
    question: 'Identify one simile and two examples of imagery in this stanza.',
    answer: 'Simile: "like a log" (the dog lies as still as a log). Imagery: "silver fruit upon silver trees" (visual imagery of moonlight transforming the orchard), "paws of silver" (visual imagery of moonlight on the dog\'s paws), "silvery thatch" (visual imagery of moonlit rooftops). The entire poem is saturated with silver-colored visual imagery.',
    explanation: 'Imagery: the poem uses "silver" repeatedly to create a sustained visual image of moonlight, evoking a tranquil, surreal atmosphere. Simile: only "like a log" uses an explicit comparison with "like." de la Mare builds the poem through dense visual imagery, letting readers "see" the silver world under moonlight.',
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
    question: 'Translate "As fair art thou, my bonnie lass" into modern English.',
    answer: 'As beautiful you are, my pretty girl',
    explanation: 'fair = beautiful; art = are (paired with thou); thou = you; bonnie = pretty; lass = girl. The full line: You are so beautiful, my pretty girl.',
  },
  {
    id: '2-6-ex02', moduleId: '2-6', moduleTitle: '2.6 古英语词汇',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'Robert Burns — A Red, Red Rose',
    passage: `And I will luve thee still, my dear,
Till a' the seas gang dry.`,
    question: '"thee" is the object form of _____, "a\'" is a contraction of _____, and "gang" means _____.',
    answer: 'thou / all / go',
    explanation: 'thee = object form of thou (you object); a\' = all (Scots dialect contraction); gang = go. The full line: I will love you still, my dear, until all the seas go dry.',
  },
  {
    id: '2-6-ex03', moduleId: '2-6', moduleTitle: '2.6 古英语词汇',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'Shakespeare — Sonnet 18',
    passage: `Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou growest:`,
    question: 'What does the -est/-st suffix in "thou wander\'st" and "thou growest" indicate?',
    answer: 'Second-person singular (paired with "thou")',
    options: [
      'Past tense',
      'Second-person singular (paired with "thou")',
      'Third-person singular (paired with "he/she")',
      'Passive voice',
    ],
    explanation: 'The -est/-st suffix pairs with "thou" to mark the second-person singular. thou wander\'st = you wander; thou growest = you grow. Compare with -th/-eth (third-person singular, e.g., he goeth).',
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
    question: 'What is the normal word order for "Merrily did we drop"?',
    answer: 'We dropped merrily',
    explanation: 'This is subject-verb inversion: adverb fronted (Merrily) + auxiliary verb (did) + subject (we) + main verb (drop). Normal order: We dropped merrily. Coleridge uses inversion to maintain the ballad meter.',
  },
  {
    id: '2-7-ex02', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'choice', typeLabel: '选择题',
    passageTitle: 'John Keats — La Belle Dame sans Merci',
    passage: `O what can ail thee, knight-at-arms,
Alone and palely loitering?
The sedge has withered from the lake,
And no birds sing.`,
    question: 'Why is "palely" placed before "loitering" in "palely loitering"?',
    answer: 'Poetic inversion — the normal order is "loitering palely"',
    options: [
      'This is normal word order',
      'Poetic inversion — the normal order is "loitering palely"',
      'This is a grammatical error',
      '"palely" modifies "knight-at-arms" rather than "loitering"',
    ],
    explanation: 'The normal word order would be "loitering palely" (loitering in a pale manner), but Keats fronts the adverb to create a more poetic word order while emphasizing the knight\'s pallor. This is a common form of rhetorical inversion in poetry.',
  },
  {
    id: '2-7-ex03', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'fill', typeLabel: '填空题',
    passageTitle: 'John Donne — Holy Sonnet 10',
    passage: `Death, be not proud, though some have called thee
Mighty and dreadful, for thou art not so;
For those whom thou think'st thou dost overthrow
Die not, poor Death, nor yet canst thou kill me.`,
    question: 'In "canst thou," what person is indicated by the -st suffix? What is the modern English form of "canst"?',
    answer: 'Second-person singular (paired with "thou") / can',
    explanation: 'canst = second-person singular form of "can," paired with "thou." thou canst = you can. Similar forms: thou dost (you do), thou hast (you have).',
  },
  {
    id: '2-7-ex04', moduleId: '2-7', moduleTitle: '2.7 诗歌语法',
    type: 'short_answer', typeLabel: '简答题',
    passageTitle: 'John Donne — Holy Sonnet 10 (excerpt)',
    passage: `Death, be not proud, though some have called thee
Mighty and dreadful, for thou art not so;
For those whom thou think'st thou dost overthrow
Die not, poor Death, nor yet canst thou kill me.`,
    question: 'Translate the first two lines into modern English and identify the archaic grammatical features.',
    answer: '"Death, do not be proud, although some have called you mighty and dreadful, for you are not so." Archaic features: "thee" = you (object form); "thou art" = you are; the negative imperative "be not proud" (modern = "do not be proud").',
    explanation: 'Donne directly addresses Death (apostrophe) in this sonnet, using archaic pronouns to create a solemn tone. "thou art," "thee" and other archaic forms are not obstacles here but part of the rhetorical strategy — adding gravity when confronting the ultimate existential question.',
  },
]

export function getExercisesByModule(moduleId: string): Exercise[] {
  return exercises.filter((e) => e.moduleId === moduleId)
}
