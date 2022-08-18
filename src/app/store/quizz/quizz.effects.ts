import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {endQuizz, endQuizzCompleted, getQuizz, getQuizzCompleted} from "./quizz.actions";
import {catchError, map, switchMap, withLatestFrom} from "rxjs/operators";
import {QuizzService} from "../../modules/quizz/services";
import * as QuizzActions from './quizz.actions'
import {Observable, of} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../reducer";
import {getScore} from "./quizz.selectors";
import {IQuestion} from "./type";

@Injectable()
export class QuizzEffects {

  getQuestions$ = createEffect(() => this.actions$.pipe(
    ofType(getQuizz),
    switchMap(() => {
      return this.quizzService.getQuizz().pipe(
        map(
          (questions: IQuestion[]) => QuizzActions.getQuizzCompleted({questions})
        ),
        catchError((err) => of(QuizzActions.getQuizzError({error: err.message})))
      )
    })
  ))

  isNewBestScore$ = createEffect(() => this.actions$.pipe(
    ofType(endQuizz),
    withLatestFrom(this.store.select(getScore())),
    switchMap(([action, options]) => {
      return this.quizzService.isNewtBestScore(options).pipe(
        map(
          () => QuizzActions.endQuizzCompleted()
        )
      )
    })
  ))

  constructor(private store: Store<IAppState>, private actions$: Actions, private quizzService: QuizzService) {
  }
}
