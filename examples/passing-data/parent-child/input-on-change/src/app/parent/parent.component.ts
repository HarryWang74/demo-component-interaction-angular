import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  customer: any = 1;
  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.customer = 2;
  }
}
