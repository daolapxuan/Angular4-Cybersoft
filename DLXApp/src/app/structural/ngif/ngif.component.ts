import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  onoff: boolean = true;
  number: number;
  number1: number;
  state: boolean = false;

  constructor() { }

  Show() {
    this.onoff = true;
  }
  Hide() {
    this.onoff = false;
  }

  Check(num) {
    this.number = parseInt(num.value);
  }

  Check1(num) {
    // Kiểm tra số nhập vào có phải là số hay không!
    if (!isNaN(parseInt(num.value))) {
      this.state = true; // Hiện kết quả
      this.number1 = parseInt(num.value);
    }
  }
  
  ngOnInit() {
  }

}
