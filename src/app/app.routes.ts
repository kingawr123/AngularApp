import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { DetailsComponent } from './images/details/details.component';

export const routes: Routes = [
    {path: 'posts', component: PostsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'images', component: ImagesComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
