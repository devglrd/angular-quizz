import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: AbstractControl<any, any> | undefined;
  @Output() assign: EventEmitter<any> = new EventEmitter<any>()

  constructor() {
  }

  ngOnInit(): void {
  }

  assignFn(value: any) {
    this.assign.emit(value)
  }

}
