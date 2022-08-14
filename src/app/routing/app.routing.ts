import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
