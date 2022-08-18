import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BestScoreComponent, COMPONENTS} from "./components";
import {SERVICES} from "./services";
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [...COMPONENTS, ButtonComponent, LoaderComponent, InputTextComponent, InputRadioComponent, InputCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...COMPONENTS,
    ...SERVICES
  ],
  providers: [...SERVICES]
})
export class SharedModule {
}
