import {IAppState} from "../reducer";
import {createSelector} from "@ngrx/store";
import {IState} from "./quizz.reducer";

export const selectQuizz = (state: IAppState) => state.quizz;

export const getLoading = () => createSelector(
  selectQuizz,
  (state: IState) => state.isLoading
)

export const getCurrentQuestion = () => createSelector(
  selectQuizz,
  (state: IState) => state.questions[state.current]
)

export const getCurrent = () => createSelector(
  selectQuizz,
  (state: IState) => state.current + 1
)
export const numberQuestion = () => createSelector(
  selectQuizz,
  (state: IState) => state.questions.length
)

export const getAnswers = () => createSelector(selectQuizz,
  (state: IState) => state.answers)


export const getScore = () => createSelector(selectQuizz, (state: IState) => state.score)

export const getIsNewBestScore = () => createSelector(selectQuizz, (state: IState) => state.newBestScore)
