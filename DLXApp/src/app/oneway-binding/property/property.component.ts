import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  content1: string = "This is Property binding";
  content2: string = "This is Property binding: ";
  content3: string;

  ChangeData() {
    this.content2 = (<HTMLInputElement>document.getElementById('pp1')).value;
  }

  Change2(pp) {
    this.content3 = pp.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
