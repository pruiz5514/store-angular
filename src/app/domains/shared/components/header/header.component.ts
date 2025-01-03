import { Component, inject, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from '../counter/models/product.mode';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }

}
