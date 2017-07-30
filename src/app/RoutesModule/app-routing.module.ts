import { NgModule }             from '@angular/core';


import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../Pages/Main/main.component';




const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '',  component: MainComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
