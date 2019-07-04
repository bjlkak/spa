import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FwModule } from 'src/fw/fw.module';
import { Work1Component } from './work1/work1.component';
import { Work2Component } from './work2/work2.component';
import { Work3Component } from './work3/work3.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    Work1Component,
    Work2Component,
    Work3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FwModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
