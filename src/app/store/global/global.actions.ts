import {IAction} from "../types";


export const GET_BEST_SCORE = 'GET_BEST_SCORE';
export const SET_BEST_SCORE = 'SET_BEST_SCORE';
export const START_QUIZZ = 'START_QUIZZ';
export const GET_QUIZZ_COMPLETED = 'GET_QUIZZ_COMPLETED'
export const ADD_SCORE = 'ADD_SCORE';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const END_QUIZZ = 'END_QUIZZ';
export const IS_NEW_BEST_SCORE = 'IS_NEW_BEST_SCORE';

export class IsNewBestScore implements IAction {
  readonly type: string = IS_NEW_BEST_SCORE;

  constructor(public payload : any) {
  }
}

export class EndQuizz implements IAction {
  readonly type: string = END_QUIZZ;

  constructor(public payload : any) {
  }
}

export class GetBestScore implements IAction {
  readonly type: string = GET_BEST_SCORE;

  constructor() {
  }
}

export class NextQuestion implements IAction {
  readonly type: string = NEXT_QUESTION;

  constructor() {
  }
}

export class AddScore implements IAction {
  readonly type: string = ADD_SCORE;

  constructor() {
  }
}

export class SetBestScore implements IAction {
  readonly type: string = SET_BEST_SCORE;

  constructor(public payload: any) {
  }
}

export class StartQuizz implements IAction {
  readonly type: string = START_QUIZZ;

  constructor() {
  }
}

export class GetQuizzCompleted implements IAction {
  readonly type: string = GET_QUIZZ_COMPLETED;

  constructor(public payload: any) {
  }
}

export type GlobalActions = GetBestScore | SetBestScore | StartQuizz | GetQuizzCompleted | AddScore | NextQuestion | EndQuizz
