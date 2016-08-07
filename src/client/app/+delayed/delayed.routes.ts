import { RouterConfig }     from '@angular/router';

import { DelayedComponent } from './index';
import { RetriesComponent, CronsComponent } from '../components/index';

export const DelayedRoutes: RouterConfig = [
  {
    path: 'delayed',
    component: DelayedComponent,
    children: [
      { path: '',          component: RetriesComponent },
      { path: 'crons',     component: CronsComponent }
    ]
  }
];
