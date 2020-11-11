import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCatalogoPage } from './home-catalogo.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCatalogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCatalogoPageRoutingModule {}
