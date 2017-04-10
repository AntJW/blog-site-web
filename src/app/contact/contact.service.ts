import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IMessage } from './contact.model';
import { SharedService } from "../shared/shared.service";


@Injectable()
export class ContactService {
    private _messageUrl = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/message';
   
    constructor(private _http: Http, private _sharedservice: SharedService) { }
 
    postContactMsg(message: IMessage) {
        return this._http.post(this._messageUrl, message)
                    .map((r: Response) =>  r.json());
    }
}