import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirRemedioPageRoutingModule } from './subir-remedio-routing.module';

import { SubirRemedioPage } from './subir-remedio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ExploreContainerComponentModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SubirRemedioPageRoutingModule
  ],
  declarations: [SubirRemedioPage]
})
export class SubirRemedioPageModule {}
