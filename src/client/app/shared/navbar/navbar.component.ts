import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeartbeatComponent } from '../../components/index';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  directives: [ROUTER_DIRECTIVES, HeartbeatComponent]
})
export class NavbarComponent { }
