import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlRemedioPage } from './control-remedio.page';

const routes: Routes = [
  {
    path: '',
    component: ControlRemedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlRemedioPageRoutingModule {}
