import { Component, OnInit, OnDestroy } from '@angular/core';

import { HistoryService, History } from './index';

@Component({
  moduleId: module.id,
  providers: [HistoryService],
  selector: 'sd-history',
  templateUrl: 'history.component.html'
})
export class HistoryComponent implements OnInit, OnDestroy {
  historySubcription: any;
  histories: History[];
  errorMessage: string;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.getHistory();
    this.historySubcription = this.historyPolling();
  }

  historyPolling() {
    return this.historyService.historyPolling()
                              .subscribe(histories => this.histories = histories,
                                         error =>  this.errorMessage = <any>error);
  }

  getHistory() {
    this.historyService.getHistory()
                       .subscribe(histories => this.histories = histories,
                                  error =>  this.errorMessage = <any>error);
   }

  argsToString(args:any) {
    return JSON.stringify(args);
  }

  ngOnDestroy() {
    this.historySubcription.unsubscribe();
  }
}
