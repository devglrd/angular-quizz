import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizzRouting} from "./routing/quizz.routing";
import {COMPONENTS} from "./components";
import {SERVICES} from "./services";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    QuizzRouting,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    ...SERVICES
  ]
})
export class QuizzModule {
}
