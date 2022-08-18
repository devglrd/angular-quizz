import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../../../store/reducer";
import {getAnswers, getIsNewBestScore, getScore, numberQuestion} from "../../../../store/quizz/quizz.selectors";
import {IAnswer} from "../../../../store/quizz/quizz.reducer";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public history$: Observable<IAnswer[]>
  public score$: Observable<any>;
  public total$: Observable<any>;
  bestScore: string | null = '';
  isNewBestScore$: Observable<any>;
  public emptyQuizz: boolean = false;

  constructor(private store: Store<IAppState>) {
    this.history$ = this.store.pipe(select(getAnswers()))
    this.total$ = this.store.pipe(select(numberQuestion()))
    this.score$ = this.store.pipe(select(getScore()))
    this.isNewBestScore$ = this.store.pipe(select(getIsNewBestScore()))
  }

  ngOnInit(): void {
    this.bestScore = localStorage.getItem('BEST_SCORE') ?? '0'
    this.history$.subscribe((data) => {
      this.emptyQuizz = !data.length
    })
  }

}
