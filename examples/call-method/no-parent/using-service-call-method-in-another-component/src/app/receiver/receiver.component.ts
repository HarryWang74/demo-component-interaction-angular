import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  constructor(private MessageService: MessageService) { 
    MessageService.message$.subscribe(
      this.sayHello
    );
  }

  ngOnInit() {
  }

  sayHello():void{
    console.log("Hello")
  }

}
