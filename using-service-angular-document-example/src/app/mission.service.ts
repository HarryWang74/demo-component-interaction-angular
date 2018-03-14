import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MissionService {
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();

  // Observable string streams
  // 接收
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  // Service message commands
  // 发送 
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }
}
