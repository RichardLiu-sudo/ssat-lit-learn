export interface VocabWord {
  word: string
  modern: string
  pos: string
  example?: string
}

export const vocabWords: VocabWord[] = [
  // Pronouns
  { word: 'thou', modern: 'you (subject)', pos: 'Pronoun', example: 'Thou art more lovely.' },
  { word: 'thee', modern: 'you (object)', pos: 'Pronoun', example: 'I love thee.' },
  { word: 'thy', modern: 'your', pos: 'Pronoun', example: 'Thy beauty is timeless.' },
  { word: 'thine', modern: 'yours', pos: 'Pronoun', example: 'This heart is thine.' },
  { word: 'ye', modern: 'you (plural)', pos: 'Pronoun', example: 'O ye of little faith.' },

  // Verbs
  { word: 'doth', modern: 'does', pos: 'Verb', example: 'She doth teach the torches.' },
  { word: 'hath', modern: 'has', pos: 'Verb', example: 'He hath a good sword.' },
  { word: 'art', modern: 'are (with thou)', pos: 'Verb', example: 'Thou art the man.' },
  { word: 'wilt', modern: 'will (with thou)', pos: 'Verb', example: 'Wilt thou go?' },
  { word: 'shalt', modern: 'shall (with thou)', pos: 'Verb', example: 'Thou shalt not kill.' },
  { word: 'dost', modern: 'do (with thou)', pos: 'Verb', example: 'Why dost thou weep?' },
  { word: 'spake', modern: 'spoke', pos: 'Verb', example: 'Thus spake the king.' },
  { word: 'brake', modern: 'broke', pos: 'Verb', example: 'He brake the silence.' },
  { word: 'bare', modern: 'bore', pos: 'Verb', example: 'She bare a son.' },
  { word: 'clomb', modern: 'climbed', pos: 'Verb', example: 'He clomb the mountain.' },
  { word: 'wrought', modern: 'worked / made', pos: 'Verb', example: 'What hath God wrought?' },
  { word: 'quoth', modern: 'said', pos: 'Verb', example: 'Quoth the Raven, "Nevermore."' },
  { word: 'hark', modern: 'listen', pos: 'Verb', example: 'Hark! The herald angels sing.' },

  // Adverbs
  { word: 'ere', modern: 'before', pos: 'Adverb', example: 'Ere the sun sets.' },
  { word: 'hither', modern: 'here (to this place)', pos: 'Adverb', example: 'Come hither, child.' },
  { word: 'thither', modern: 'there (to that place)', pos: 'Adverb', example: 'Go thither at once.' },
  { word: 'whence', modern: 'from where', pos: 'Adverb', example: 'Whence came this light?' },
  { word: 'thence', modern: 'from there', pos: 'Adverb', example: 'Thence he departed.' },
  { word: 'whither', modern: 'to where', pos: 'Adverb', example: 'Whither goest thou?' },
  { word: 'oft', modern: 'often', pos: 'Adverb', example: 'Oft have I wondered.' },
  { word: 'nigh', modern: 'near', pos: 'Adverb', example: 'The end is nigh.' },
  { word: 'anon', modern: 'soon / at once', pos: 'Adverb', example: 'I will return anon.' },
  { word: 'perchance', modern: 'perhaps', pos: 'Adverb', example: 'Perchance to dream.' },
  { word: 'alas', modern: 'unfortunately', pos: 'Adverb', example: 'Alas, poor Yorick!' },
  { word: 'ay', modern: 'always', pos: 'Adverb', example: 'I will ay love thee.' },

  // Adjectives
  { word: 'fair', modern: 'beautiful / just', pos: 'Adjective', example: 'O fair maiden!' },
  { word: 'bonny', modern: 'pretty / attractive', pos: 'Adjective', example: 'My bonny lass.' },
  { word: 'comely', modern: 'attractive / proper', pos: 'Adjective', example: 'A comely youth.' },
  { word: 'wan', modern: 'pale / sickly', pos: 'Adjective', example: 'Her wan face.' },
  { word: 'wanton', modern: 'unrestrained / playful', pos: 'Adjective', example: 'Wanton winds.' },
  { word: 'fell', modern: 'fierce / cruel', pos: 'Adjective', example: 'A fell beast.' },
  { word: 'goodly', modern: 'fine / excellent', pos: 'Adjective', example: 'A goodly reward.' },

  // Nouns
  { word: 'maiden', modern: 'young woman', pos: 'Noun', example: 'The maiden fair.' },
  { word: 'foe', modern: 'enemy', pos: 'Noun', example: 'He faced his foe.' },
  { word: 'steed', modern: 'horse', pos: 'Noun', example: 'His noble steed.' },
  { word: 'vale', modern: 'valley', pos: 'Noun', example: 'In yonder vale.' },
  { word: 'slumber', modern: 'sleep', pos: 'Noun', example: 'From thy slumber wake.' },
  { word: 'woe', modern: 'sorrow / grief', pos: 'Noun', example: 'A tale of woe.' },
  { word: 'tidings', modern: 'news', pos: 'Noun', example: 'Glad tidings!' },
  { word: 'bower', modern: 'dwelling / chamber', pos: 'Noun', example: 'In her bower.' },
  { word: 'morrow', modern: 'morning / tomorrow', pos: 'Noun', example: 'Good morrow!' },
  { word: 'kin', modern: 'family / relatives', pos: 'Noun', example: 'Harken, my kin.' },
  { word: 'shoon', modern: 'shoes', pos: 'Noun', example: 'Her silver shoon.' },

  // Conjunctions
  { word: 'lest', modern: 'for fear that', pos: 'Conjunction', example: 'Lest we forget.' },
  { word: 'albeit', modern: 'although', pos: 'Conjunction', example: 'Albeit he was tired.' },
  { word: 'nay', modern: 'no', pos: 'Conjunction', example: 'Nay, I shall not.' },
  { word: 'yea', modern: 'yes / indeed', pos: 'Conjunction', example: 'Yea, verily.' },
  { word: 'forsooth', modern: 'in truth', pos: 'Conjunction', example: 'Forsooth, it is so.' },

  // Prepositions
  { word: 'o\'er', modern: 'over', pos: 'Preposition', example: 'O\'er the hills.' },
  { word: '\'neath', modern: 'beneath', pos: 'Preposition', example: '\'Neath the stars.' },
  { word: '\'mid', modern: 'amid', pos: 'Preposition', example: '\'Mid the flowers.' },
  { word: '\'twixt', modern: 'between', pos: 'Preposition', example: '\'Twixt love and duty.' },
  { word: 'unto', modern: 'to', pos: 'Preposition', example: 'Speak unto me.' },
  { word: 'betwixt', modern: 'between', pos: 'Preposition', example: 'Betwixt two worlds.' },
  { word: '\'gainst', modern: 'against', pos: 'Preposition', example: '\'Gainst the wall.' },
  { word: '\'twas', modern: 'it was', pos: 'Preposition', example: '\'Twas a dark night.' },
  { word: 'e\'en', modern: 'even', pos: 'Preposition', example: 'E\'en so.' },
]
