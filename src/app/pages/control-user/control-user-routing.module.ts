import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlUserPage } from './control-user.page';

const routes: Routes = [
  {
    path: '',
    component: ControlUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlUserPageRoutingModule {}
