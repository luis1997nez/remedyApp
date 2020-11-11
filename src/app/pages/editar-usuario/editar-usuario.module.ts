import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarUsuarioPageRoutingModule } from './editar-usuario-routing.module';

import { EditarUsuarioPage } from './editar-usuario.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarUsuarioPageRoutingModule,
    ExploreContainerComponentModule,
    ComponentsModule
  ],
  declarations: [EditarUsuarioPage]
})
export class EditarUsuarioPageModule {}
