import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCatalogoPageRoutingModule } from './home-catalogo-routing.module';

import { HomeCatalogoPage } from './home-catalogo.page';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCatalogoPageRoutingModule
  ],
  declarations: [HomeCatalogoPage],
  providers: [
    PayPal
  ]
})
export class HomeCatalogoPageModule {}
