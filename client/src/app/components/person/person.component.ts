import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/models/message';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: any;
  message: Message = {};
  text: string = '';

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void { }
  sendNewMessage() {
    let message: Message = {
      from: this.person,
      text: this.text
    }
    this.messageService.sendData(message);
    this.text = '';
  }
}
