import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeartbeatService, Heartbeat } from './index';

@Component({
  moduleId: module.id,
  providers: [HeartbeatService],
  selector: 'sd-heartbeat',
  templateUrl: 'heartbeat.component.html'
})
export class HeartbeatComponent implements OnInit, OnDestroy {
  heartbeatSubcription: any;
  heartbeat: Heartbeat;
  errorMessage: string;

  constructor(private heartbeatService: HeartbeatService) { }

  ngOnInit() {
    this.getHeartbeat();
    this.heartbeatSubcription = this.heartbeatPolling();
  }

  getHeartbeat() {
    this.heartbeatService.getHeartbeat()
                         .subscribe(heartbeat => this.heartbeat = heartbeat,
                                    error => this.raiseError(error));
  }

  heartbeatPolling() {
    return this.heartbeatService.heartbeatPolling()
                                .subscribe(heartbeat => this.heartbeat = heartbeat,
                                           error => this.raiseError(error));
  }

  ngOnDestroy() {
    this.heartbeatSubcription.unsubscribe();
  }


  raiseError(error: any) {
    this.errorMessage = <any>error;
    this.heartbeat = undefined;
   }
}
