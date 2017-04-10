import { NgModule, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from "./shared/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
    
    ngOnInit(): void {
    }
    
}