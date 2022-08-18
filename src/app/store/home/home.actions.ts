import {createAction, props} from "@ngrx/store";

export const getScore = createAction('[Home] Get Best Score');
export const getScoreCompleted = createAction('[Home] Get Best Score Completed', props<{score:number}>());
export const getScoreFailed = createAction('[Home] Get Score Failed', props<{error:string}>());
