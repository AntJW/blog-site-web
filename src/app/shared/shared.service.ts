import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SharedService { 
    data: string; 
    constructor(private _http: Http) {}

    getUserHeaders() {
        let d = new Date();
        let currentDatetime = d.toISOString();
        let offset = d.getTimezoneOffset();
        let current: string;
        let acct: string;

        current = localStorage.getItem('user')
        acct = localStorage.getItem('acct')

        let headers = new Headers({ 'Authorization': 'Bearer ' + current, 
                                    'Account': acct,
                                    'Geolocation': localStorage.getItem('currentLocation'), 
                                    'Datetime': JSON.stringify({DatetimeUTC: currentDatetime, TimeOffset: offset}),
                                    'Content-Type': 'application/json'
                                });
        
        let options = new RequestOptions({ headers: headers});

        return options
    }

}