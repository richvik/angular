import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './RoutesModule/app-routing.module';

import { AppComponent } from './app.component';

import {GlobalService} from './Service/global-service.service';

import {PagesModule} from './Pages/pages.module'

// pages

@NgModule({
  imports: [BrowserModule, PagesModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
