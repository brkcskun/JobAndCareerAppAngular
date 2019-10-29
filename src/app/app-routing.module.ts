import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { JobsComponent } from './jobs/jobs.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login/login.guard';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "jobs", component: JobsComponent, canActivate: [LoginGuard] },
  { path: "companies", component: CompaniesComponent },
  { path: "messages", component: MessagesComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
