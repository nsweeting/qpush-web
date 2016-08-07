import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/interval';

import { Heartbeat }      from './index';
import { CONFIG }         from '../../config/config';

@Injectable()
export class HeartbeatService {
  private heartbeatUrl = CONFIG.api_base + '/heartbeat';

  constructor(private http: Http) {}

  getHeartbeat (): Observable<Heartbeat> {
    return this.http.get(this.heartbeatUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  heartbeatPolling(): Observable<Heartbeat> {
    return Observable.interval(10000)
                     .mergeMap(() => this.getHeartbeat());
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
