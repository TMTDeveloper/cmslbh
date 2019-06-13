import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './application/application.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';

const routes: Routes = [
  {
    path: 'person',
    children: [{ path: 'create', component: CreatePersonComponent }, { path: 'list', component: ListPersonComponent }],
  },
  { path: 'application', component: ApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
