import {createReducer, on} from "@ngrx/store";
import * as HomeActions from './home.actions';

export const initialState: IState = {
  isLoading: false,
  score: 0,
  error: null
}

export interface IState {
  isLoading: boolean;
  score: number;
  error: string | null;
}


export const homeReducer = createReducer(initialState,
  on(HomeActions.getScore, (state) => ({...state, isLoading: true})),
  on(HomeActions.getScoreCompleted, (state, actions) => ({...state, isLoading: false, score: actions.score})),
  on(HomeActions.getScoreFailed, (state, actions) => ({...state, isLoading: false, error: actions.error})),
)
