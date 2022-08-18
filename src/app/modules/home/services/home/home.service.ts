import {Injectable} from '@angular/core';
import {delay, of} from "rxjs";
import {BEST_SCORE} from "../../../../store/quizz/type";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
  }

  public getScore() {
    const bestScore = localStorage.getItem(BEST_SCORE)
    if (!bestScore) {
      localStorage.setItem(BEST_SCORE, '0');
    }
    return of(Number(bestScore)).pipe(delay(200))
  }

}
