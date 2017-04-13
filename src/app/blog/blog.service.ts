import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IPosts } from './blog.model';
import { SharedService } from "../shared/shared.service";


@Injectable()
export class BlogPostService {
    private _postsurl = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/posts';
    private _postdetailurl = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/posts/';
    private _postcreateurl = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/posts/new';

    constructor(private _http: Http, private _sharedService: SharedService) { }
    
    getBlogPosts(): Observable<IPosts[]>{
        return this._http.get(this._postsurl)
                    .map((r: Response) => <IPosts[]>r.json())
    }

    getOnePost(id: string): Observable<IPosts[]> {
        return this._http.get(this._postdetailurl + id)
                    .map((r: Response) => r.json())         
    }
 
    createNewBlogPost(postObj: IPosts){
        let userHeaders = this._sharedService.getUserHeaders();
        return this._http.post(this._postcreateurl, postObj, {headers: userHeaders})
                    .map((r: Response) => r.json());
    }


}
