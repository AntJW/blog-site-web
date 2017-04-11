import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from './contact.service';
import { IMessage } from './contact.model';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'] 
})
export class ContactComponent implements OnInit{
    backgroundImgUrl: string = "assets/images/funky-mailbox.jpg";
    headerMessage: string = "Contact Me";
    subheaderMessage: string = "Have questions? I have answers (maybe).";
    contactMsg = new IMessage();
    successMessage: string;
    errorMessage: string;


    constructor(private _activatedRoute: ActivatedRoute, private _contactService: ContactService) {}

    ngOnInit() {
   
    }

    onSubmit() {
        this.successMessage = null;
        this.errorMessage = null;
  
        if(!this.contactMsg.Phone){ this.contactMsg.Phone = '';}

        this._contactService.postContactMsg(this.contactMsg).subscribe(
            result => {
                this.successMessage = result['success_message'];
            },
            error => {
                this.errorMessage = 'Sorry, error occurred. Please trying sending message again.';
                
            }
        )
    }
}
