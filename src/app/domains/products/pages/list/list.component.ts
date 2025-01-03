import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/components/counter/models/product.mode';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/cnne-1237032-03-time-out-worlds-best-cities-2022-medellin.jpg?c=original',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 100,
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/cnne-1237032-03-time-out-worlds-best-cities-2022-medellin.jpg?c=original',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts)
  }

  addToCart(product: Product){
    this.cartService.addToCart(product)
  }
}
