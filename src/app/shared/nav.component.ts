import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'] 
})
export class NavComponent implements OnInit {
    thumbNailImage: string = "assets/images/CARTOON-anthony.jpg"
    loggedIn: boolean = false;

    constructor(private route: Router) { }
    
    ngOnInit(): void {
        if (localStorage.getItem('user')) {
            this.loggedIn = true;
        }
    }

    logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('acct')
        this.route.navigate(['/'])
    }
}

@Component({
    selector: 'nav-bar-invert',
    templateUrl: './nav.invert.component.html',
    styleUrls: ['./nav.invert.component.css'] 
})
export class NavInvertComponent implements OnInit {
    thumbNailImage: string = "assets/images/CARTOON-anthony.jpg"
    loggedIn: boolean = false;

    constructor(private route: Router) { }
    
    ngOnInit(): void {
        if (localStorage.getItem('user')) {
        this.loggedIn = true;
        }
    }
    logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('acct')
        this.route.navigate(['/'])
    }
}

