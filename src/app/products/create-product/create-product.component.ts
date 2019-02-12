import { Product } from '../product.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  mode = true;
  private productId: string;
  product: Product;
  errors: string[] = [];
  constructor(public productService: ProductsService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  onCreateProduct(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const newProduct: Product = {
      name: form.value.name,
      type: form.value.type,
      description: form.value.description,
      ingredient1: form.value.ingredient1,
      ingredient2: form.value.ingredient2,
      ingredient3: form.value.ingredient3
    };
    console.log(newProduct);
    this.productService.addProduct(newProduct);
    this.router.navigateByUrl('/recipes');
  }

  onFormReset(form: NgForm) {
    form.resetForm();
    this.router.navigateByUrl('/recipes');
  }

}

