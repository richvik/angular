import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './RoutesModule/app-routing.module';

import { AppComponent } from './app.component';

import {GlobalService} from './Service/global-service.service';

import {PagesModule} from './Pages/pages.module'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// pages

@NgModule({
  imports: [BrowserModule, PagesModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [GlobalService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
