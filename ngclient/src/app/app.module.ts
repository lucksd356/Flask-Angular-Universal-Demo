import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
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
      { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)},
      { path: 'lazy/nested', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)}
    ],  {useHash: true}),
    NgbModule,
    HttpClientModule,
    HttpClientJsonpModule,
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
