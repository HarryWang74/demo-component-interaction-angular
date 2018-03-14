import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit {
  @Input() astronaut: string;
  
  constructor() { }

  ngOnInit() {
  }

}
