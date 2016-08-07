import { Component, OnInit, OnDestroy } from '@angular/core';

import { RetriesService } from './index';
import { Job }            from '../../models/index';

@Component({
  moduleId: module.id,
  providers: [RetriesService],
  selector: 'sd-retries',
  templateUrl: 'retries.component.html'
})
export class RetriesComponent implements OnInit, OnDestroy {
  retriesSubscription: any;
  retries: Job[];
  errorMessage: string;

  constructor(private retryService: RetriesService) { }

  ngOnInit() {
    this.getRetries();
    this.retriesSubscription = this.retriesPolling();
  }

  retriesPolling() {
    return this.retryService.retriesPolling()
                            .subscribe(retries => this.retries = retries,
                                       error =>  this.errorMessage = <any>error);
  }

  getRetries() {
    this.retryService.getRetries()
                     .subscribe(retries => this.retries = retries,
                                error =>  this.errorMessage = <any>error);
   }

  argsToString(args:any) {
    return JSON.stringify(args);
  }

  ngOnDestroy() {
    this.retriesSubscription.unsubscribe();
  }
}
