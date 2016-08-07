import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/throw';

import { Job }            from '../../models/index';
import { CONFIG }         from '../../config/config';

@Injectable()
export class RetriesService {
  private retriesUrl = CONFIG.api_base + '/retries';  // URL to web api

  constructor(private http: Http) {}

  getRetries (): Observable<Job[]> {
    return this.http.get(this.retriesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  retriesPolling(): Observable<Job[]> {
    return Observable.interval(5000)
                     .mergeMap(() => this.getRetries());
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
