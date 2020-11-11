import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirRemedioPage } from './subir-remedio.page';

const routes: Routes = [
  {
    path: '',
    component: SubirRemedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirRemedioPageRoutingModule {}
