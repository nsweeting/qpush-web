import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-delayed',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h4 class="ui horizontal divider header">
      <i class="wait icon"></i>
      Delayed
    </h4>
    <div class="ui two item menu">
      <a [routerLink]="['/delayed']" [routerLinkActive]="['active']" class="item">
        Retries
      </a>
      <a [routerLink]="['/delayed/crons']" [routerLinkActive]="['active']" class="item">
        Crons
      </a>
    </div>
    <br />
    <router-outlet></router-outlet>
  `
})
export class DelayedComponent {}
