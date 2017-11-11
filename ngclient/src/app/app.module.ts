import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostinfoComponent } from './postinfo/postinfo.component';
import { DropdownToggleDirective } from './dropdown-toggle.directive';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BlogComponent,
    HomeComponent,
    NavbarComponent,
    PostinfoComponent,
    DropdownToggleDirective
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'about', component: AboutComponent, pathMatch: 'full'},
      { path: 'blog', component: BlogComponent, pathMatch: 'full'},
      { path: 'postinfo/:post_id', component: PostinfoComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ], {useHash: true}),
    NgbModule.forRoot(),
    HttpClientModule,
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
