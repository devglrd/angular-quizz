import * as GlobalActions from './global.actions';

const INITIAL_STATE: IState = {
  bestScore: 0,
};

export function reducer(state: IState = INITIAL_STATE, action: GlobalActions.GlobalActions): IState {

  switch (action.type) {

    case GlobalActions.GET_BEST_SCORE:
      return {...state};

    case GlobalActions.SET_BEST_SCORE:
      return handleSetBestScore(state, action as GlobalActions.SetBestScore);

    default:
      return state;
  }
}

function handleSetBestScore(state:any, {payload}: GlobalActions.SetBestScore){
  return {...state, bestScore: payload};
}
export interface IState {
  bestScore: number;
}
