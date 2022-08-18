import {createReducer} from "@ngrx/store";

const INITIAL_STATE: IState = {};


export interface IState {
}

export const globalReducer = createReducer(INITIAL_STATE )
