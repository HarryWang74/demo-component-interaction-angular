import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class MessageService {

  constructor() { }

   // Observable string sources
   private messageSource = new Subject<any>();

   // Observable string streams
   // 接收
   message$ = this.messageSource.asObservable();
 
   // Service message commands
   // 发送 
   sendMessage(message: any) {
     this.messageSource.next(message);
   }
}
