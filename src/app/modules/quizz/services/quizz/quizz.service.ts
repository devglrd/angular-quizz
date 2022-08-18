import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IQuestion} from "../../../../store/quizz/quizz.reducer";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/reducer";
import * as QuizzActions from '../../../../store/quizz/quizz.actions'
@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  private BEST_SCORE = 'BEST_SCORE';

  constructor(private httpService: HttpClient, private store: Store<IAppState>) {
  }

  public getQuizz(): Observable<any> {
    return this.httpService.get('https://storage.googleapis.com/netwo-public/quizz.json')
  }

  public isNewtBestScore(value: number): Observable<any> {
    console.log(value);
    const bestScore = localStorage.getItem(this.BEST_SCORE)
    if (Number(bestScore) < value) {
      localStorage.setItem(this.BEST_SCORE, value.toString());
      return of(this.store.dispatch(QuizzActions.newBestScore()))
    }
    return of(bestScore)
  }
}
