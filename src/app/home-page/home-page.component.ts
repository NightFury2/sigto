import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private _inputFocusClass: boolean;
  private _searchValue;

  constructor() { }

  ngOnInit() {
    this._inputFocusClass = false;
    this._searchValue = [
      {id: 0, name: '090231232'},
      {id: 1, name: '98273498032u90j'},
      {id: 2, name: '2352151235'},
      {id: 3, name: '12351262356'},
      {id: 4, name: '527635634t'},
      {id: 5, name: '23534534'}
    ];
  }

  set inputFocusClass(isFocus: boolean) {
    this._inputFocusClass = isFocus;
  }

  get inputFocusClass(): boolean {
    return this._inputFocusClass;
  }

  get searchValue() {
    return this._searchValue;
  }
}
