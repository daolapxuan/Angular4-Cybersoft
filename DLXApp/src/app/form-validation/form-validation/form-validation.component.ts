import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  schools: Array<any> = [{id: '1', name: 'Cybersoft'}, {id: '2', name: 'UIT'}, {id: '3', name: 'DLX'}];

  constructor() { }

  Submit(value:any) {
    console.log(value);
  }

  ngOnInit() {
  }

}
