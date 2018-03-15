import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
