import {IAction} from "../types";


export const GET_BEST_SCORE = 'GET_BEST_SCORE';
export const SET_BEST_SCORE = 'SET_BEST_SCORE';


export class GetBestScore implements IAction {
  readonly type: string = GET_BEST_SCORE;

  constructor() {
  }
}

export class SetBestScore implements IAction {
  readonly type: string = SET_BEST_SCORE;

  constructor(public payload: any) {
  }
}

export type GlobalActions = GetBestScore | SetBestScore
