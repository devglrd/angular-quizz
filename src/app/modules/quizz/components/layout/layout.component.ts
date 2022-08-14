import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/reducer";
import {EndQuizz, StartQuizz} from "../../../../store/global/global.actions";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public timer = 0;
  interval: any;
  public quizz: any;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new StartQuizz());

    this.store.select('global').pipe(takeUntil(this.destroy$)).subscribe(({quizz}) => {
      this.quizz = quizz;

      if (quizz.start) {
        this.timer = quizz.timer;
        this.interval = setInterval(() => {
          this.timer--;
          if (!this.timer) {
            this.store.dispatch(new EndQuizz(quizz.score))
            this.clear()
            this.timer = 0;
          }
        }, 1000)
      }
    })
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
