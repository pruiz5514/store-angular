import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/components/counter/models/product.mode';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ReversePipe],
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
