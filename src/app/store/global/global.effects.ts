import {mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {GET_BEST_SCORE, GetBestScore, SetBestScore} from "./global.actions";
import {HomeService} from "../../modules/home/services";
import {Observable, of} from "rxjs";

@Injectable()
export class GlobalEffects {

  getBestScore$ = createEffect(() => this.actions$.pipe(
    ofType<GetBestScore>(GET_BEST_SCORE),
    mergeMap(() => {
      console.log('ici');
      return new Observable<any>();
    })
  ));

  constructor(private homeService: HomeService, private actions$: Actions, private store: Store<any>) {
  }


}
