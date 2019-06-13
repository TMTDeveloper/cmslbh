import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { FormRoutingModule } from './form-routing.module';

import { ApplicationComponent } from './application/application.component';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';

const COMPONENTS = [ApplicationComponent, ListPersonComponent, CreatePersonComponent];

const COMPONENTS_NOROUNT = [ApplicationComponent];

@NgModule({
  imports: [SharedModule, FormRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [...COMPONENTS],
})
export class FormModule {}
