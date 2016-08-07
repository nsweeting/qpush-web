import { Component, OnInit, OnDestroy } from '@angular/core';

import { StatsService, Stats } from './index';

@Component({
  moduleId: module.id,
  providers: [StatsService],
  selector: 'sd-stats',
  templateUrl: 'stats.component.html'
})
export class StatsComponent implements OnInit, OnDestroy {
  statsSubcription: any;
  stats: Stats;
  errorMessage: string;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.getStats();
    this.statsSubcription = this.statsPolling();
  }

  statsPolling() {
    return this.statsService.statsPolling()
                            .subscribe(stats => this.stats = stats,
                                       error =>  this.errorMessage = <any>error);
  }

  getStats() {
    this.statsService.getStats()
                     .subscribe(stats => this.stats = stats,
                                error =>  this.errorMessage = <any>error);
  }

  ngOnDestroy() {
    this.statsSubcription.unsubscribe();
  }
}
