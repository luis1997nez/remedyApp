import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlUser2Page } from './control-user2.page';

const routes: Routes = [
  {
    path: '',
    component: ControlUser2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlUser2PageRoutingModule {}
