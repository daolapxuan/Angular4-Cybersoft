import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  content1: string = "This is interpolation binding";
  content2: string;

  constructor() { }

  ChangeData() {
    this.content2 = (<HTMLInputElement>document.getElementById('itpl1')).value;
  }

  ngOnInit() {
  }

}
