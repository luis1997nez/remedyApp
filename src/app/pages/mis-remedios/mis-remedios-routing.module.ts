import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisRemediosPage } from './mis-remedios.page';

const routes: Routes = [
  {
    path: '',
    component: MisRemediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisRemediosPageRoutingModule {}
