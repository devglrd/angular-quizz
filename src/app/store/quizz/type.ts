
export interface IQuestion {
  label: string;
  answer: string;
  choices: string[];
  answers: string[];
  answerType: AnswerEnum;
}

export interface IAnswer {
  label: string,
  valid: boolean,
}

export enum AnswerEnum {
  choice = 'choice',
  text = 'text',
  multipleChoice = 'multiple-choice'
}

export const BEST_SCORE = 'BEST_SCORE'
