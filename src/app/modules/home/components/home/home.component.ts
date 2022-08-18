import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable, Subject, takeUntil} from "rxjs";
import {IAppState} from "../../../../store/reducer";
import {Router} from "@angular/router";
import * as HomeActions from '../../../../store/home/home.actions'
import {getError, getLoading} from "../../../../store/home/home.selectors";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public loading$: Observable<any>;
  public error$: Observable<string | null>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<IAppState>, private router: Router) {
    this.loading$ = this.store.pipe(select(getLoading()))
    this.error$ = this.store.pipe(select(getError()))
  }

  ngOnInit(): void {
    this.store.dispatch(HomeActions.getScore());
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  click() {
    this.router.navigate(['quizz'])
  }
}



