import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';
import { CompaniesComponent } from './companies/companies.component';
import { JobsComponent } from './jobs/jobs.component';
import { AlertifyService } from './_services/alertify.service';
import { LoginGuard } from './login/login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { JobDetailComponent } from './job-detail/job-detail.component';  


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MessagesComponent,
      CompaniesComponent,
      JobsComponent,
      JobDetailComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      MatProgressSpinnerModule,  
      NgxSpinnerModule
   ],
   providers: [AlertifyService,LoginGuard],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
