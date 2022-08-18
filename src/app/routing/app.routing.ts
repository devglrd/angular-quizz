import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultsGuard} from "../guards/results.guard";

const routes: Routes = [
  {
    path: "",
    canActivate: [],
    loadChildren: () => import('./../modules/home/home.module').then(m => m.HomeModule),
    data: {preload: true}
  },
  {
    path: "quizz",
    canActivate: [],
    loadChildren: () => import('./../modules/quizz/quizz.module').then(m => m.QuizzModule),
  },
  {
    path: "results",
    canActivate: [],
    loadChildren: () => import('./../modules/results/results.module').then(m => m.ResultsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
