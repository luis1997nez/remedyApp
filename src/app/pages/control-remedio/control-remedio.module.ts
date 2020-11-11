import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlRemedioPageRoutingModule } from './control-remedio-routing.module';

import { ControlRemedioPage } from './control-remedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlRemedioPageRoutingModule
  ],
  declarations: [ControlRemedioPage]
})
export class ControlRemedioPageModule {}
