import { Component, OnDestroy, Input } from '@angular/core';
import { MissionService } from '../mission.service';
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements  OnDestroy{
  @Input() astronaut: string;
  mission = '<no mission announced>';
  subscription: Subscription;
  
  constructor(private missionService: MissionService) { 
    // 接收 mission, 这种写法能释放内存
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
    });
  }

  // 释放内存
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
