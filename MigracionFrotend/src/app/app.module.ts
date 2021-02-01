import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from './Shared/shared.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
