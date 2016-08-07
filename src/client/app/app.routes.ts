import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes }         from './+home/index';
import { DashboardRoutes }    from './+dashboard/index';
import { QueueJobRoutes }     from './+queue_job/index';
import { DelayedRoutes }      from './+delayed/index';
import { MorgueRoutes }       from './+morgue/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...DashboardRoutes,
  ...QueueJobRoutes,
  ...DelayedRoutes,
  ...MorgueRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
