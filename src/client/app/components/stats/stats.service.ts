import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/throw';

import { Stats }          from './index';
import { CONFIG }         from '../../config/config';

@Injectable()
export class StatsService {
  private statsUrl = CONFIG.api_base + '/stats';

  constructor(private http: Http) {}

  getStats (): Observable<Stats> {
    return this.http.get(this.statsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  statsPolling(): Observable<Stats> {
    return Observable.interval(5000)
                     .mergeMap(() => this.getStats());
  }

  private extractData(res: Response) {
    return res.json() || { };
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
