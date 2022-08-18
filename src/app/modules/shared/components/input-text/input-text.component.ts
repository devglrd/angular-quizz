import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() label: string = '';
  @Input() form: any;
  @Input() formName: string = '';

  constructor() {

  }

  ngOnInit(): void {
  }

}
