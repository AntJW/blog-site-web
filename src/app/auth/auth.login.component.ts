import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from './auth.service';
import { Router } from '@angular/router';
import { IUser } from './auth.model';


@Component({
    templateUrl: './auth.login.component.html',
    styleUrls: ['./auth.login.component.css']
})
export class LoginComponent implements OnInit{
    backgroundImgUrl: string = "assets/images/beware-of-dog.jpg";
    user = new IUser();
    errorMessage: string;

    constructor(private route: Router, private _authservice: AuthLoginService) {}

    ngOnInit(): void {
        if (localStorage.getItem('user')) {
            this.route.navigate(['/new-post'])
        }         
    }

    onSubmit(): void {
        this.errorMessage = null;
        this._authservice.loginForm(this.user).subscribe(
            result => {
            localStorage.setItem('user', result['token'])
            localStorage.setItem('acct', result['acct'])
            this.route.navigate(['/create']) 
            },
            error => {
                if(error['status'] === 401){
                    this.errorMessage = 'Username or password is incorrect.'
                }
                else if(error['status'] === 500) {
                    this.errorMessage = 'Sorry, error occurred. Please trying logging in again.'
                }
                else{
                    this.errorMessage = 'Something went wrong. Try again.'
                }
                
            }
        )
    }
}