import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../shared/shared.service';


@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'] 
})
export class AboutComponent implements OnInit, AfterViewInit{
    backgroundImgUrl: string = "assets/images/beach-and-bike.jpg";
    headerMessage: string = "About Me";
    subheaderMessage: string = "This is what I do.";
    
    constructor(private _activatedRoute: ActivatedRoute, private _sharedservice: SharedService) {}

    ngOnInit() {
   
    }

    ngAfterViewInit() {
     
    }
}
