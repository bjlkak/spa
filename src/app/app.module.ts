import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FwModule } from 'src/fw/fw.module';
import { Work1Component } from './work1/work1.component';
import { Work2Component } from './work2/work2.component';
import { Work3Component } from './work3/work3.component';
import { Work4Component } from './work4/work4.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { TokenInterceptorService } from './token-interceptor.service';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    Work1Component,
    Work2Component,
    Work3Component,
    Work4Component,
    LoginComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FwModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  providers: [ AuthService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
