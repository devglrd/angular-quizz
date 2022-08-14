import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private httpService: HttpClient) {
  }


  public getQuizz() {
    return this.httpService.get('https://storage.googleapis.com/netwo-public/quizz.json')
  }

  public getBestScore(){
    return localStorage.getItem('BEST_SCORE')
  }
  public setBestScore(score:string  ){
    return localStorage.setItem('BEST_SCORE', score)

  }
}
