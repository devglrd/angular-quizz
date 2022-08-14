import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  END_QUIZZ,
  EndQuizz,
  GET_BEST_SCORE,
  GetBestScore,
  GetQuizzCompleted, IsNewBestScore,
  SetBestScore,
  START_QUIZZ,
  StartQuizz
} from "./global.actions";
import {HomeService} from "../../modules/home/services";
import {EMPTY, Observable, of} from "rxjs";
import {QuizzService} from "../../modules/quizz/services/quizz/quizz.service";

@Injectable()
export class GlobalEffects {

  getBestScore$ = createEffect(() => this.actions$.pipe(
    ofType<GetBestScore>(GET_BEST_SCORE),
    mergeMap(() => {
      const bestScore = localStorage.getItem('BEST_SCORE');
      this.store.dispatch(new SetBestScore(bestScore ?? 0))
      return new Observable<any>();
    })
  ));

  startQuizz$ = createEffect(() => this.actions$.pipe(
    ofType<StartQuizz>(START_QUIZZ),
    mergeMap(() => this.quizzService.getQuizz().pipe(
      map((data: any) => new GetQuizzCompleted(data)),
      catchError(() => EMPTY
      )
    ))
  ));

  endQuizz$ = createEffect(() => this.actions$.pipe(
    ofType<EndQuizz>(END_QUIZZ),
    mergeMap(() => {
      const score = localStorage.getItem('SCORE');
      const bestScore = localStorage.getItem('BEST_SCORE')
      if (!bestScore && score) {
        localStorage.setItem('BEST_SCORE', score);
        this.store.dispatch(new SetBestScore(score))
        return new Observable<any>();
      }
      if (score && bestScore) {
        if (score > bestScore) {
          localStorage.setItem('BEST_SCORE', score);
          this.store.dispatch(new IsNewBestScore(score))
          this.store.dispatch(new SetBestScore(score))
          return new Observable<any>();
        }
      }
      return new Observable<any>();
    })
  ));


  constructor(private quizzService: QuizzService, private actions$: Actions, private store: Store<any>) {
  }


}
