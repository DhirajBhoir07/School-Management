import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about_page', component:AboutComponent},
    {path:'admin', component:AdminComponent},

];
