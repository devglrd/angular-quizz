import {ActionReducerMap} from '@ngrx/store';

import * as fromGlobal from './global/global.reducer';

export interface IAppState {
  global: fromGlobal.IState;
}

export const REDUCERS: ActionReducerMap<any> = {
  global: fromGlobal.reducer,
};
