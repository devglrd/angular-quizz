import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BestScoreComponent, COMPONENTS} from "./components";
import {SERVICES} from "./services";
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [...COMPONENTS, ButtonComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
    ...SERVICES
  ],
  providers: [...SERVICES]
})
export class SharedModule {
}
