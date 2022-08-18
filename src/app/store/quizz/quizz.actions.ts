import {createAction, props} from "@ngrx/store";
import {IAnswer, IQuestion} from "./quizz.reducer";

export const getQuizz = createAction('[Quizz] Get Quizz');
export const getQuizzCompleted = createAction('[Quizz] Get Quizz Completed', props<{questions: IQuestion[]}>());
export const getQuizzError = createAction('[Quizz] Get Quizz Errors', props<{error:string}>());
export const nextQuestion = createAction('[Quizz] Go To Next Questions', props<{answer: IAnswer}>());
export const endQuizz = createAction('[Quizz] End Quizz And Calculate Score')
export const endQuizzCompleted = createAction('[Quizz] End Quizz And Calculate Score Completed')
export const newBestScore= createAction('[Quizz] New Best Score')
