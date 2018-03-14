import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  fullname:string;

  constructor() { }

  ShowName(name) {
    this.fullname = name.value;
  }

  ngOnInit() {
  }

}
