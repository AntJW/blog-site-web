import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './auth/auth.service';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { IntroHeaderComponent } from './shared/intro.header.component';
import { SharedService } from "./shared/shared.service";
import { LoggerService } from "./shared/logger.service";
import { UploaderService } from "./shared/uploader.service";
import { GetDatetimePipe } from "./shared/shared.pipes";
import { NavComponent, NavInvertComponent } from './shared/nav.component';
import { FooterComponent } from './shared/footer.component';
import { DatePipe } from "@angular/common";
import { PagerService } from "./shared/pagination.service";
import { BlogPostService } from "./blog/blog.service";
import { LoginComponent } from './auth/auth.login.component';
import { AuthLoginService } from './auth/auth.service';
import { CreatePostComponent } from './blog/blog.create.component';
import { BlogPostComponent } from './blog/blog.post.component';
import { DisqusModule } from 'angular2-disqus';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@NgModule({
  declarations: [
    AppComponent, NavComponent, NavInvertComponent, BlogComponent, AboutComponent, ContactComponent, 
    FooterComponent, IntroHeaderComponent, LoginComponent, CreatePostComponent, BlogPostComponent, 
    GetDatetimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DisqusModule
  ],
  providers: [ContactService, SharedService, LoggerService, UploaderService, PagerService, BlogPostService, 
  AuthLoginService, DatePipe, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
