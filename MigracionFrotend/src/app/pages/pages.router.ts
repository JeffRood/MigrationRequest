import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PersonsComponent } from './persons/persons.component';
import { RequestComponent } from './request/request.component';




const routes: Routes = [

  {
    path: 'Person',
    component: PersonsComponent,
  },
  {
    path: 'Request',
    component: RequestComponent,
  },

  {
    path: '',
    redirectTo: 'Person',
    pathMatch: 'full'
  }  
];


export const PagesRouter = RouterModule.forChild(routes);
