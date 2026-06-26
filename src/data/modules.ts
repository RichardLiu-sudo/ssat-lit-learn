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
  // ============================================================
  // UNIT 1: READING NARRATIVE STORIES (Fiction)
  // ============================================================
  {
    id: '1-1', unit: 1, order: 1,
    title: 'Schema', titleCn: 'Schema Theory',
    description: 'Activate existing knowledge frameworks to rapidly classify text types and anticipate content structure.',
    estimatedTime: '30 min', exerciseCount: 3, prerequisites: [],
    tags: ['Cognitive Strategy', 'Reading Foundations'],
    learningObjectives: ['Understand schema theory in cognitive psychology', 'Learn to activate background knowledge before reading', 'Rapidly identify text genre and type'],
    content: [
      {
        title: 'What Is a Schema?',
        text: `Our basic cognitive competence is the tendency to put numerous individual cases of the world into different groups and then extract a general picture for each group in our mind. In doing so, we would ignore the specific traits of each case and focus instead on the common characteristics of the whole group.

Our mental image of the flower comes as a convenient example. We look around and see many flowers in different colors and shapes. We would not mind the special appearances of each type and tend to retrieve some common traits of flowers for a general impression.

This mentally-formed general picture is called a schema (图式) by linguists. With the schema of the flower in our mind, we may generalize that a flower is mostly colorful, tender, beautiful and distinctive, being surrounded by green leaves.

Based upon this schema we will be able to quickly judge whether the other plants are instances of the flower and whether they are reasonably beautiful. That is to say, we work out a schema for the flower and this schema will help us in our future judgment.

You may wonder whether a schema can help us a little bit in our reading. A lot!`,
      },
      {
        title: 'Schema in Reading: The Gothic Fiction Example',
        text: `When you encounter an opening like this:

"It was a dark and stormy night. The old house stood alone on the hill, its windows like empty eyes staring into the darkness."

Your "Gothic fiction schema" immediately activates. You anticipate: mysterious or supernatural events, characters facing danger, and a consistently dark, tense atmosphere. These expectations guide you to process the text more efficiently — you already know what to look for.

For SSAT reading, activating the right schema means: identifying the genre within the first paragraph; predicting what types of content will follow; and locating key information (characters, time, place) more quickly.`,
      },
      {
        title: 'SSAT Application',
        text: `Rapid genre identification: Spend 10 seconds scanning the first two sentences to determine whether the passage is narrative, argumentative, or expository. Activate the corresponding framework: for narrative — focus on characters, timeline, and conflict; for argumentative — focus on claim, evidence, and conclusion; for expository — focus on topic sentences, key points, and examples. Read with expectations, not word-by-word translation.`,
      },
    ],
  },
  {
    id: '1-2', unit: 1, order: 2,
    title: 'Narrative Structure', titleCn: 'Narrative Structure',
    description: 'Master the five-element analysis: Setting → Characters → Conflict → Climax → Resolution.',
    estimatedTime: '45 min', exerciseCount: 4, prerequisites: ['1-1'],
    tags: ['Structural Analysis', 'Main Idea Questions'],
    learningObjectives: ['Master the five elements of narrative structure', 'Use narrative charts to analyze stories', 'Develop strategies for main-idea and structure questions'],
    content: [
      {
        title: 'The Five Elements of Narrative',
        text: `Every narrative text contains five fundamental elements:

Setting: the time and place where the story occurs
Characters: the individuals involved in the story
Conflict: the problem or challenge the characters face
Climax: the turning point of the story
Resolution: how the conflict is resolved

Thomas G. Devine's narrative chart: Plot the five elements on a timeline chart to visualize the story structure. Draw this chart while reading and fill it in as you go.

So far, most of us must have read quite a few Chinese narrative stories. Of course we have planned to read English ones as well. But very often when we turn to the first page of an English story or novel, we are baffled. There are just too many new words for us to follow the plot.

However, we may change our reading habit this time. We may learn to ignore the strange words and switch our attention to the general picture or schema of the story.`,
      },
      {
        title: 'Narrative Structure in Practice',
        text: `When we are reading, we need to ask a few very important questions, which are important to all stories and which are our chief concern. In what setting are the characters introduced? What difficulties have the characters to undergo? Is there any climactic point in the story when all the characters meet and when we as readers are made very nervous? And what finally happens to the characters?

Interestingly enough, by answering these questions we can also generalize a schema for a narrative story. With the answers to these questions, we may declare that we have grasped the general information of the story. That is, we have begun with the narrative schema or the narrative structure.

The basic elements in a narrative against a schema are: setting, character; conflict, resolution, and timeline. They are inter-related and usually occur in the following order: at the beginning of a story, we will generally find the time, the place or other circumstances of the narrative. Taken together, these are the setting for the story. Into this setting, one or more characters are introduced. Their personalities are greatly influenced by and may be inferred from the setting. The characters will come into conflict either with the situation or with other characters, and will have to overcome various difficulties or undergo various events. At this point, the conflict will become more complex. Eventually, one important event will lead the story to a climax. This will bring us to the resolution of the narrative: the problem is solved. Most stories are usually sequenced: one thing happens before the next, and the episodes form a timeline.`,
      },
      {
        title: 'Example: Appointment with Love',
        text: `Applying the five-element framework to S.I. Kishor's classic short story:

Setting: Grand Central Station, New York, during WWII
Characters: Lieutenant John Blandford, Hollis Meynell
Conflict: John has never met Hollis (only exchanged letters for 13 months); he is nervous about whether reality will match imagination
Climax: John sees a beautiful young woman and an older woman — he must decide whom to approach
Resolution: The older woman reveals the young woman was testing John's sincerity; Hollis is the older woman

The narrative structure above applies to fiction, or creative writing. We are able to follow the general plot as guided by the schema of narration with or without the new words. It will help us to tackle the difficulty of many new words in the initial stage of our reading.

SSAT common question types: "What is the main conflict?" or "Where does the climax occur?"`,
      },
      {
        title: 'Answer Strategies',
        text: `Main Idea questions: Look at the Resolution — the ending often suggests the theme.
Structure questions: Quickly identify the boundaries of the five elements; watch for transition words (but, however, suddenly).
Character relationship questions: Draw a character relationship map in the Characters section.
Timeline questions: Mark which time node each paragraph corresponds to.`,
      },
    ],
  },
  {
    id: '1-3', unit: 1, order: 3,
    title: 'Anticipate the Outcome While Reading', titleCn: 'Predicting Outcomes',
    description: 'Six predictive question frameworks for staged reading, with 4 practice passages totaling 23 questions.',
    estimatedTime: '60 min', exerciseCount: 23, prerequisites: ['1-2'],
    tags: ['Prediction', 'Inference', 'SSAT Reading'],
    learningObjectives: ['Master the six predictive question frameworks', 'Learn staged reading strategies', 'Actively predict and verify while reading'],
    content: [
      {
        title: 'The Six Predictive Questions',
        text: `After sorting out the general structure for a narrative, we may use it to predict the content of the unread part of a story, to anticipate the outcome of the information we have already obtained.

Use these six question frameworks while reading:

1. When? — When does the story take place?
2. Where? — Where does the story take place?
3. Who? — Who is the protagonist? What are their traits?
4. What happens? — What will the protagonist encounter?
5. What will they do? — What action will the protagonist take?
6. How does it end? — How will the story conclude?

These questions advance in stages: Paragraph 1 → Paragraph 5 → Paragraph 12 → Paragraph 18. At each stage, update your predictions based on new information.`,
      },
      {
        title: 'Reading with Purpose',
        text: `Many untrained students begin a reading assignment in English without purpose — they wait for the teacher to give them a task to fulfill. If there is no stated task, they may begin reading the first word of the text and continue passively until they reach the last word. They read without questioning, without much interest. Therefore they often end up without any idea of what they have read. At that point, they may perhaps re-read, but it is doubtful that they will remember the content in any organized way.

We as a successful reader, however, read as if we were talking with the writer. We keep on asking "such and such has already happened. What will happen next?" Through this kind of forward inferences, in the first place, we keep ourselves alert and read attentively, using our knowledge of structure and organization as a tool; secondly, we urge ourselves to dig out the information from the parts we have finished and to draw conclusions about it, using our common sense to formulate predictions; and finally, we enable ourselves to set our own priorities as we read. We do not need to wait for a teacher to establish the reason for our reading.

Suddenly, we find reading a detective job, fun!

There are essentially two kinds of reading: fiction (novels, short stories, poetry, etc.) and non-fiction (informational reading, biographies, histories, etc.), the latter type will be discussed in later stages. The procedures for making inferences are the same for both types, although the specific questions may be different.`,
      },
      {
        title: 'Staged Reading: Appointment with Love',
        text: `Stage 1 (Paragraph 1):
When? → May 1944 (during WWII)
Where? → Grand Central Station, New York
Prediction: A story about a soldier and the woman waiting for him back home.

Stage 2 (Paragraph 5):
Who? → Air Force Lieutenant John Blandford
New information: He has read her letters for 13 months but never met her.
Revised prediction: The meeting will be the story's turning point.

Stage 3 (Paragraph 12):
New information: He searches the crowd for a woman wearing a red rose.
Revised prediction: Two possibilities — the meeting succeeds, or something unexpected happens.

Stage 4 (Paragraph 18):
Resolution: The "older woman" was testing him. Verify which earlier predictions were correct and which were wrong.

Pre-Reading Focuses:
1. Read the first paragraph quickly and make inferences: (1) When? (2) Where? (3) Character identity? (4) What might happen? (5) What will character do? (6) What outcome?
2. Read first 5 paragraphs quickly and answer again.
3. Read first 12 paragraphs quickly and answer again.
4. Read first 18 paragraphs quickly and answer again.`,
      },
    ],
  },
  {
    id: '1-4', unit: 1, order: 4,
    title: 'Figure / Ground', titleCn: 'Figure/Ground Analysis',
    description: 'Analyze the contrast or blend between characters and their social background. Master the "Show, don\'t tell" writing principle.',
    estimatedTime: '45 min', exerciseCount: 3, prerequisites: ['1-3'],
    tags: ['Character Analysis', 'Literary Techniques'],
    learningObjectives: ['Understand Figure/Ground theory', 'Identify character-background relationships', 'Master Show, don\'t tell analysis'],
    content: [
      {
        title: 'Figure/Ground Theory',
        text: `An interesting partiality in our observation is that we tend to seek the shape of a figure (图形) against a ground (背景). Look at the following picture and sort out what you have found.

This picture is designed by a gestalt psychologist named Edgar Lubin. You may firstly notice that a vase (the figure) stands at the center of the picture against the black background. But after a blink you might be surprised to find the figure of two side-faces confronting each other against the white background. The observation from two different perspectives provides us with two different figures!

In literary analysis:

Figure: The most prominent element in the text — usually the protagonist, the object of the reader's attention.
Ground: The social, historical, and physical environment in which the character exists.

Three relationship patterns:
1. Contrast: The character stands out starkly against the background (e.g., the girl in the red coat in the black-and-white imagery of Schindler's List).
2. Blend: The character merges completely into the background (e.g., an ordinary citizen living anonymously in a metropolis).
3. Transition: The character gradually moves from contrast to blend, or vice versa.`,
      },
      {
        title: 'Character Analysis via Background',
        text: `Characters are a crucial part of narrative stories, and writers choose various ways to create and develop the personality of main characters. For example, by describing the appearance, action, language, and mental activities of characters, the writer shows us a vivid image of a whole person. Also, the figure of main characters normally tends to form a contrast or blend in the ground (both social and environmental). By analyzing the description of the background, you can discover the writer's true purpose for building the whole character.

Let's take the famous film (novel) Schindler's List as an example. The little girl dressed in a strawberry coat stands alone among the black-and-white crowd. This figure forms a striking contrast with the cruel social background. The whole contrast makes it easy for us to predict the main characteristic of the heroine in this film (novel).`,
      },
      {
        title: 'Show, Don\'t Tell',
        text: `"Show, don't tell" is the golden rule of modern fiction writing:

Tell (direct statement): "John was angry."
Show (indirect demonstration): "John's knuckles went white as he gripped the table edge."

By describing the character's interaction with the environment, the writer "shows" the internal state rather than "telling" the reader directly. SSAT frequently tests this skill — questions often ask "How does the author show character X's emotions?"

Practice with Katherine Mansfield's Feuille d'Album:
1. Find all descriptive words and phrases used for the painter.
2. Determine whether the painter is in contrast with or blends into his social environment.
3. How does the author "show" the painter's loneliness rather than "tell" it?`,
      },
    ],
  },
  {
    id: '1-5', unit: 1, order: 5,
    title: 'Context Clues', titleCn: 'Context Clues',
    description: 'Seven types of context clues plus three guiding principles for deducing word meanings. Essential for SSAT vocabulary-in-context questions.',
    estimatedTime: '40 min', exerciseCount: 3, prerequisites: ['1-4'],
    tags: ['Vocabulary Strategy', 'Context Analysis'],
    learningObjectives: ['Master seven types of context clues', 'Deduce unfamiliar word meanings without a dictionary', 'Apply the three guiding principles'],
    content: [
      {
        title: 'Seven Types of Context Clues',
        text: `To know the meanings of words is one of the most important factors in the comprehension process. But it does not mean that, as most students imagine, only with and only after having mastered a great amount of vocabulary can one read with ease. Your ability to guess the meaning of a new word also counts! Context clues (the words before or after a word in a sentence) are a useful way of understanding the new word. It is also a good way to build your word power — you will find that you can remember the new words more easily and permanently with the help of context clues.

Types of Context Clues:

1. Explanation Clues — placing words side by side to explain (apposition); explaining the meaning (attribution).
   Signal words: be, mean, can be taken as, similarly, that is, in other words.
   Example: "He was a gregarious person, always enjoying the company of others."

2. Example Clues — the author provides examples to hint at meaning.
   Signal words: such as, for example, for instance, ...belong to.
   Example: "Celestial bodies, such as the sun, moon, and stars..."

3. Comparison-Contrast Clues — using contrast to hint at meaning.
   Signal words: but, instead, however, or, rather than, on the other hand, unlike.
   Example: "Unlike his gregarious brother, Tom was shy."

4. Experience Clues — relying on the reader's life experience.

5. Summary Clues — the preceding text builds toward a summarizing meaning.

6. Co-occurrence Clues — words that frequently appear together suggest meaning through association.

7. Mood or Setting Clues — the tone and atmosphere of the passage reveal meaning.`,
      },
      {
        title: 'Three Guiding Principles',
        text: `Proper interpretation of a writer's intention is also a challenging task for a fiction reader (or SSAT test taker). We have to know how to accurately interpret the author's purpose for describing both setting and characters.

Three principles:

Emphasis: The sentence or paragraph containing the unfamiliar word often receives extra emphasis from the author. Look for restatements, elaborations, or dramatic pauses around the word.

Repetition: Key concepts are repeated nearby in different forms. Scan for synonyms or antonyms that provide clues.

Whole Picture: Never examine a word in isolation. Look at the entire paragraph, even the full passage context, to deduce meaning.`,
      },
      {
        title: 'SSAT Vocabulary-in-Context Strategy',
        text: `Approximately 20% of SSAT Reading questions test "word meaning in context." Strategy:

1. Never rely on memory — even if you know the word, verify its meaning within the passage.
2. Locate the 1-2 sentences before and after the unfamiliar word for clues.
3. Use elimination to rule out obviously incompatible options.
4. The substitution test: plug each option into the original sentence and check if it makes sense.`,
      },
    ],
  },
  {
    id: '1-6', unit: 1, order: 6,
    title: 'Narrative Perspective: Manipulation', titleCn: 'Narrative Perspective & Unreliable Narrator',
    description: 'Wayne C. Booth\'s theory of the unreliable narrator, with a complete analysis of Poe\'s The Tell-Tale Heart.',
    estimatedTime: '60 min', exerciseCount: 4, prerequisites: ['1-5'],
    tags: ['Point of View', 'Critical Reading'],
    learningObjectives: ['Distinguish among different narrative points of view', 'Understand the unreliable narrator theory', 'Evaluate narrator credibility with textual evidence'],
    content: [
      {
        title: 'Types of Point of View',
        text: `Point of View in fiction:

Narrator as a character:
- First-person protagonist narration: The main character tells their own story.
- First-person observer narration: A minor character tells the main character's story.

Narrator not a character:
- Omniscient narration: An all-knowing author tells the story, accessing every character's thoughts.
- Third-person observer narration: The author tells the story as an observer, limited to external descriptions.

SSAT point-of-view questions often ask: "From whose perspective is this passage narrated?"`,
      },
      {
        title: 'Unreliable Narration (Wayne C. Booth)',
        text: `In fiction, as in life, the unreliable narrator is a character who can't be trusted. Either from ignorance or self-interest, this narrator speaks with a bias, makes mistakes or even lies. Part of the pleasure and challenge of these first-person stories is working out the truth and understanding why the narrator is not straightforward. It's also a tool a writer uses to create an aura of authenticity in his work.

The term originates from Wayne C. Booth's 1961 "Rhetoric of Fiction," and though it is a key component of modernism, unreliable narratives are found in classics like "Wuthering Heights," in both Lockwood and Nelly Dean, and Jonathan Swift's "Gulliver's Travels."

The Unintentionally Unreliable: Many stories told in first-person point of view are told by a child or outsider who believes he is telling the complete truth but who, the reader quickly learns, is not fully aware of the circumstances around them. This is the case, for example, with the protagonist of J.D. Salinger's "The Catcher in the Rye," as well as young narrators such as Scout in Harper Lee's "To Kill a Mockingbird."

The Intentionally Unreliable: While unintentionally unreliable narrators can be endearing and naive, intentionally unreliable narrators are often frightening. Typically, such characters have sinister motives ranging from guilt, as in the case of Nabokov's "Lolita," to insanity, as in the case of Edgar Allan Poe's short story "The Tell-Tale Heart."

The purpose of an unreliable narrator is to create a work of fiction with multiple layers in which there are competing levels of truth. For this to be effective, the reader must be able to discern more than one level of truth. It is essential that the reader can recognize not only the narrator's unreliability but also the reality that is being hidden.`,
      },
      {
        title: 'Analysis: The Tell-Tale Heart',
        text: `Poe's "The Tell-Tale Heart" is the textbook example of the unreliable narrator:

Textual Evidence 1:
"True! — nervous — very, very dreadfully nervous I had been and am; but why will you say that I am mad?"
The very first sentence proves his madness: by preemptively declaring "you will say I am mad," he reveals his own paranoid awareness.

Textual Evidence 2:
"I loved the old man. He had never wronged me."
He then proceeds to describe killing the old man solely because of his "vulture eye" — a blatant contradiction between stated motive and action.

Textual Evidence 3:
"I heard all things in the heaven and in the earth. I heard many things in hell."
Claiming to hear sounds from heaven and hell is a clear indication of schizophrenia or psychosis.

SSAT may ask: Is the narrator reliable? Provide two pieces of textual evidence to support your answer.`,
      },
    ],
  },
  {
    id: '1-7', unit: 1, order: 7,
    title: 'Elegant Variation', titleCn: 'Elegant Variation',
    description: 'Recognize synonymous substitutions — how different words and expressions refer to the same concept without repetition.',
    estimatedTime: '25 min', exerciseCount: 2, prerequisites: ['1-6'],
    tags: ['Language Sensitivity', 'Reference Questions'],
    learningObjectives: ['Understand the concept of elegant variation', 'Identify different expressions referring to the same entity', 'Solve pronoun and reference questions'],
    content: [
      {
        title: 'What Is Elegant Variation?',
        text: `Careful English writers and speakers practice the principle of variety; they use different words for the same idea. Too much repetition is boring, either of the same word or of the same word in other forms. Therefore you may often find different expressions as replacement for one expression in the text. The expression being replaced is equivalent to the prototype, and all the other expressions are called its elegant variations.

A synonym is similar to an elegant variation. However, while the former should be in the same grammatical part of speech with the original expression, the latter can be different. Compared with a synonym, an elegant variation is a concept with a looser sense and a wider coverage. The elegant variations might not be as exactly worded as the prototypical word or expression, but they enhance the variety in language and the beauty of a text.

However, for foreign learners, the wide use of elegant variations greatly increases the uncertain elements — hence the difficulty — of the reading material.

Example: "space research" → elegant variations: "walking on the moon," "trips to outer space," "space exploration," "space travel."

In effect, elegant variation shows a certain type of relation between words.`,
      },
      {
        title: 'Three-Step Recognition Strategy',
        text: `Step 1 — Anchor the First Mention: Locate the expression used when the concept first appears. This is your reference point.

Step 2 — Track the Variations: Circle all subsequent expressions that refer to the same concept using different wording.

Step 3 — Verify Consistency: Substitute each variation back into the first mention's position and check if the meaning holds.

Common variation techniques:
- Synonym substitution
- Hypernym/hyponym replacement (animal → dog)
- Pronoun back-reference (it, this, that, they)
- Descriptive replacement (the tall man → the lawyer)
- Role-shift replacement (the killer → the suspect → the defendant)

SSAT reference questions often ask: "What does the word 'it' refer to in line X?" or "Which of the following refers to the same person described in paragraph 2?"`,
      },
    ],
  },

  // ============================================================
  // UNIT 2: POETRY
  // ============================================================
  {
    id: '2-1', unit: 2, order: 1,
    title: 'Major Components of Poetry', titleCn: 'Major Components of Poetry',
    description: 'Definitions and identification of Line, Stanza, Meter, and Rhyme.',
    estimatedTime: '30 min', exerciseCount: 3, prerequisites: ['1-7'],
    tags: ['Poetry Foundations', 'Structure Identification'],
    learningObjectives: ['Define the four basic components of poetry', 'Count stanzas and lines in any poem', 'Understand meter and rhyme concepts'],
    content: [
      {
        title: 'Four Basic Components',
        text: `Poetry is a form of writing that expresses an idea through highly imaginative language, often in short lines rather than sentences and paragraphs. Nursery rhymes and song lyrics are both examples of very basic poetry. Poems on the SSAT tend to be more complex, and reading this type of poetry can be challenging if you haven't encountered it much before. Don't panic — this section will equip you with all of the tools you need to start understanding poetry!

Instead of sentences and paragraphs, poems use different organizations of words in order to convey ideas in a more imaginative way. Here are the basic components of a poem:

Line: A group of words that take up one line of text on the page. After each line, there is a break and the next line starts below. A line can express a thought, a part of a thought, or focus on one specific image. The lines of a poem can all be the same length, or they can have different lengths.

Stanza: A group of lines in a poem, like a "paragraph" within a poem. Stanzas are set apart from each other by spaces. They are used to group together lines that are somehow related.

Meter: The rhythm made by the pattern of stressed and unstressed syllables in the words in each of its lines. Not every poem has a meter, and the SSAT does not frequently ask about meter.

Rhyme: The way that words at the ends of its lines sound similar. For example, "bat" and "pat" both rhyme, as do "show" and "glow," and "time" and "mime." Not every poem rhymes.

The SSAT doesn't frequently ask about the technical elements of a poem's structure, but it is helpful to understand these ideas when you are first reading a poem so you can get a sense of its organization.`,
      },
      {
        title: 'SSAT Poetry Strategy',
        text: `The first question in SSAT poetry passages is often: "How many stanzas does this poem have?" or "How many lines are in each stanza?"

Make it a habit: the moment you see a poem on the test, immediately count the number of stanzas and lines. This 10-second check gives you a structural overview before you even begin reading deeply.`,
      },
    ],
  },
  {
    id: '2-2', unit: 2, order: 2,
    title: 'End Rhyme Scheme', titleCn: 'End Rhyme Scheme',
    description: 'Master aabb couplet rhyme, abab alternating rhyme, and monorhyme, with classic poem examples.',
    estimatedTime: '40 min', exerciseCount: 3, prerequisites: ['2-1'],
    tags: ['Rhyme Analysis', 'Rhyme Scheme'],
    learningObjectives: ['Identify three main rhyme schemes', 'Annotate the rhyme scheme of any poem', 'Understand the relationship between rhyme and emotion'],
    content: [
      {
        title: 'Three Main Rhyme Schemes',
        text: `The most common rhyme schemes:

1) Couplet Rhyme Scheme (aabb):
Adjacent lines rhyme. Suitable for lighthearted or didactic styles.
Example from Henry Wadsworth Longfellow's "The Arrow and the Song":
I shot an arrow into the air, (a)
It fell to earth, I knew not where; (a)
For, so swiftly it flew, the sight (b)
Could not follow it in its flight. (b)

2) Alternating Rhyme Scheme (abab):
Every other line rhymes. Suitable for narrative or lyrical styles.
Example from Alfred Tennyson's "Crossing the Bar":
Sunset and evening star, (a)
And one clear call for me! (b)
And may there be no moaning of the bar, (a)
When I put out to sea, (b)

3) Monorhyme:
The same rhyme is used throughout the stanza.
Example from Robert Frost's "Stopping by Woods on a Snowy Evening":
The woods are lovely, dark and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`,
      },
      {
        title: 'Internal Rhyme',
        text: `Internal Rhyme (行间韵): Rhyme occurring within the same line, adding musical texture.

Example:
The splendour falls on castle walls
And snowy summits old in story
The long light shakes across the lakes
And the wild cataract leaps in glory.

Here, "falls" and "walls" rhyme within the first line, and "shakes" and "lakes" within the third, creating an echoing effect that mirrors the poem's theme of reverberating sound.`,
      },
    ],
  },
  {
    id: '2-3', unit: 2, order: 3,
    title: 'Alliteration', titleCn: 'Alliteration',
    description: 'Definition, identification, and rhetorical effect analysis of alliteration.',
    estimatedTime: '20 min', exerciseCount: 2, prerequisites: ['2-2'],
    tags: ['Rhetorical Devices'],
    learningObjectives: ['Identify alliteration in poetry', 'Analyze the rhetorical effects of alliteration'],
    content: [
      {
        title: 'Definition and Examples',
        text: `Alliteration (头韵) is when several words in a poem begin with the same consonant sound.

Example:
For winter's rains and ruins are over,
And all the season of snows and sins;
The day dividing lover and lover,
The light that loses, the night that wins.

Notice how "rains and ruins" and "snows and sins" and "light that loses" create chains of identical initial consonants.

Sample poem for structural analysis (Robin Hood ballad):
Both gentlemen, and yeomen bold,
Or whatever you are,
To have a stately story told
Attention now prepare:
It is a tale of Robin Hood
Which I to you will tell;
Which, being rightly understood,
I know will please you well.
This Robin (so much talked on)
Was once a man of fame,
Knighted earl of Huntington,
Lord Robin Hood by name.`,
      },
      {
        title: 'Rhetorical Effects and SSAT Tips',
        text: `Rhetorical effects of alliteration:

- Rhythm and musicality: Successive identical consonants create a musical, memorable quality.
- Emphasis: Words marked by alliteration receive extra attention from the reader.
- Atmosphere: S-sounds → quietness, secrecy; B/P-sounds → force, explosiveness; L-sounds → liquidity, smoothness.

SSAT common question: "Which line contains alliteration?" Identification key: look for two or more consecutive words that begin with the same consonant sound.`,
      },
    ],
  },
  {
    id: '2-4', unit: 2, order: 4,
    title: 'Poetic Forms', titleCn: 'Poetic Forms',
    description: 'Sonnet, limerick, blank verse, free verse, and onomatopoeia — distinguishing formal structures.',
    estimatedTime: '40 min', exerciseCount: 3, prerequisites: ['2-3'],
    tags: ['Form Identification', 'Style Recognition'],
    learningObjectives: ['Distinguish among major poetic forms', 'Understand sonnet structure in depth', 'Determine poetic style from formal features'],
    content: [
      {
        title: 'Sonnet (十四行诗)',
        text: `Originated in medieval Italy with Petrarch as the key representative. The Petrarchan sonnet: an octave (abba abba) posing a question + a sestet (cdcdcd or cdecde) answering it. Later introduced to England by Thomas Wyatt with iambic pentameter.

Spenserian sonnet: abab bcbc cdcd ee.
Shakespearean (English) sonnet: abab cdcd efef gg.

Shakespeare's Sonnet 60:
Like as the waves make towards the pebbled shore,
So do our minutes hasten to their end;
Each changing place with that which goes before,
In sequent toil all forwards do contend,
Nativity, once in the main of light,
Crawls to maturity, wherewith being crowned,
Crooked eclipses 'gainst his glory fight,
And time that gave doth now his gift confound.
Time doth transfix the flourish set on youth
And delves the parallels in beauty's brow,
Feeds on the rarities of nature's truth,
And nothing stands but for his scythe to mow.
And yet to times in hope my verse shall stand,
Praising thy worth, despite his cruel hand.

Key SSAT identifier for a sonnet: 14 lines.`,
      },
      {
        title: 'Limerick, Blank Verse, and Free Verse',
        text: `Limerick (打油诗): Usually humorous or nonsense verse, five lines with aabba rhyme scheme, often using anapestic meter.
Example:
There was a young lady of Nigger
Who smiled as she rode on a tiger;
They returned from the ride
With the lady inside,
And the smile on the face of the tiger.

Blank Verse (无韵体): Unrhymed iambic pentameter.
Example from William Wordsworth's "There Was a Boy":
Across the watery bale, and shout again,
Responsive to his call,—with quivering peals,
And long halloos, and screams, and echoes loud.
Redoubled and redoubled: concourse wild
Of jocund din!...

Free Verse (自由诗): Modern form with varying line lengths, no regular rhyme or meter, focusing on imagery and emotion. Walt Whitman's "Leaves of Grass" uses this form.
Example: Roger McGough's "40-Love" (middle-aged couple playing tennis, with the net between them).

Onomatopoeia (拟声): Words whose sounds imitate real-world sounds (buzz, hiss, splash, murmur, whisper).`,
      },
    ],
  },
  {
    id: '2-5', unit: 2, order: 5,
    title: 'Figurative Language', titleCn: 'Figurative Language',
    description: 'Imagery, Symbol, Simile, Metaphor, and Personification — with a common symbols reference table.',
    estimatedTime: '50 min', exerciseCount: 5, prerequisites: ['2-4'],
    tags: ['Rhetorical Devices', 'Imagery Analysis'],
    learningObjectives: ['Distinguish among five types of figurative language', 'Interpret symbolic meanings in poetry', 'Use the common symbols reference table'],
    content: [
      {
        title: 'Five Types of Figurative Language',
        text: `Within a poem, the poet often uses figurative language to add a heightened meaning. Figurative language uses a word's connotation, or the feelings and symbols associated with a word, rather than just its literal meaning.

1. Imagery: Uses descriptive words from the five senses to create a vivid image in the reader's mind. E.g., describing the sun as "a fiery blaze of gold."

2. Symbol: A word that represents another concept or idea within a poem. E.g., "spring" may symbolize rebirth or renewal.

3. Simile: Compares two things using "like" or "as." E.g., a man's laugh is "like a thunderclap."

4. Metaphor: Compares two things without using "like" or "as." E.g., the man's laugh "is a thunderclap."

5. Personification: Gives human characteristics to animals, objects, or ideas. E.g., "winter jealously steals the world's warmth."`,
      },
      {
        title: 'Common Symbols in Poetry',
        text: `| Symbol | Meaning |
|---|---|
| sleep | death |
| dreams | fate, the future |
| light (sun, stars, moon) | good, hope, freedom |
| dark | evil, magic, the unknown |
| spring | youth, birth, life |
| winter | death, dying, old age |
| owl | wisdom |
| dove | peace |
| rose | love, beauty |
| crown | wealth, royalty |
| ring | love, commitment |
| journey | life, spiritual growth |
| river | time, the flow of life |
| garden | paradise, innocence |`,
      },
      {
        title: 'Analysis Example: Walter de la Mare, "Silver"',
        text: `Slowly, silently, now the moon
Walks the night in her silver shoon;
This way, and that, she peers, and sees
Silver fruit upon silver trees;
One by one the casements catch
Her beams beneath the silvery thatch;
Couched in his kennel, like a log,
With paws of silver sleeps the dog;
From their shadowy cote the white breasts peep
Of doves in a silver-feathered sleep;
A harvest mouse goes scampering by,
With silver claws and a silver eye;
And moveless fish in the water gleam,
By silver reeds in a silver stream.

Analysis:
- Imagery: The silver moonlight creates a quiet, ethereal visual image throughout.
- Personification: The moon "walks" and "peers" — given human actions.
- Simile: The dog sleeps "like a log."
- Symbol: Silver → tranquility, mystery, otherworldliness.

SSAT common question: Identify which line uses simile/metaphor/personification and explain its effect.`,
      },
    ],
  },
  {
    id: '2-6', unit: 2, order: 6,
    title: 'Poetic Vocabulary', titleCn: 'Archaic & Poetic Vocabulary',
    description: '80+ high-frequency archaic English vocabulary items across 7 parts of speech. Essential for breaking through SSAT poetry barriers.',
    estimatedTime: '40 min', exerciseCount: 2, prerequisites: ['2-5'],
    tags: ['Archaic English', 'Vocabulary Building'],
    learningObjectives: ['Master 80+ high-frequency archaic and poetic terms', 'Quickly translate archaic English poetry into modern English'],
    content: [
      {
        title: 'Category Overview',
        text: `Poetry often uses archaic or elevated vocabulary. Knowing these terms is essential for understanding classic English poetry.

Nouns: array (clothes), babe (baby), bane (poison, mischief), billow (wave), bliss (happiness), bower (dwelling), brine (ocean, tears), brow (forehead), chanticleer (cock), charger (horse), dale (valley), foe/foeman (enemy), fere (friend), glebe (earth, field), goblet (cup), gore (blood), grot (cave), guile (deceit), ire (anger), ken (perception), maid (girl), main (sea or ocean), marge (margin), mart (market), mead (meadow), meed (reward), might (strength, power), morn (morning), number (verse or metre), nuptials (marriage), poesy (poetry), quest (search), realm (kingdom), scribe (writer), sire (father), spouse (wife), steed (horse), swain (peasant), sward (grass), swine (pig), thrall (bondage), tilth (agriculture), troth (veracity or faithfulness), vale (valley), victor (conqueror), weal (welfare), woe (sorrow or misery), yeoman (peasant, farmer).

Adjectives: aweary (weary), baleful (pernicious), beauteous (beautiful), bootless (unprofitable), bosky (wooded), clamant (noisy), darksome (dark), dauntless (brave), dire (dreadful), dread (dreadful), drear (dreary), fair (beautiful), fond (foolish), forlorn (distressed), hallowed (holy), hapless (unhappy), ingrate (ungrateful), intrepid (brave), jocund (merry), joyless (unhappy), lone/lonesome (lonely), lovesome (lovely), lowly (low or humble), murky (grim), mute (silent), quenchless (inextinguishable), rapt (delighted), recreant (unfaithful), sequestered (retired, lonely), stilly (still), sylvan (woody), uncouth (unusual), wrathful (angry).

Adverbs: amain (violently, suddenly), anon (soon), erst (formerly), full (very), haply (perhaps), hard by (close or very near), natheless (nevertheless), nigh (almost), right (very, precisely), scantly (scantily), scarce (scarcely), sore (sorely), whilom (formerly).

Verbs: behold (see), brook (bear, tolerate), cleave (cling), cumber (distress, trouble), deem (think), fare (walk), hearken (hear, attend), hie (hasten), ken (know), list (listen), methink (seem to me), quaff (drink), quoth (said), obscure (darken), slay (kill), smite (strike), sojorn (lodge or dwell), speed (hasten), tarry (remain), trow (believe), vanquish (conquer), wax (grow).

Pronouns: aught (anything), naught (nothing), thou (you, nominative), thee (you, objective), thy (your), thine (your, before vowel or h), yonder/yon (that), ye (you, plural).

Conjunctions: albeit (although), ere (before).

Prepositions: anent (concerning), amidst (among), athwart (across), betwixt (between).`,
      },
      {
        title: 'Memory Strategy',
        text: `Use "contextual memorization" rather than rote memorization:

1. For each archaic word you learn, find a line of poetry that contains it.
2. Practice rewriting that line into modern English.
3. Use flashcards for daily review (recommended: 10 words per day).

Example: "I doth protest too much" → "I do protest too much"
Example: "Thou art more lovely and more temperate" → "You are more lovely and more temperate"

This method encodes the word within a meaningful context, making recall far more reliable on test day.`,
      },
    ],
  },
  {
    id: '2-7', unit: 2, order: 7,
    title: 'Poetic Grammar', titleCn: 'Poetic Grammar (Archaic)',
    description: 'Morphology (-th/-st verb endings) and syntax (inversion/elision). The core breakthrough for understanding complex poetic sentences.',
    estimatedTime: '45 min', exerciseCount: 4, prerequisites: ['2-6'],
    tags: ['Grammar', 'Complex Sentences'],
    learningObjectives: ['Identify and translate -th/-st verb endings', 'Restore inverted poetic sentences to normal order', 'Fill in omitted grammatical elements'],
    content: [
      {
        title: 'Morphology: Archaic Verb Forms',
        text: `1) Verbs:

Third person singular present: verb + -th (liveth, knoweth, hath).
E.g., "She maketh answer to the clock." (Coleridge)
→ "She makes answer to the clock."

Second person singular present/past: verb + -st (livest, knowest, sayst, dost, livedst, knewest, saidst, didst, hadst).
Also shalt, wilt, art (thou art = you are), wert/wast (thou wert = you were).
E.g., "Nor care what land thou bear'st me to." (Byron)
→ "Nor care what land you bear me to."

Archaic past tense and past participle forms:
wrought (worked), bade (bid), begat (begot), clove (cleft), crew (crowed), drave (drove), spake (spoke), throve (thrived), clomb (climbed), clad (clothed), bare (bore), brake (broke), lockt (locked), sate (sat).

E.g., "And hark, again, the crowing cock, How drowsily it crew." (Coleridge)
→ "And listen, again, the crowing cock, How drowsily it crowed."

2) Adjectives used as nouns:
"the breezy blue" (= sky), "the dreaded vast" (= expanse), "the green" (= grass).

3) Adverbs without -ly:
"They praised him soft and low." (Tennyson)
→ "They praised him softly and lowly."`,
      },
      {
        title: 'Syntax: Inversion and Omission',
        text: `Word order (inverted for meter/rhyme):

1. Adjective after noun:
"Daisies pied and violets blue." (Shakespeare)
→ "Pied daisies and blue violets."

2. Subject after predicate:
"And in silence prayeth she." (Coleridge)
→ "And she prayeth in silence."

3. Object before verb:
"And she me caught in her arms long and small." (Wyatt)
→ "And she caught me in her arms long and small."

Omission/Elision:

1. Omission of article: "Creeping like (a) snail unwillingly to school..."
2. Omission of noun/pronoun: "(He) who steals my purse steals trash."
3. Omission of finite verb: "Happy (is) the man, whose wish and care..."
4. Omission of preposition: "Despair and anguish fled (from) the struggling soul."
5. Omission of relative pronoun "that": "'Tis distance (that) lends enchantment to the view."`,
      },
      {
        title: 'Elision of Vowels and Syllables',
        text: `Common elisions in poetry:

heav'n (heaven), 'tis (it is), 'twas (it was), o'er (over), 'gainst (against), th' (the), i' (in), 'twixt (betwixt), e'en (even), 'neath (beneath), 'mong (among), mem'ries (memories).

Also verb past -ed pronounced as -'d: lov'd, turn'd.

E.g., "E'en from the tomb the voice of Nature cries, E'en in our ashes live their wonted fires." (Gray)
→ "Even from the tomb the voice of Nature cries, Even in our ashes live their accustomed fires."

When encountering a line of archaic poetry on the SSAT, apply this three-step translation method:
1. Restore elided syllables (o'er → over, 'tis → it is).
2. Normalize verb endings (-th → -s, -st → modern you-form).
3. Rearrange inverted word order to modern SVO structure.`,
      },
    ],
  },
]
