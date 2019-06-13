import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { FormRoutingModule } from './form-routing.module';

import { ListPersonComponent } from './person/list-person/list-person.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { CreateApplicationComponent } from './application/create-application/create-application.component';
import { ListApplicationComponent } from './application/list-application/list-application.component';
import { CreateClientComponent } from './client/create-client/create-client.component';

const COMPONENTS = [ListPersonComponent, CreatePersonComponent];

@NgModule({
  imports: [SharedModule, FormRoutingModule],
  declarations: [...COMPONENTS, CreateApplicationComponent, ListApplicationComponent, CreateClientComponent],
  entryComponents: [],
  exports: [...COMPONENTS],
})
export class FormModule {}
