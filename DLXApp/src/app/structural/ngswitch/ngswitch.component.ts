import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  value: any;
  state: boolean = false;

  constructor() { }

  Check(num) {
    if (num.value != "") {
      this.state = true;
      this.value = num.value;
    }
  }

  ngOnInit() {
  }

}
