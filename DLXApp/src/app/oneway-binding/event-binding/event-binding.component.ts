import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  content1:string = "This is Event Binding";
  content2:string;
  result:string = "Result: ";

  constructor() { }

  Show(ct) {
    ct.value = this.content1;
  }

  Show2(ct2) {
    this.content2 = ct2.value;
    this.result = "Result: " + this.content2;
  }

  ngOnInit() {
  }

}
