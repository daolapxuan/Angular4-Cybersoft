import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  textAlign: string;

  constructor() { }

  Left() {
    this.textAlign = "left";
  }
  Center() {
    this.textAlign = "center";
  }
  Right() {
    this.textAlign = "right";
  }

  ngOnInit() {
  }

}
