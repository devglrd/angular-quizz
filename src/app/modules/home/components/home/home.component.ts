import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subject, takeUntil} from "rxjs";
import {IAppState} from "../../../../store/reducer";
import {SetBestScore} from "../../../../store/global/global.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public loading = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<IAppState>, private router:Router) {
  }

  ngOnInit(): void {
    this.store.select('global').pipe(takeUntil(this.destroy$)).subscribe((data) => {
      setTimeout(() => {
        this.loading = false;
      }, 500)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  click() {
    this.router.navigate([ 'quizz'])
  }
}



