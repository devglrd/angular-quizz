import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as HomeActions from './home.actions'
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {HomeService} from "../../modules/home/services";
import {of} from "rxjs";

@Injectable()
export class HomeEffects {
  getScore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.getScore),
      switchMap(() => {
        return this.homeService.getScore()
          .pipe(
            map(
              (score: number) => HomeActions.getScoreCompleted({score}),
              catchError((error) => of(HomeActions.getScoreFailed({error: error.message})))
            )
          )
      })
    )
  )

  constructor(private actions$: Actions, private homeService: HomeService) {
  }
}
