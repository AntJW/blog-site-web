import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { IPosts } from './blog.model';
import { BlogPostService } from "./blog.service";
import { PagerService } from "../shared/pagination.service";


@Component({
    templateUrl: './blog.post.component.html',
    styleUrls: ['./blog.post.component.css', './blog.component.css'] 
})
export class BlogPostComponent implements OnInit {
    onePost: IPosts[];
    twitter: string = "https://twitter.com/ant_man01";
    errorMessage: string;
    pageIdentifier: string;
    pageUrl: string = 'http://localhost:4200/post/'
    constructor(private _activatedRoute: ActivatedRoute, private _blogPostService: BlogPostService, 
                private _sharedService: SharedService) {}

    ngOnInit(): void {
        this._activatedRoute.params.forEach((params: Params) => {
            let id =  params['id'];
            this._blogPostService.getOnePost(id).subscribe(
                results => {
                    this.onePost = results;
                    this.pageIdentifier = id;
                },
                error => {
                    this.errorMessage = "Sorry, error occured. Please try refreshing page.";
                }
            )
        })
    }

}
