import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/reducer";

@Component({
  selector: 'app-best-score',
  templateUrl: './best-score.component.html',
  styleUrls: ['./best-score.component.scss']
})
export class BestScoreComponent implements OnInit, OnDestroy {
  public loading: boolean = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public score ='0';

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.select('global').pipe(takeUntil(this.destroy$)).subscribe(({bestScore}) => {
      this.score = bestScore
      setTimeout(() => {
        this.loading = false;
      }, 300)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
