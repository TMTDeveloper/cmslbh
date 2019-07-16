import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePersonComponent } from './person/create-person/create-person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';

import { CreateApplicationComponent } from './application/create-application/create-application.component';
import { ListApplicationComponent } from './application/list-application/list-application.component';

import { CreateClientComponent } from './client/create-client/create-client.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ConsultationQueueComponent } from './consultation-queue/consultation-queue.component';
import { ListCaseComponent } from './case/list-case/list-case.component';
import { ViewCaseComponent } from './case/view-case/view-case.component';

const routes: Routes = [
  {
    path: 'person',
    children: [{ path: 'create', component: CreatePersonComponent }, { path: 'list', component: ListPersonComponent }],
  },
  {
    path: 'application',
    children: [
      { path: 'create', component: CreateApplicationComponent },
      { path: 'list', component: ListApplicationComponent },
    ],
  },
  {
    path: 'user',
    children: [{ path: 'create', component: CreateUserComponent }, { path: 'list', component: ListUserComponent }],
  },
  {
    path: 'consultation-queue',
    component: ConsultationQueueComponent,
  },
  {
    path: 'case',
    children: [{ path: 'view/:id', component: ViewCaseComponent }, { path: 'list', component: ListCaseComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
