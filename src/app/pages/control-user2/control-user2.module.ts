import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlUser2PageRoutingModule } from './control-user2-routing.module';

import { ControlUser2Page } from './control-user2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlUser2PageRoutingModule
  ],
  declarations: [ControlUser2Page]
})
export class ControlUser2PageModule {}
