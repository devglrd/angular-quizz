import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {COMPONENTS} from "./components";
import {StoreModule} from "@ngrx/store";
import {quizzReducer} from "../../store/quizz/quizz.reducer";
import {ResultsRouting} from "./routing/results.routing";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
    imports: [
        CommonModule,
        ResultsRouting,
        StoreModule.forFeature('quizz', quizzReducer),
        SharedModule
    ]
})
export class ResultsModule {
}
