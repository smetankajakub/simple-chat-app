import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/models/message';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {
  messages: Message[] = [];
  constructor(
    private messageService: MessageService
  ) {} 

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.messageService.data.subscribe(response => {
      this.messages.push(response);
      console.log('get data: ', response);  // you will receive the data from sender component here.
    });
  }

  public clearMessages(): void {
    this.messages = [];
  }
}
