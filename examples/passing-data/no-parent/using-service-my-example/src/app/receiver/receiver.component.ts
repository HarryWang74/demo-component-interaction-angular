import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  message: any = {
    subject: "no",
    content: "no"
  }
  constructor(private MessageService: MessageService) { 
    MessageService.message$.subscribe(
      message => {
        this.message = message;
      });
  }

  ngOnInit() {
  }

}
