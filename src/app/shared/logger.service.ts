import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ILogger } from "../shared/logger.model";

@Injectable()
export class LoggerService {
    private _logUrl  = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/log'
    curr_log = new ILogger();
    constructor(private _http: Http) {}

    createLog(level, message, event){
        this.curr_log.level=level; 
        this.curr_log.message=message;
        this.curr_log.event=event;
        this.curr_log.origin="web";
    }

    postLog(level, message, event){
        // Levels: error, warning, info
        // Message: user created log message
        // Event: system generated log
        this.createLog(level, message, event)
        return this._http.post(this._logUrl, this.curr_log)
            .map((r: Response) => r.json())
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        console.error('Error in logger', error); 
        return Observable.throw(error.json().error || "Server error");
    }
}