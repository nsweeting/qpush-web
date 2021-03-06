import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/throw';

import { History }        from './index';
import { CONFIG }         from '../../config/config';

@Injectable()
export class HistoryService {
  private historyUrl = CONFIG.api_base + '/history';

  constructor(private http: Http) {}

  getHistory (): Observable<History[]> {
    return this.http.get(this.historyUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  historyPolling(): Observable<History[]> {
    return Observable.interval(5000)
                     .mergeMap(() => this.getHistory());
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
