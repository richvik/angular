import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';


import {MainComponent} from './Main/main.component';


import {CityComponent} from './City/city.component';
import {EventComponent} from './Event/event.component';
import {DateComponent} from './Date/date.component';
import {MoodComponent} from './Mood/mood.component';
import {ResultComponent} from './Result/result.component';

const routes: Routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {path: 'city', pathMatch: 'full', component: CityComponent,},
    {path: 'event', pathMatch: 'full', component: EventComponent},
    {path: 'date', pathMatch: 'full', component: DateComponent},
    {path: 'mood', pathMatch: 'full', component: MoodComponent},
    {path: 'result', pathMatch: 'full', component: ResultComponent},
];


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [MainComponent, CityComponent, EventComponent, DateComponent, MoodComponent, ResultComponent],
})
export class PagesModule implements OnInit {
    ngOnInit() {
        // console.log('init2');
    }
}