import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/components/counter/models/product.mode';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    @Input({required:true}) product!: Product;
  // @Input({required:true}) img: string = '';
  // @Input() price: number = 0;
  // @Input() title: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    this.addToCart.emit(this.product)
  }
}
