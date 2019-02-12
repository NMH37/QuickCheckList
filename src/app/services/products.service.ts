import { Product } from '../products/product.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private product: Product;
  private productUpdated = new Subject<Product[]>();
  private products: Product[] = [
    {
      _id: 'weriweru', name: 'Orange Chicken',
      type: 'https://images.media-allrecipes.com/userphotos/720x405/6324232.jpg',
      description: 'chinese',
      ingredient1: 'Chicken', ingredient2: ' Corn Flour', ingredient3: 'Oil'
    },
    {
      _id: 'asddad', name: 'White Bread',
      type: 'https://images.media-allrecipes.com/userphotos/560x315/6250174.jpg', description: 'Bakery',
      ingredient1: 'Yeast', ingredient2: ' Flour', ingredient3: 'Oil'

    },
    {
      _id: '38264dabs', name: 'Mac Cheese',
      type: 'https://images.media-allrecipes.com/userphotos/720x405/5193809.jpg', description: 'American',
      ingredient1: 'Cheese', ingredient2: ' Elbow Macroni', ingredient3: 'Milk'

    },
    {
      _id: 'eq3287', name: 'Lemon Chicken',
      type: 'https://images.media-allrecipes.com/images/52069.jpg?width=420&height=237', description: 'Continental',
      ingredient1: 'Chicken', ingredient2: ' Lemon', ingredient3: 'Creme'

    },
    {
      _id: '3ehbj3h', name: 'Hummus',
      type: 'https://images.media-allrecipes.com/userphotos/720x405/414663.jpg', description: 'Mediteranian',
      ingredient1: 'Chick Peas', ingredient2: ' Lemon', ingredient3: 'Oil'

    },
  ];

  constructor(private router: Router) { }


  getProducts() {
    return [...this.products];
  }
  getProduct(id: string) {
    this.product = this.products.find(product => product._id === id);
    return { ...this.product };

  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productUpdated.next([...this.products]);
  }

  deleteProduct(id: string) {
    this.products = this.products.filter(product => product._id !== id);
    this.productUpdated.next([...this.products]);
    this.router.navigate(['/']);
  }
  getProductUpdates() {
    return this.productUpdated.asObservable();
  }
}
