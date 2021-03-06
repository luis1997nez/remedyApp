import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, nombre: 'Lavanda', descripcion: 'Planta', precio: 8.99, cantidad: 0 },
    { id: 1, nombre: 'Aloe', descripcion: 'Planta', precio: 8.99, cantidad: 0 },
    { id: 2, nombre: 'Hoja de plátano', descripcion: 'Planta', precio: 8.99, cantidad: 0 },
    { id: 3, nombre: 'Manzanilla', descripcion: 'Planta', precio: 8.99, cantidad: 0 }
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }
  getCart() {
    return this.cart;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.cantidad += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.cantidad += 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
decreaseProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.cantidad -= 1;
        if (p.cantidad === 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
removeProduct(product) {
    for (const [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.cantidad);
        this.cart.splice(index, 1);
      }
    }
  }
}

