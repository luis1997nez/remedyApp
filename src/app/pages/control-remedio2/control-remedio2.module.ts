import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlRemedio2PageRoutingModule } from './control-remedio2-routing.module';

import { ControlRemedio2Page } from './control-remedio2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlRemedio2PageRoutingModule
  ],
  declarations: [ControlRemedio2Page]
})
export class ControlRemedio2PageModule {}
