import { Component, OnInit } from '@angular/core';
import { MessageService }     from '../message.service';
@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  message: any = {
    subject: "Hello",
    content: "Message from sender"
  }
  constructor(private MessageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage(){
    this.MessageService.sendMessage(this.message);
  }
}
