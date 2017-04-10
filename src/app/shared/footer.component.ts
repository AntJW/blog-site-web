import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../shared/shared.service';


@Component({
    selector: 'footer-section',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'] 
})
export class FooterComponent implements OnInit {
    private twitter: string = "https://twitter.com/ant_man01";
    private linkedin: string = "https://www.linkedin.com/in/anthony-white-812aabb6";
    private github: string = "https://github.com/AntJW";

    constructor(private _activatedRoute: ActivatedRoute, private _sharedservice: SharedService) {}

    ngOnInit() {

    }

}
