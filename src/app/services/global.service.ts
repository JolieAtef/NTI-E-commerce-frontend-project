import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  hostName: string = 'http://localhost:3500';
  authRoute: string = '/api/v1/auth';
  productsRoute: string = '/api/v1/product';
  cartRoute: string = '/api/v1/carts';
  orderRoute: string = '/api/v1/orders';
  wishlistRoute: string = '/api/v1/wishlist';
  reviewsRoute: string = '/api/v1/reviews';
  usersRoute: string = '/api/v1/users';
  productsImages: string = `${this.hostName}/product/`
  userImage: string = `${this.hostName}/users/`
  constructor() { }
}
