import { Component, OnInit, Input } from '@angular/core';
import { MissionService } from '../mission.service';
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  subscription: Subscription;
  
  constructor(private missionService: MissionService) { 
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
    });
  }

  ngOnInit() {
  }

}
