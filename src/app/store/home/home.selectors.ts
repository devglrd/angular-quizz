import {createSelector} from '@ngrx/store';
import {IAppState} from "../reducer";
import {IState} from "./home.reducer";

export const selectHome = (state: IAppState) => state.home;

export const getLoading = () => createSelector(
  selectHome,
  (state: IState) => state.isLoading
);

export const getScore = () => createSelector(selectHome, (state: IState) => state.score)

export const getError = () => createSelector(selectHome, (state: IState) => state.error)
