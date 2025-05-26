import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
     { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'  
    },
    { 
        path: 'home', 
        component: AppBodyComponent 
    },   
   
    {
        path: 'aboutme',
        component: AboutMeComponent
    },
    {
        path: 'contact-us',
        component: ContactusComponent
    }

];
