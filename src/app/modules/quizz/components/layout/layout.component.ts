import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../../../store/reducer";
import {Observable, Subject, takeUntil} from "rxjs";
import * as QuizzActions from "../../../../store/quizz/quizz.actions";
import {getCurrent, getLoading, numberQuestion} from "../../../../store/quizz/quizz.selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public loading$: Observable<any>;
  public total$: Observable<any>;
  public current$: Observable<any>;

  public timer = 10;

  private interval: any;

  constructor(private router: Router,private store: Store<IAppState>) {
    this.loading$ = this.store.pipe(select(getLoading()))
    this.total$ = this.store.pipe(select(numberQuestion()))
    this.current$ = this.store.pipe(select(getCurrent()))
  }

  ngOnInit(): void {
    this.store.dispatch(QuizzActions.getQuizz());
    this.interval = setInterval(() => {
      if (this.timer < 1) {
        this.store.dispatch(QuizzActions.endQuizz());
        this.router.navigateByUrl('/results')
        this.clear();
      }
      this.timer--;
    }, 1000)
  }

  clear() {
    clearInterval(this.interval);
    this.timer = 0;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
