import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule,  } from '@ionic/angular';

import { MisRemediosPageRoutingModule } from './mis-remedios-routing.module';

import { MisRemediosPage } from './mis-remedios.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisRemediosPageRoutingModule,
    ExploreContainerComponentModule,
    ComponentsModule,
  ],
  declarations: [MisRemediosPage]
})
export class MisRemediosPageModule {}
