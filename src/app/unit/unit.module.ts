import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitPageRoutingModule } from './unit-routing.module';

import { UnitPage } from './unit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitPageRoutingModule
  ],
  declarations: [UnitPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnitPageModule {}
