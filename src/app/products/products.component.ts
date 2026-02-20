import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { name: 'Ibanez Alpha A527', price: 1899.99, available: true },
    { name: 'PRS SE CE24 Standard', price: 579.00, available: true },
    { name: 'Martin Super D-18', price: 2799.00, available: false },
    { name: 'Fender Vintera II Strat', price: 1149.99, available: true }
  ];

  addToCart(product: any) {
    alert(product.name + ' added to cart!');
  }
}
