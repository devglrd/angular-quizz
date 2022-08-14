import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() disabled: boolean = false;

  @Output() clicked: EventEmitter<any> = new EventEmitter<any>()
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goTo() {
    return this.clicked.emit();
  }
}
