import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css']
})
export class ChatBoardComponent implements OnInit {
  @Input() persons:any;
  constructor() { }

  ngOnInit(): void {
    console.log('on init')
    console.log(this.persons);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }

  getRow(index: number):string {
    if(index === 0 || index === 3 || index === 6){
      return '1';
    }
    return ''
  }
}
