import {createReducer, on} from "@ngrx/store";
import * as QuizzActions from './quizz.actions';

export const initialState: IState = {
  isLoading: false,
  questions: [],
  answers: [],
  newBestScore: false,
  current: 0,
  error: null,
  score: 0,
}

export interface IState {
  isLoading: boolean;
  score: number;
  questions: IQuestion[];
  answers: any[];
  newBestScore: boolean;
  current: number;
  error: string | null
}

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

export const quizzReducer = createReducer(initialState,
  on(QuizzActions.getQuizz, (state) => ({...state, isLoading: true})),
  on(QuizzActions.getQuizzCompleted, (state, action) => ({
    ...state,
    isLoading: false,
    questions: action.questions,
    answers: [],
    current: 0
  })),
  on(QuizzActions.getQuizzError, (state, action) => ({...state, isLoading: false, error: action.error})),
  on(QuizzActions.nextQuestion, (state, action) => ({
    ...state,
    current: state.current + 1,
    answers: [...state.answers, action.answer]
  })),
  on(QuizzActions.endQuizz, (state) => ({
    ...state,
    score: state.answers.filter((e: IAnswer) => e.valid).length
  })),
  on(QuizzActions.newBestScore, (state) => ({
    ...state, newBestScore: true
  }))
)
