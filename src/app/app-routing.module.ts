/*
<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'app',
   loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./pages/terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'subir-remedio',
    loadChildren: () => import('./pages/subir-remedio/subir-remedio.module').then( m => m.SubirRemedioPageModule)
  },
  {
    path: 'mis-remedios',
    loadChildren: () => import('./pages/mis-remedios/mis-remedios.module').then( m => m.MisRemediosPageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./pages/editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },

=======*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'app',
   loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./pages/terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'subir-remedio',
    loadChildren: () => import('./pages/subir-remedio/subir-remedio.module').then( m => m.SubirRemedioPageModule)
  },
  {
    path: 'mis-remedios',
    loadChildren: () => import('./pages/mis-remedios/mis-remedios.module').then( m => m.MisRemediosPageModule)
  },
  {
    path: 'editar-usuario',
    loadChildren: () => import('./pages/editar-usuario/editar-usuario.module').then( m => m.EditarUsuarioPageModule)
  },
  {
    path: 'home-catalogo',
    loadChildren: () => import('./pages/tienda/home-catalogo/home-catalogo.module').then( m => m.HomeCatalogoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/tienda/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'edit-remedios/:id',
    loadChildren: () => import('./pages/edit-remedios/edit-remedios.module').then( m => m.EditRemediosPageModule)
  },
  {
    path: 'edit-remedios',
    loadChildren: () => import('./pages/edit-remedios/edit-remedios.module').then( m => m.EditRemediosPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'control-user',
    loadChildren: () => import('./pages/control-user/control-user.module').then( m => m.ControlUserPageModule)
  },
  {
    path: 'control-remedio',
    loadChildren: () => import('./pages/control-remedio/control-remedio.module').then( m => m.ControlRemedioPageModule)
  },
  {
    path: 'control-productos',
    loadChildren: () => import('./pages/control-productos/control-productos.module').then( m => m.ControlProductosPageModule)
  },
  {
    path: 'control-user2/:id',
    loadChildren: () => import('./pages/control-user2/control-user2.module').then( m => m.ControlUser2PageModule)
  },
  {
    path: 'control-user2',
    loadChildren: () => import('./pages/control-user2/control-user2.module').then( m => m.ControlUser2PageModule)
  },
  {
    path: 'control-productos2/:id',
    loadChildren: () => import('./pages/control-productos2/control-productos2.module').then( m => m.ControlProductos2PageModule)
  },
  {
    path: 'control-productos2',
    loadChildren: () => import('./pages/control-productos2/control-productos2.module').then( m => m.ControlProductos2PageModule)
  },
  {
    path: 'control-remedio2/:id',
    loadChildren: () => import('./pages/control-remedio2/control-remedio2.module').then( m => m.ControlRemedio2PageModule)
  },
  {
    path: 'control-remedio2',
    loadChildren: () => import('./pages/control-remedio2/control-remedio2.module').then( m => m.ControlRemedio2PageModule)
  },
  {
    path: 'home-catalogo',
    loadChildren: () => import('./pages/tienda/home-catalogo/home-catalogo.module').then( m => m.HomeCatalogoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/tienda/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },


/*
>>>>>>> 76b776a34f7872969d02b875de25c3ec88d04cd3
*/






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
