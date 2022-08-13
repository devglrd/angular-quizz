import { Component, OnInit } from '@angular/core';
import {IAppState} from "../../../../store/reducer";
import {Store} from "@ngrx/store";
import {GetBestScore} from "../../../../store/global/global.actions";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetBestScore());
  }

}
