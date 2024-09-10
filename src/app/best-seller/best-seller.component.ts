import { Component ,OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CurrencyPipe } from '@angular/common';
import { DescriptionPipe } from '../pipes/description.pipe';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [CurrencyPipe, DescriptionPipe, RouterLink],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent implements OnInit, OnDestroy {
  subscription: any;
  imgDomain: string = '';
  search: string = '';
  products: any[] = []

  constructor(private _AuthService: AuthService, private _ProductsService: ProductsService, private _CartService: CartService) { }

  addToCart(productId: string) {
    this._CartService.addProductToCart(productId).subscribe((res) => { alert('Product Added to cart') })
  }

  ngOnInit(): void {
    this._AuthService.checkToken()
    this.imgDomain = this._ProductsService.imgDomain;
    this.subscription = this._ProductsService.getProducts(16, 1, '-sold', this.search).subscribe((res) => {
      this.products = res.data;
    })
  }

  ngOnDestroy(): void { this.subscription.unsubscribe() }
}
