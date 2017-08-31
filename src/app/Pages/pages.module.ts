import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import {MainComponent} from './Main/main.component';


import {CityComponent} from './City/city.component';
import { EventComponent } from './Event/event.component';
import { DateComponent } from './Date/date.component';
import { MoodComponent } from './Mood/mood.component';
import { ResultComponent } from './Result/result.component';

import { DatePickerModule } from 'ng2-datepicker';
import {MdDatepickerModule} from '@angular/material';
const routes: Routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {  path: 'city',  component: CityComponent, },
    { path: 'event',  component: EventComponent },
    { path: 'date',  component: DateComponent },
    { path: 'mood',  component: MoodComponent },
    { path: 'result',  component: ResultComponent },
];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), DatePickerModule],
    declarations: [MainComponent, CityComponent, EventComponent, DateComponent, MoodComponent, ResultComponent],
})
export class PagesModule implements OnInit {
    ngOnInit() {
        // console.log('init2');
    }
}