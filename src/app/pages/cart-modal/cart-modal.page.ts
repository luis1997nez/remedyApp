import { Component, OnInit } from '@angular/core';
import { Product, CartService } from 'src/app/services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
import { PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails } from '@ionic-native/paypal/ngx';


@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})

export class CartModalPage implements OnInit {


  cart: Product[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(private payPal: PayPal, private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

   decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.precio * j.cantidad, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  /*
  checkout() {
    this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'Aa6VvO5RH1taO5i3SYy74rG-iB0SLdzEqnhNF_mqXjNIgeBiWGG2_NYvSL3njgBBFLZKJ0OOYOY6RA2K'
    }).then(() => {
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        // payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        acceptCreditCards: false,
        languageOrLocale: 'pt-MX',
        merchantName: 'RemedyApp',
        merchantPrivacyPolicyURL: '',
        merchantUserAgreementURL: ''
      })).then(() => {
        const detail = new PayPalPaymentDetails('19.99', '0.00', '0.00');
        const payment = new PayPalPayment('3.33', 'peso', 'RemedyApp', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((response) => {
          console.log('pago efectuado');
        }, () => {
          console.log('error en el pago');
        });
      });
    });
  }
*/
}
