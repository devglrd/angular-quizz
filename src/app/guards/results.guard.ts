import {Observable, of} from 'rxjs';
import {switchMap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../store/reducer";
import {getAnswers} from "../store/quizz/quizz.selectors";

@Injectable(
  {providedIn: 'root'}
)
export class ResultsGuard implements CanActivate {
  constructor(private router: Router, private store: Store<IAppState>) {
  }

  loadData(): Observable<any> {
    return this.store.pipe(select(getAnswers()));
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.loadData()
      .pipe(switchMap((data) => {
        if (!data.length) {
          this.router.navigateByUrl('/')
        }
        return of(data.length);
      }));
  }

}
