import {ActionReducerMap} from '@ngrx/store';

import * as fromQuizz from './quizz/quizz.reducer';
import * as fromHome from './home/home.reducer';

export interface IAppState {
  quizz: fromQuizz.IState,
  home: fromHome.IState
}

export const REDUCERS: ActionReducerMap<any> = {
  quizz: fromQuizz.quizzReducer,
  home: fromHome.homeReducer
};
