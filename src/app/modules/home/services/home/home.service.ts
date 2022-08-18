import {Injectable} from '@angular/core';
import {delay, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private BEST_SCORE = "BEST_SCORE"

  constructor() {
  }

  public getScore() {
    const bestScore = localStorage.getItem(this.BEST_SCORE)
    if (!bestScore) {
      localStorage.setItem(this.BEST_SCORE, '0');
    }
    return of(Number(bestScore)).pipe(delay(200))
  }

}
