import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../../../store/reducer";
import {getLoading, getScore} from "../../../../store/home/home.selectors";

@Component({
  selector: 'app-best-score',
  templateUrl: './best-score.component.html',
  styleUrls: ['./best-score.component.scss']
})
export class BestScoreComponent implements OnInit, OnDestroy {
  public loading$: Observable<any>;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public score$: Observable<number>;

  constructor(private store: Store<IAppState>) {
    this.loading$ = this.store.pipe(select(getLoading()))
    this.score$ = this.store.pipe(select(getScore()))
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
