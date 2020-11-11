import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRemediosPageRoutingModule } from './edit-remedios-routing.module';

import { EditRemediosPage } from './edit-remedios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRemediosPageRoutingModule
  ],
  declarations: [EditRemediosPage]
})
export class EditRemediosPageModule {}
