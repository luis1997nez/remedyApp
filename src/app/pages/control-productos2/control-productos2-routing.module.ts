import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlProductos2Page } from './control-productos2.page';

const routes: Routes = [
  {
    path: '',
    component: ControlProductos2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlProductos2PageRoutingModule {}
