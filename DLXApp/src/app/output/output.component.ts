import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input() list: string;

  voted: boolean = false;

  @Output() onVote = new EventEmitter<boolean>();

  Vote(result: boolean) {
    this.voted = true;
    this.onVote.emit(result);
  }

  constructor() { }

  ngOnInit() {
  }

}
