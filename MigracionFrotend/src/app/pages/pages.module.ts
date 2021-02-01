import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRouter } from './pages.router';
import { SharedModule } from '../Shared/shared.module';
import { PagesComponent } from './pages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PersonsComponent } from './persons/persons.component';
import { RequestComponent } from './request/request.component';



@NgModule({
  declarations: [PagesComponent,  PersonsComponent, RequestComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRouter, 
  ]
})
export class PagesModule { }
