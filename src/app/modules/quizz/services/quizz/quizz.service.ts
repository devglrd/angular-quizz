import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/reducer";
import * as QuizzActions from '../../../../store/quizz/quizz.actions'
import {BEST_SCORE} from "../../../../store/quizz/type";
@Injectable({
  providedIn: 'root'
})
export class QuizzService {


  constructor(private httpService: HttpClient, private store: Store<IAppState>) {
  }

  public getQuizz(): Observable<any> {
    return this.httpService.get('https://storage.googleapis.com/netwo-public/quizz.json')
  }

  public isNewtBestScore(value: number): Observable<any> {
    const bestScore = localStorage.getItem(BEST_SCORE)
    if (Number(bestScore) < value) {
      localStorage.setItem(BEST_SCORE, value.toString());
      return of(this.store.dispatch(QuizzActions.newBestScore()))
    }
    return of(bestScore)
  }
}
