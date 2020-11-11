import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRemediosPage } from './edit-remedios.page';

const routes: Routes = [
  {
    path: '',
    component: EditRemediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRemediosPageRoutingModule {}
