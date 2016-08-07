import { Component, OnInit, OnDestroy } from '@angular/core';

import { CronsService } from './index';
import { Job }          from '../../models/index';

@Component({
  moduleId: module.id,
  providers: [CronsService],
  selector: 'sd-crons',
  templateUrl: 'crons.component.html'
})
export class CronsComponent implements OnInit, OnDestroy {
  cronsSubscription: any;
  crons: Job[];
  errorMessage: string;

  constructor(private cronsService: CronsService) { }

  ngOnInit() {
    this.getCrons();
    this.cronsSubscription = this.cronsPolling();
  }

  cronsPolling() {
    return this.cronsService.cronsPolling()
                            .subscribe(crons => this.crons = crons,
                                       error =>  this.errorMessage = <any>error);
  }

  getCrons() {
    this.cronsService.getCrons()
                     .subscribe(crons => this.crons = crons,
                                error =>  this.errorMessage = <any>error);
   }

  argsToString(args:any) {
    return JSON.stringify(args);
  }

  ngOnDestroy() {
    this.cronsSubscription.unsubscribe();
  }
}
