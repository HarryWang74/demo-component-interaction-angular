import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css'],
  providers: [MissionService]
})
export class MissionControlComponent implements OnInit {
  // 初始化设置，3个宇航员，3个任务，任务记录为空，下个任务index=0
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    // 点击按钮，使用下个任务index 选择任务
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    // 更新任务记录
    this.history.push(`Mission "${mission}" announced`);
    // 归零设置
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  ngOnInit() {
  }

}
