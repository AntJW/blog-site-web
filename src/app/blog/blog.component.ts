import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { IPosts } from './blog.model';
import { BlogPostService } from "./blog.service";
import { PagerService } from "../shared/pagination.service";


@Component({
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'] 
})
export class BlogComponent implements OnInit {
    backgroundImgUrl: string = "assets/images/typewriter-desktop.jpg";
    headerMessage: string = "Data Geek";
    subheaderMessage: string = "Learn - Share - Repeat";
    allPosts: IPosts[];
    pagedPosts: IPosts[];
    pager: any = {}
    twitter: string = "https://twitter.com/ant_man01";
    errorMessage: string;

    constructor(private _activatedRoute: ActivatedRoute, private _blogPostService: BlogPostService, 
                private _sharedService: SharedService, private _pagerService: PagerService) {}

    ngOnInit(): void {
        this._blogPostService.getBlogPosts().subscribe(
            results => {
                this.allPosts = results;

                // initialize to page 1
                this.setPage(1);
            },
            error => {
                this.errorMessage = "Sorry, error occured. Please try refreshing page.";
            }
        )
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this._pagerService.getPager(this.allPosts.length, page, 4);
 
        // get current page of items
        this.pagedPosts = this.allPosts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    getSubString(body: string): string {
        return body.substr(0, 125) + '.....';
    }
}
