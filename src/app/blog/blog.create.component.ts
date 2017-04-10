import { Component, OnInit } from '@angular/core';
import { BlogPostService } from './blog.service';
import { Router } from '@angular/router';
import { IPosts } from './blog.model';


@Component({
    templateUrl: './blog.create.component.html',
    styleUrls: ['./blog.component.css']
})
export class CreatePostComponent implements OnInit{
    backgroundImgUrl: string = "assets/images/all-black-background.jpg";
    headerMessage: string = "Create."
    newPost = new IPosts();
    stringTags: string;
    errorMessage: string;

    constructor(private route: Router, private _blogPostService: BlogPostService ) {}

    ngOnInit(): void {
          
    }

    onSubmit(): void {
        this.errorMessage = null;
        
        let d = new Date();
        let currentDatetime = d.toISOString();
        let offset = d.getTimezoneOffset();

        this.newPost.CreatedOn = {"DatetimeUTC": currentDatetime, "TimeOffset": offset};
        this.newPost.Tags = this.newPost.Tags.toString().replace(/ /g, '').split(',');
        console.log(offset)
   
        this._blogPostService.createNewBlogPost(this.newPost).subscribe(
            result => {
                this.route.navigate(['/post/' + result['post_id']])
            },
            error => {
                if(error['status'] === 500) {
                    this.errorMessage = 'Sorry, error occurred. Please trying logging in again.'
                }
                else{
                    this.errorMessage = 'Something went wrong. Try again.'
                }
                
            }
        )
    }
}