import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {
  @Input() label: string = '';
  @Input() index: number = 0;
  @Input() value: AbstractControl<any, any> | undefined;
  @Output() assign: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  assignFn(choice: any) {
    this.assign.emit(choice);
  }
}
