import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../shared/shared.service';


@Component({
    selector: 'intro-header',
    templateUrl: './intro.header.component.html',
    styleUrls: ['./intro.header.component.css'] 
})
export class IntroHeaderComponent implements OnInit, AfterViewInit{
    
    @Input()
    backgroundImgUrl: string;
    @Input()
    headerMessage: string;
    @Input()
    subheaderMessage: string;

    constructor(private _activatedRoute: ActivatedRoute, private _sharedservice: SharedService) {}

    ngOnInit() {
   
    }

    ngAfterViewInit() {
     
    }
}
