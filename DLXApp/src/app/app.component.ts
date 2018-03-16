import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson 4: Input, Output and Viewchild';
  numberOfAgree: number = 0;
  numberOfDisagree: number = 0;

  persons = ['Dao Lap Xuan', 'Vo Thanh Ngoc', 'Thai Thi Ngoc Diem', 'Nguyen Thi Thanh Vi'];

  parentVote(result: boolean) {
    if (result) this.numberOfAgree++;
    else this.numberOfDisagree++;
  }
}
