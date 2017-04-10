import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate } from '@angular/router';


@Injectable() 
export class AuthLoginService {
    private _loginUrl = 'https://serene-savannah-69293.herokuapp.com/api/v1.0/auth/login'
    constructor(private _http: Http) { }
   
    loginForm(user) {
       return this._http.post(this._loginUrl, user)
                  .map((r: Response) => {return r.json()})
   }
}

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('user')) {
            // logged in so return true
            return true;
        }
        
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
