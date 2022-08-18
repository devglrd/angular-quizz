import {ActionReducerMap} from '@ngrx/store';

import * as fromGlobal from './global/global.reducer';
import * as fromQuizz from './quizz/quizz.reducer';
import * as fromHome from './home/home.reducer';

export interface IAppState {
  global: fromGlobal.IState,
  quizz: fromQuizz.IState,
  home: fromHome.IState
}

export const REDUCERS: ActionReducerMap<any> = {
  global: fromGlobal.globalReducer,
  quizz: fromQuizz.quizzReducer,
  home: fromHome.homeReducer
};
