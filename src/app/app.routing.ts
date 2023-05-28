import { Routes, RouterModule } from '@angular/router';
import { Work1Component } from './work1/work1.component';
import { Work2Component } from './work2/work2.component';
import { Work3Component } from './work3/work3.component';
import { Work4Component } from './work4/work4.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


export const appRoutes: Routes = [  
  { path: 'p1', component: Work1Component },
  { path: 'p2', component: Work2Component },
  { path: 'p3', component: Work3Component },
  { path: 'p4', component: Work4Component, canActivate: [AuthGuard] },
  { path: 'resume', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'p1', pathMatch: 'full' },
  { path: '**', redirectTo: 'p1', pathMatch: 'full' }
];
