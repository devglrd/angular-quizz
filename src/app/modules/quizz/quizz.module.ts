import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizzRouting} from "./routing/quizz.routing";
import {COMPONENTS} from "./components";
import {SERVICES} from "./services";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {quizzReducer} from "../../store/quizz/quizz.reducer";
import {EffectsModule} from "@ngrx/effects";
import {QuizzEffects} from "../../store/quizz/quizz.effects";


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
    StoreModule.forFeature('quizz', quizzReducer),
    EffectsModule.forFeature([QuizzEffects])
  ],
  providers: [
    ...SERVICES
  ]
})
export class QuizzModule {
}
