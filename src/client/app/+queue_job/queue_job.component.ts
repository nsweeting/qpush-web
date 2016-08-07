import { Component } from '@angular/core';

import { JobsComponent } from '../components/index';

@Component({
  selector: 'sd-queue-job',
  directives: [JobsComponent],
  template: `
    <sd-jobs></sd-jobs>
  `
})
export class QueueJobComponent {}
