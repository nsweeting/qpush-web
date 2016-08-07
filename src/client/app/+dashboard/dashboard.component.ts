import { Component } from '@angular/core';

import { StatsComponent, HistoryComponent } from '../components/index';

@Component({
  selector: 'sd-dashboard',
  directives: [StatsComponent, HistoryComponent],
  template: `
    <sd-stats></sd-stats>
    <sd-history></sd-history>
  `
})
export class DashboardComponent {}
