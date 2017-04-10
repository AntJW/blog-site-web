import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/auth.login.component';
import { AuthGuard } from './auth/auth.service';
import { CreatePostComponent } from './blog/blog.create.component';
import { BlogPostComponent } from './blog/blog.post.component';

const routes: Routes = [
    // The order of the routes in the configuration matters and this is by design. 
    // The router uses a first-match wins strategy when matching routes, so more specific routes 
    // should be placed above less specific routes.
    { path: '', redirectTo: 'blog', pathMatch: 'full' },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: AboutComponent },  
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'create', component: CreatePostComponent, canActivate: [AuthGuard] }, 
    { path: 'post/:id', component: BlogPostComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule  {}
