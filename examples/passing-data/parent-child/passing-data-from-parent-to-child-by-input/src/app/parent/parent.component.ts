import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  customer:any = [
    {name: "customer1", id:1},
    {name: "customer2", id:2},
    {name: "customer3", id:3},
  ]
  constructor() { }

  ngOnInit() {
  }

}
