import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private dataSource: BehaviorSubject<Message> = new BehaviorSubject<Message>({});
  data: Observable<Message> = this.dataSource.asObservable();

  constructor() { }
 
  sendData(data: Message) {
    if(data && data.text !== undefined){
      this.dataSource.next(data);
    }
    
  }
}
