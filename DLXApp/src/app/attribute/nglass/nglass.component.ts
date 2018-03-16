import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nglass',
  templateUrl: './nglass.component.html',
  styleUrls: ['./nglass.component.css']
})
export class NglassComponent implements OnInit {
  cl = true;
  bg = true;
  si = true;
  fo = true;

  constructor() { }

  Color() {
    this.cl = !this.cl;
  }

  Background() {
    this.bg = !this.bg;
  }

  Size() {
    this.si = !this.si;
  }

  Font() {
    this.fo = !this.fo;
  }

  ngOnInit() {
  }

}
