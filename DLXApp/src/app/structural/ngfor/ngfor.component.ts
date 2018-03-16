import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  workerList: any = [{ name: "Xuan", age: 25 }, { name: "Ngoc", age: 23 }, { name: "Diem", age: 26 }, { name: "Vi", age: 20 }];

  names = ["Võ Thanh Ngọc", "Thái Thị Ngọc Diễm", "Nguyễn Thị Thanh Vi"];

  constructor() { }


  ngOnInit() {
  }

}
