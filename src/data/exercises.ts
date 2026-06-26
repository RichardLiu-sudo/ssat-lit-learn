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
  // ================================================================
  // Module 1.5 — Context Clues: Text A — Appointment with Love (5 Qs)
  // ================================================================
  {
    id: 'ex-texta-01',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Text A: Appointment with Love`,
    passage: `Six minutes to six, said the great round clock over the information booth in Grand Central Station. The tall young Army lieutenant who had just come from the direction of the tracks lifted his sunburned face, and his eyes narrowed to note the exact time. His heart was pounding with a beat that shocked him because he could not control it. In six minutes, he would see the woman who had filled such a special place in his life for the past thirteen months, the woman he had never seen, yet whose written words had been with him and sustained him unfailingly.`,
    question: `How did Blanchard first meet Hollis Meynell?`,
    answer: `D`,
    options: ["At a dinner party", "Through a radio program", "At the army base", "By exchanging letters"],
    explanation: `They met through correspondence after Blanchard read Meynell's notes in a book during his training for combat flight.`
  },
  {
    id: 'ex-texta-02',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Text A: Appointment with Love`,
    passage: `In one of his letters, he had confessed to her that he often felt fear, and only a few days before this battle, he had received her answer: "Of course you fear... all brave men do. Didn't King David know fear? That's why he wrote the Twenty-third Psalm. Next time you doubt yourself, I want you to hear my voice reciting to you: 'Yea, though I walk through the valley of the shadow of death, I shall fear no evil, for Thou art with me.'" And he had remembered; he had heard her imagined voice, and it had renewed his strength and skill.`,
    question: `Why did Meynell refuse to send her photograph?`,
    answer: 'B',
    options: ["She was too shy", "She believed appearance was irrelevant to their connection", "She didn\'t have a recent one", "She wanted to test his loyalty"],
    explanation: `Meynell said that if Blanchard's feelings had any reality, her appearance wouldn't matter; what she looked like was insignificant.`
  },
  {
    id: 'ex-texta-03',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Text A: Appointment with Love`,
    passage: `Under the immense, starred roof, people were walking fast, like threads of color being woven into a gray web. A girl passed close to him, and Lieutenant Blandford started. She was wearing a red rose in the lapel of her coat. Almost uncontrollably he made one step closer to her, and just then he saw Hollis Meynell.`,
    question: `What signal did Meynell use to identify herself?`,
    answer: 'B',
    options: ["A white rose", "A red rose on her coat", "A blue scarf", "A book in her hand"],
    explanation: `She said she would wear a red rose so that Blanchard could recognize her at Grand Central Station.`
  },
  {
    id: 'ex-texta-04',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Text A: Appointment with Love`,
    passage: `The girl in the green suit was walking quickly away. Blandford felt as though he were split in two, so keen was his desire to follow her, and yet so deep was his longing for the woman whose spirit had truly companioned and upheld his own. He could not see the woman before him now without seeing Hollis Meynell in his mind's eye; the one whose face, whose real living face, he had often imagined and whose spirit and whose intellect had been his faithful friend.`,
    question: `Who did Blanford approach when he arrived at the station?`,
    answer: `A`,
    options: ["The young woman in green", "The older woman in the felt hat", "A porter", "Hollis Meynell herself"],
    explanation: `A tall young lady in a pale green suit approached him with a welcoming smile, and he was drawn to her beauty before realizing she was not wearing a rose.`
  },
  {
    id: 'ex-texta-05',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Text A: Appointment with Love`,
    passage: `"I'm Lieutenant John Blandford, and you—you are Miss Meynell. I'm so glad you could meet me; may—may I take you to dinner?"

The woman's face broadened into a tolerant smile. "I don't know what this is all about, son," she answered, "that young lady in the green suit who just went by—she begged me to wear this rose on my coat. She said if you were to ask me out to dinner, I should tell you that she's waiting for you in that big restaurant across the street. She said it was some kind of a test."'`,
    question: `What was the real test that Meynell set for Blanford?`,
    answer: 'B',
    options: ["Whether he could find the station", "Whether he would accept her regardless of appearance", "Whether he would wait for her", "Whether he remembered the date"],
    explanation: `The older woman wearing the red rose was a test to see if Blanford would honor their connection despite physical appearance.`
  },

  // ================================================================
  // Module 1.5 — Context Clues: Text B — Feuille d\'Album (3 Qs)
  // ================================================================
  {
    id: 'ex-textb-01',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: "Text B: Feuille d\'Album",
    passage: `He really was an impossible person. Too shy altogether. With absolutely nothing to say for himself. And such a weight. Once he was in your studio he never knew when to go, but would sit on and on until you nearly screamed, and burned to throw something enormous after him when he did finally blush his way out—something like the tortoise stove. The strange thing was that at first sight he looked most interesting. Everybody agreed about that.`,
    question: `What is the central characteristic of Ian French?`,
    answer: 'B',
    options: ["He is boastful and outgoing", "He is emotionally detached from the world around him", "He is ambitious and calculating", "He is desperate for attention"],
    explanation: `Ian is portrayed as someone who observes life from a distance, emotionally cut off from the world and people around him.`
  },
  {
    id: 'ex-textb-02',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: "Text B: Feuille d\'Album",
    passage: `When questioned about his work Ian said very little. "I am trying to paint," he would murmur, blushing. It was all very well for anyone to say that he was an impossible person. But the curious thing was that nobody could be more certain of that than he was himself. He knew he was impossible. Deep down, he had a kind of hopeless adoration for the young women who passed by his studio, but he could never think of anything to say to them.`,
    question: `What does Ian's meticulous grooming suggest about his character?`,
    answer: 'B',
    options: ["He is vain and self-absorbed", "He maintains external order as a defense against emotional engagement", "He wants to attract women", "He is preparing for a job interview"],
    explanation: `Ian's obsession with appearance and grooming represents a controlled surface beneath which real emotions are suppressed.`
  },
  {
    id: 'ex-textb-03',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: "Text B: Feuille d\'Album",
    passage: `The girl across the street was about sixteen, with dark hair, and she wore a red dress. She lived with an old woman who was probably her grandmother. Every morning at a certain hour, she opened the shutters of the window opposite and leaned out. She was always alone. And Ian, who had never been able to stir from his studio, found himself waiting for that moment, standing just inside his own dark room, watching. Once he nearly waved to her, but his hand stopped, frozen at his side.`,
    question: `What finally breaks through Ian's emotional isolation?`,
    answer: 'B',
    options: ["A letter from home", "The girl across the street", "A conversation with his coworkers", "A painting he sees in a gallery"],
    explanation: `The girl across the street who always wears a red dress eventually triggers a response in Ian, representing the first time his emotional walls are breached.`
  },

  // ================================================================
  // Module 1.6 — Narrative Perspective: Text C — The Tell-Tale Heart (1 Q)
  // ================================================================
  {
    id: 'ex-textc-01',
    moduleId: '1-6',
    moduleTitle: 'Narrative Perspective: Manipulation',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Text C: The Tell-Tale Heart`,
    passage: `Object there was none. Passion there was none. I loved the old man. He had never wronged me. He had never given me insult. For his gold I had no desire. I think it was his eye! yes, it was this! He had the eye of a vulture—a pale blue eye, with a film over it. Whenever it fell upon me, my blood ran cold; and so by degrees—very gradually—I made up my mind to take the old man's life, and thus rid myself of the eye forever.`,
    question: `What is the narrator's stated reason for killing the old man?`,
    answer: 'B',
    options: ["He wanted his money", "He could not stand the old man\'s \"evil eye\"", "He believed the old man was a threat to society", "Revenge for a past wrong"],
    explanation: `The narrator explicitly states he loved the old man but was driven to murder by the old man's 'vulture eye' — a pale blue eye with a film over it.`
  },

  // ================================================================
  // Module 1.5 — Context Clues (3 Qs)
  // ================================================================
  {
    id: 'ex-context-01',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    question: `What does 'baffled' mean in the sentence: "We are baffled. There are just too many new words for us to follow the plot"?`,
    answer: `confused, puzzled, unable to understand`,
    explanation: `The cause (too many new words) leads to the effect of being unable to follow the plot. 'Baffled' describes this state of confusion using a cause-effect context clue.`
  },
  {
    id: 'ex-context-02',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    question: `What does 'indolently' mean in the sentence: "She walked indolently along, with a mind at rest"?`,
    answer: `lazily, slowly, without hurry`,
    explanation: `The phrase 'with a mind at rest' restates the meaning of 'indolently,' suggesting relaxed, unhurried movement. This is a synonym/restatement context clue.`
  },
  {
    id: 'ex-context-03',
    moduleId: '1-5',
    moduleTitle: 'Context Clues',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    question: `What does 'magnanimity' mean in: "a display of magnanimity, too, that was surprising in one so young"?`,
    answer: `generosity of spirit; being above petty concerns`,
    explanation: `The girl overlooked her own striking appearance while being astonished at the narrator's — showing she was generous in not considering herself special. This is an example/illustration context clue.`
  },

  // ================================================================
  // Module 1.3 — Anticipate Outcome: Practice 1 (5 Qs)
  // ================================================================
  {
    id: 'ex-p1-01',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 1: A Connecticut Yankee in King Arthur's Court`,
    passage: `"CAMELOT—Camelot," said I to myself. "I don't seem to remember hearing of it before. Name of the asylum, likely."

It was a soft, reposeful summer landscape, as lovely as a dream, and as lonesome as Sunday. The air was full of the smell of flowers, and the buzzing of insects, and the twittering of birds, and there were no people, no wagons, there was no stir of life, nothing going on. The road was mainly a winding path with hoof-prints in it, and now and then a faint trace of wheels on either side in the grass—wheels that apparently had a tire as broad as one's hand.`,
    question: `Setting: Where and when does this passage take place?`,
    answer: `A dreamlike, medieval-style landscape in summer — a quiet countryside with thatched cabins, crooked alleys, and a town with stone houses.`,
    explanation: `The description of thatched cabins, winding paths, lack of modern infrastructure, and the noble cavalcade with plumed helmets suggests a medieval setting.`
  },
  {
    id: 'ex-p1-02',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 1: A Connecticut Yankee in King Arthur's Court`,
    passage: `Presently a fair slip of a girl, about ten years old, with a cataract of golden hair streaming down over her shoulders, came along. Around her head she wore a hoop of flame-red poppies. It was as sweet an outfit as ever I saw, what there was of it. She walked indolently along, with a mind at rest, its peace reflected in her innocent face. The circus man paid no attention to her; didn't even seem to see her.`,
    question: `Main Characters: Who are they?`,
    answer: `The narrator (Hank Morgan), a circus man (dressed in fantastic make-up), and a young girl of about ten with golden hair.`,
    explanation: `Three characters are clearly identified: the first-person narrator, his circus companion, and the girl with a flame-red poppy crown.`
  },
  {
    id: 'ex-p1-03',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 1: A Connecticut Yankee in King Arthur's Court`,
    passage: `she—she was no more startled at his fantastic make-up than if she was used to his like every day of her life. She was going by as indifferently as she might have gone by a couple of cows; but when she happened to notice me, THEN there was a change! Up went her hands, and she was turned to stone; her mouth dropped open, her eyes stared wide and timorously, she was the picture of astonished curiosity touched with fear.`,
    question: `Descriptions of main characters (physical and mental): Describe each.`,
    answer: `Narrator: Observant, rational, puzzled by the girl's reaction. Circus man: Fantastic make-up, indifferent. Girl: Innocent, at peace, golden hair, startled by narrator.`,
    explanation: `Each character is described through appearance and behavior.`
  },
  {
    id: 'ex-p1-04',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 1: A Connecticut Yankee in King Arthur's Court`,
    passage: `In the town were some substantial windowless houses of stone scattered among a wilderness of thatched cabins; the streets were mere crooked alleys, and unpaved; troops of dogs and nude children played in the sun and made life and noise; hogs roamed and rooted contentedly about... Presently there was a distant blare of military music; it came nearer, still nearer, and soon a noble cavalcade wound into view, glorious with plumed helmets and flashing mail and flaunting banners and rich doublets and horse-cloths and gilded spearheads.`,
    question: `What might happen to the characters?`,
    answer: `The narrator and circus man will likely be taken as strange visitors entering the medieval town; the girl may report the sighting to others.`,
    explanation: `The contrast between the modern narrator and the medieval setting sets up dramatic tension.`
  },
  {
    id: 'ex-p1-05',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 1: A Connecticut Yankee in King Arthur's Court`,
    passage: `"CAMELOT—Camelot," said I to myself. "I don't seem to remember hearing of it before. Name of the asylum, likely."`,
    question: `The narrator thought that the name 'Camelot' referred to:`,
    answer: 'B',
    options: ["A kingdom", "An asylum", "A restaurant", "A circus"],
    explanation: `The text says: 'Name of the asylum, likely.' The narrator, a modern man, dismisses Camelot as a mental institution.`
  },

  // ================================================================
  // Module 1.3 — Anticipate Outcome: Practice 2 (7 Qs)
  // ================================================================
  {
    id: 'ex-p2-01',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 2: One of Ours — Circus Morning`,
    passage: `Claude Wheeler opened his eyes before the sun was up and vigorously shook his younger brother, who lay in the other half of the same bed.

"Ralph, Ralph, get awake! Come down and help me wash the car."

"Why for?"

"Why, aren't we going to the circus today?"`,
    question: `When might the story have happened? (Time)`,
    answer: `Early morning before sunrise, in August, during the early 20th century.`,
    explanation: `Context clues: 'before the sun was up,' 'August pastures,' 'tin basin,' 'corn-cobs to start a fire.'`
  },
  {
    id: 'ex-p2-02',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 2: One of Ours — Circus Morning`,
    passage: `Claude caught up his cap and ran out of doors, down the hillside toward the barn. The sun popped up over the edge of the prairie like a broad, smiling face; the light poured across the close-cropped August pastures and the hilly, timbered windings of Lovely Creek, a clear little stream with a sand bottom, that curled and twisted playfully about through the south section of the big Wheeler ranch. It was a fine day to go to the circus at Frankfort.`,
    question: `Where might the story have happened? (Place)`,
    answer: `On the Wheeler ranch near Frankfort, in the Midwest prairie, near Lovely Creek.`,
    explanation: `The text mentions 'the big Wheeler ranch,' 'the prairie,' 'Lovely Creek,' and 'the circus at Frankfort.'`
  },
  {
    id: 'ex-p2-03',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 2: One of Ours — Circus Morning`,
    passage: `Claude Wheeler opened his eyes before the sun was up and vigorously shook his younger brother, who lay in the other half of the same bed.

Old Mahailey herself came in from the yard, with her apron full of corn-cobs to start a fire in the kitchen stove. She smiled at him in the foolish fond way she often had with him when they were alone.`,
    question: `What are the main characters?`,
    answer: `Claude Wheeler, Ralph Wheeler (younger brother), and Mahailey (the housekeeper).`,
    explanation: `Three characters appear: Claude (protagonist), Ralph (brother), and old Mahailey.`
  },
  {
    id: 'ex-p2-04',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 2: One of Ours — Circus Morning`,
    passage: `Claude Wheeler opened his eyes before the sun was up and vigorously shook his younger brother, who lay in the other half of the same bed.

Old Mahailey herself came in from the yard... She smiled at him in the foolish fond way she often had with him when they were alone.

"What air you gittin' up for a-ready, boy? You goin' to the circus before breakfast? Don't you make no noise, else you'll have 'em all down here before I git my fire a-goin'."`,
    question: `What is the relationship between the main characters?`,
    answer: `Claude and Ralph are brothers. Mahailey is the family's housekeeper who has a fond, maternal relationship with Claude.`,
    explanation: `They share a bed; Mahailey smiles at Claude 'in the foolish fond way she often had with him when they were alone.'`
  },
  {
    id: 'ex-p2-05',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 2: One of Ours — Circus Morning`,
    passage: `Claude rose and dressed,—a simple operation which took very little time. He crept down two flights of stairs, feeling his way in the dusk, his red hair standing up in peaks, like a cock's comb.

"Car's all right. Let me alone." The boy turned over and pulled the sheet up to his face, to shut out the light.

Old Mahailey herself came in from the yard, with her apron full of corn-cobs to start a fire in the kitchen stove. She smiled at him in the foolish fond way she often had with him when they were alone.`,
    question: `Descriptive words of main characters: List key traits.`,
    answer: `Claude: eager, energetic, red hair. Ralph: lazy, reluctant. Mahailey: fond, caring, maternal, uses dialect.`,
    explanation: `Each character is revealed through actions and speech patterns.`
  },
  {
    id: 'ex-p2-06',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 2: One of Ours — Circus Morning`,
    passage: `It was a fine day to go to the circus at Frankfort, a fine day to do anything, the sort of day that must, somehow, turn out well.`,
    question: `What might happen to the characters?`,
    answer: `The family will go to the circus at Frankfort. The beautiful day suggests the outing will be enjoyable.`,
    explanation: `The narrative sets up anticipation; the last line hints at the day 'must, somehow, turn out well.'`
  },
  {
    id: 'ex-p2-07',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 2: One of Ours — Circus Morning`,
    passage: `Claude Wheeler opened his eyes before the sun was up and vigorously shook his younger brother. "Ralph, Ralph, get awake! Come down and help me wash the car." ... "Why, aren't we going to the circus today?"`,
    question: `What is an appropriate title for this passage?`,
    answer: `Circus Morning / The Day of the Circus / Claude's Early Morning`,
    explanation: `Claude's early rise for the circus trip is the central event.`
  },

  // ================================================================
  // Module 1.3 — Anticipate Outcome: Practice 3 (7 Qs)
  // ================================================================
  {
    id: 'ex-p3-01',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 3: The Most Dangerous Game`,
    passage: `The pent-up air burst hotly from Rainsford's lungs. His first thought made him feel sick and numb. The general could follow a trail through the woods at night; he could follow an extremely difficult trail; he must have uncanny powers; only by the merest chance had the Cossack failed to see his quarry.`,
    question: `Where might the story have happened? (Setting)`,
    answer: `In a dense forest on a remote island, at dawn. The story is set on Ship-Trap Island.`,
    explanation: `The woods, the huge dead tree, the fallen log — all indicate a wild, forested island setting.`
  },
  {
    id: 'ex-p3-02',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 3: The Most Dangerous Game`,
    passage: `Rainsford's second thought was even more terrible. It sent a shudder of cold horror through his whole being. Why had the general smiled? Why had he turned back?

Rainsford did not want to believe what his reason told him was true, but the truth was as evident as the sun that had by now pushed through the morning mists. The general was playing with him! The general was saving him for another day's sport!`,
    question: `What are the main characters?`,
    answer: `Rainsford (the hunted, an experienced hunter) and General Zaroff (the Cossack hunter).`,
    explanation: `The passage focuses on Rainsford's terrified realization and Zaroff's predatory pursuit.`
  },
  {
    id: 'ex-p3-03',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 3: The Most Dangerous Game`,
    passage: `The general was playing with him! The general was saving him for another day's sport! The Cossack was the cat; he was the mouse. Then it was that Rainsford knew the full meaning of terror.`,
    question: `What is the relationship between the main characters?`,
    answer: `Hunter and prey. Zaroff is the cat; Rainsford is the mouse.`,
    explanation: `The text explicitly states: 'The Cossack was the cat; he was the mouse.'`
  },
  {
    id: 'ex-p3-04',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 3: The Most Dangerous Game`,
    passage: `The general could follow a trail through the woods at night; he could follow an extremely difficult trail; he must have uncanny powers; only by the merest chance had the Cossack failed to see his quarry.

"I will not lose my nerve. I will not."

He slid down from the tree, and struck off again into the woods. His face was set and he forced the machinery of his mind to function.`,
    question: `Descriptive words of main characters: List key traits.`,
    answer: `Zaroff: cunning, patient, sadistic, has 'uncanny powers.' Rainsford: terrified but determined, resourceful, refuses to give up.`,
    explanation: `The cat-and-mouse dynamic defines both characters.`
  },
  {
    id: 'ex-p3-05',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 3: The Most Dangerous Game`,
    passage: `Three hundred yards from his hiding place he stopped where a huge dead tree leaned precariously on a smaller, living one. Throwing off his sack of food, Rainsford began to work with all his energy.

The job was finished at last, and he threw himself down behind a fallen log a hundred feet away. He did not have to wait long. The cat was coming again to play with the mouse.`,
    question: `What might happen to the characters?`,
    answer: `Rainsford is setting a trap for Zaroff using the dead tree. A confrontation is imminent.`,
    explanation: `Rainsford is hiding behind a fallen log; 'the cat was coming again to play with the mouse.'`
  },
  {
    id: 'ex-p3-06',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 3: The Most Dangerous Game`,
    passage: `Three hundred yards from his hiding place he stopped where a huge dead tree leaned precariously on a smaller, living one. Throwing off his sack of food, Rainsford began to work with all his energy.

The job was finished at last, and he threw himself down behind a fallen log a hundred feet away.`,
    question: `What will the character do to tackle the situation?`,
    answer: `Rainsford will use the dead tree as a trap to attack Zaroff when he approaches.`,
    explanation: `He worked on the tree arrangement and is waiting for Zaroff.`
  },
  {
    id: 'ex-p3-07',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 3: The Most Dangerous Game`,
    passage: `He did not have to wait long. The cat was coming again to play with the mouse.`,
    question: `What outcome will the character come to?`,
    answer: `Rainsford will likely survive this encounter, but the larger game is not yet over.`,
    explanation: `The tension suggests a turning point, but Zaroff's playfulness indicates the hunt continues.`
  },

  // ================================================================
  // Module 1.3 — Anticipate Outcome: Practice 4 (4 Qs)
  // ================================================================
  {
    id: 'ex-p4-01',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 4: Around the World in Eighty Days`,
    passage: `The train had started punctually. Among the passengers were a number of officers, Government officials, and opium and indigo merchants, whose business called them to the eastern coast. Passepartout rode in the same carriage with his master, and a third passenger occupied a seat opposite to them. This was Sir Francis Cromarty, one of Mr. Fogg's whist partners on the Mongolia, now on his way to join his corps at Benares.`,
    question: `Where might the story have happened? (Setting)`,
    answer: `On a train traveling through India, during the British colonial period (19th century).`,
    explanation: `Mentions of 'Sepoy revolt,' 'Benares,' and 'opium and indigo merchants' indicate colonial India.`
  },
  {
    id: 'ex-p4-02',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 4: Around the World in Eighty Days`,
    passage: `Passepartout rode in the same carriage with his master, and a third passenger occupied a seat opposite to them. This was Sir Francis Cromarty, one of Mr. Fogg's whist partners on the Mongolia, now on his way to join his corps at Benares.`,
    question: `What are the main characters?`,
    answer: `Phileas Fogg, Passepartout (Fogg's servant), and Sir Francis Cromarty.`,
    explanation: `Three characters are named and travel together.`
  },
  {
    id: 'ex-p4-03',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 4: Around the World in Eighty Days`,
    passage: `Passepartout rode in the same carriage with his master, and a third passenger occupied a seat opposite to them. This was Sir Francis Cromarty, one of Mr. Fogg's whist partners on the Mongolia, now on his way to join his corps at Benares.`,
    question: `What is the relationship between the main characters?`,
    answer: `Fogg and Passepartout are master and servant. Sir Francis is a casual acquaintance/whist partner.`,
    explanation: `Passepartout is Fogg's servant; Sir Francis is 'one of Mr. Fogg's whist partners on the Mongolia.'`
  },
  {
    id: 'ex-p4-04',
    moduleId: '1-3',
    moduleTitle: 'Anticipate the Outcome While Reading',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Practice 4: Around the World in Eighty Days`,
    passage: `Phileas Fogg, who was not traveling, but only describing a circumference, took no pains to inquire into these subjects; he was a solid body, traversing an orbit around the terrestrial globe, according to the laws of rational mechanics. He was at this moment calculating in his mind the number of hours spent since his departure from London.

Sir Francis Cromarty had observed the oddity of his traveling companion... and questioned himself whether a human heart really beat beneath this cold exterior.`,
    question: `Descriptive words of main characters: List key traits.`,
    answer: `Phileas Fogg: cold, precise, calculating, mechanical, indifferent to beauty. Sir Francis: tall, fair, conventional, distinguished. Passepartout: loyal servant.`,
    explanation: `Fogg is portrayed as a 'solid body, traversing an orbit'; Sir Francis observes his oddity.`
  },

  // ================================================================
  // Unit 2 — Poetry: Practice 1 — Claude & Mahailey (2 Qs)
  // ================================================================
  {
    id: 'ex-poetry-p1-01',
    moduleId: '2-1',
    moduleTitle: 'Major Components of Poetry',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Poetry Practice 1: One of Ours — Claude & Mahailey`,
    passage: `She had left the sitting-room because she was afraid Claude might get angry and say something hard to his father, and because she couldn't bear to see him hectored. Claude had always found life hard to live; he suffered so much over little things,—and she suffered with him. For herself, she never felt disappointments. Her husband's careless decisions did not disconcert her.`,
    question: `Repetition in this passage: Identify patterns of repeated words or structures.`,
    answer: `The passage repeats the pattern of Mahailey's emotions mirroring Claude's state: 'she suffered with him,' 'something ached in her,' 'a wave of physical contentment went through her.'`,
    explanation: `The repetition emphasizes Mahailey's complete emotional identification with Claude.`
  },
  {
    id: 'ex-poetry-p1-02',
    moduleId: '2-1',
    moduleTitle: 'Major Components of Poetry',
    type: 'choice',
    typeLabel: 'Multiple Choice',
    passageTitle: `Poetry Practice 1: One of Ours — Claude & Mahailey`,
    passage: `It had always been so. And now, as she grew older, and her flesh had almost ceased to be concerned with pain or pleasure, like the wasted wax images in old churches, it still vibrated with his feelings and became quick again for him. His chagrins shrivelled her. When he was hurt and suffered silently, something ached in her. On the other hand, when he was happy, a wave of physical contentment went through her.`,
    question: `Characteristics of Claude and Mahailey: Describe each.`,
    answer: `Claude: sensitive, suffers over small things, 'singular light in his eyes,' 'perturbed spirit.' Mahailey: selfless, religious, emotionally dependent on Claude's happiness, physically diminished but spiritually alive.`,
    explanation: `The contrast between Claude's visible suffering and Mahailey's quiet, devotional love defines both.`
  },
]

export function getExercisesByModule(moduleId: string): Exercise[] {
  return exercises.filter((e) => e.moduleId === moduleId)
}
