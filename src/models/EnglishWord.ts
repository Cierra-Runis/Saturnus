export interface EnglishWord {
  word: string;
  translations: Array<Translation>;
  phrases: Array<Phrase>;
}

export interface Translation {
  types: Array<string>;
  translation: string;
}

export interface Phrase {
  phrase: string;
  translation: string;
}
