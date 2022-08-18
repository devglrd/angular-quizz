import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMPONENTS} from "./components";
import {SERVICES} from "./services";
import {SharedModule} from "../shared/shared.module";
import {HomeRouting} from "./routing/home.routing";
import {StoreModule} from "@ngrx/store";
import {homeReducer} from "../../store/home/home.reducer";
import {EffectsModule} from "@ngrx/effects";
import {HomeEffects} from "../../store/home/home.effects";



@NgModule({
  declarations: [
  ...COMPONENTS
  ],
  providers: [
    ...SERVICES
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRouting,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeModule { }
