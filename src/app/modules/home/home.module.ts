import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COMPONENTS} from "./components";
import {SERVICES} from "./services";
import {SharedModule} from "../shared/shared.module";
import {HomeRouting} from "./routing/home.routing";



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
    HomeRouting
  ]
})
export class HomeModule { }
