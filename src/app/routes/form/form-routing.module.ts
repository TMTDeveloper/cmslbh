import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePersonComponent } from './person/create-person/create-person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';

import { CreateApplicationComponent } from './application/create-application/create-application.component';
import { ListApplicationComponent } from './application/list-application/list-application.component';

import { CreateClientComponent } from './client/create-client/create-client.component';

const routes: Routes = [
  {
    path: 'person',
    children: [{ path: 'create', component: CreatePersonComponent }, { path: 'list', component: ListPersonComponent }],
  },
  {
    path: 'application',
    children: [
      { path: 'create', component: CreateApplicationComponent },
      { path: 'list', component: CreateClientComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
