import * as GlobalActions from './global.actions';

export enum IQuizzState {
  WAITING = 'WAITING',
  START = 'START',
  RESULTS = 'RESULTS'
}

const INITIAL_STATE: IState = {
  bestScore: localStorage.getItem('BEST_SCORE') ?? '0',
  isNewBestScore : false,
  quizz: {
    timer: 120,
    state: IQuizzState.WAITING,
    start: false,
    current: 0,
    total: 0,
    score: 0,
    questions: []
  }
};

export function reducer(state: IState = INITIAL_STATE, action: GlobalActions.GlobalActions): IState {

  switch (action.type) {

    case GlobalActions.GET_BEST_SCORE:
      return {...state};

    case GlobalActions.IS_NEW_BEST_SCORE:
      return {...state, isNewBestScore: true};

    case GlobalActions.END_QUIZZ:
      return handleEndQuizz(state, action as GlobalActions.EndQuizz);

    case GlobalActions.NEXT_QUESTION:
      return {...state, quizz: {...state.quizz, current: state.quizz.current + 1}};

    case GlobalActions.SET_BEST_SCORE:
      return handleSetBestScore(state, action as GlobalActions.SetBestScore);

    case GlobalActions.ADD_SCORE:
      return handleAddScore(state);

    case GlobalActions.GET_QUIZZ_COMPLETED:
      return handleGetQuizzCompleted(state, action as GlobalActions.SetBestScore);

    default:
      return state;
  }
}

function handleEndQuizz(state: any, {payload}: GlobalActions.EndQuizz) {
  console.log(payload);
  localStorage.setItem('SCORE', payload)
  return {...state, quizz: {...state.quizz, state: IQuizzState.RESULTS, start: false}};
}

function handleSetBestScore(state: any, {payload}: GlobalActions.SetBestScore) {
  return {...state, bestScore: payload};
}

function handleAddScore(state: any) {
  return {...state, quizz: {...state.quizz, score: state.quizz.score + 1}};

}

function handleGetQuizzCompleted(state: any, {payload}: GlobalActions.GetQuizzCompleted) {
  return {
    ...state,
    quizz: {
      ...state.quizz,
      state: IQuizzState.START,
      total: payload.length,
      start: true,
      questions: [...payload],
      timer: 120
    }
  }
}

export interface IState {
  bestScore: string;
  isNewBestScore:boolean;
  quizz: {
    timer: number
    score: number
    state: IQuizzState
    total: number
    start: boolean
    current: number
    questions: []
  }
}
