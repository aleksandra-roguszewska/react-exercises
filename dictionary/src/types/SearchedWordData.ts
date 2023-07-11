interface License {
  name: string;
  url: string;
}

export interface Phonetic {
  audio: string;
  license: License;
  sourceUrl: string;
  text: string;
}

export interface Definition {
  antonyms: Array<string>;
  definition: string;
  synonyms: Array<string>;
  example?: string;
}

export interface Meaning {
  antonyms: Array<string>;
  definitions: Array<Definition>;
  synonyms: Array<string>;
  partOfSpeech: string;
}

export interface SearchedWordData {
  license: License;
  meanings: Array<Meaning>;
  phonetics: Array<Phonetic>;
  sourceUrls: Array<string>;
  word: string;
  phonetic?: string;
}
