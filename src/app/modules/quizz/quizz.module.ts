import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizzRouting} from "./routing/quizz.routing";
import {COMPONENTS} from "./components";
import {SERVICES} from "./services";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    QuizzRouting,
    SharedModule,
  ],
  providers: [
    ...SERVICES
  ]
})
export class QuizzModule {
}
