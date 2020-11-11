import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlRemedio2Page } from './control-remedio2.page';

const routes: Routes = [
  {
    path: '',
    component: ControlRemedio2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlRemedio2PageRoutingModule {}
