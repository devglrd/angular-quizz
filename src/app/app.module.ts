import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, COMPONENTS} from "./components";
import {AppRouting} from "./routing/app.routing";
import {QuizzModule} from "./modules/quizz/quizz.module";
import {REDUCERS} from "./store/reducer";
import {EFFECTS} from "./store/effects";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRouting,
    QuizzModule,
    StoreModule.forRoot(REDUCERS),
    EffectsModule.forRoot([...EFFECTS]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
