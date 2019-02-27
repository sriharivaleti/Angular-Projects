import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: {
    routeState: 1,
    seo: {
      title: 'Home Page',
      description: 'Home for Home Page',
      shareImg: ''
    }
  } },
  { path: 'about', component: AboutComponent, data: {
    routeState: 2,
    deo: {
      title: 'About Us Page',
      description: 'About me! :)',
      shareImg: 'My Image'
    }
  } },
  { path: 'post/:id/:slug', loadChildren: './post/post.module#PostModule', data: {routeState: 3} },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  }),
  QuicklinkModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
