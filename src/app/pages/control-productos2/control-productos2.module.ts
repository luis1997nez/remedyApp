import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlProductos2PageRoutingModule } from './control-productos2-routing.module';

import { ControlProductos2Page } from './control-productos2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlProductos2PageRoutingModule
  ],
  declarations: [ControlProductos2Page]
})
export class ControlProductos2PageModule {}
