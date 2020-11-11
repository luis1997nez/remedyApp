import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlUserPageRoutingModule } from './control-user-routing.module';

import { ControlUserPage } from './control-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlUserPageRoutingModule
  ],
  declarations: [ControlUserPage]
})
export class ControlUserPageModule {}
