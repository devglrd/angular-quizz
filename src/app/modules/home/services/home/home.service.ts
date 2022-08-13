import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  getBestScore(){
    return localStorage.getItem('BEST_SCORE')
  }

}
