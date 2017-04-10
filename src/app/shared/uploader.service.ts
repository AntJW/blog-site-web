import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SharedService } from "../shared/shared.service";

@Injectable()
export class UploaderService {
    private _uploadProfileImageUrl  = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/upload/profile-photo/'
    private _uploadEventImageUrl  = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/upload/event-photo/'
    private _uploadPostImageUrl  = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/upload/post-photo/'
    private _uploadPostImageOnlyUrl  = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/upload/post-photo/only/'
    current: string;

    constructor(private _http: Http, private _sharedService: SharedService) { }

    uploadProfilePhoto(formData: any, userId: string) {  
        if (localStorage.getItem('currentOrg')) {
            this.current = localStorage.getItem('currentOrg');
        } else { let current = localStorage.getItem('currentUser')}

        formData.append('Authorization', 'Bearer ' + this.current);

        return this._http
            .post(this._uploadProfileImageUrl + userId, formData)
            .map((r: Response) => { r.json() });
    }

    uploadEventPhoto(formData: any, eventId: string) {  
        if (localStorage.getItem('currentOrg')) {
            this.current = localStorage.getItem('currentOrg');
        } else { let current = localStorage.getItem('currentUser')}

        formData.append('Authorization', 'Bearer ' + this.current)
        return this._http
            .post(this._uploadEventImageUrl + eventId, formData)
            .map((r: Response) => { return r.json() });
    }

    uploadPostPhoto(formData: any, postId: string) {  
        if (localStorage.getItem('currentOrg')) {
            this.current = localStorage.getItem('currentOrg');
        } else { let current = localStorage.getItem('currentUser')}

        formData.append('Authorization', 'Bearer ' + this.current)
        return this._http
            .post(this._uploadPostImageUrl + postId, formData)
            .map((r: Response) => { return r.json() });
    }

    private handleError(error: Response) {
        console.error('An error occurred while uploading', error); 
        return Observable.throw(error.json().error || "Server error");
    }
}