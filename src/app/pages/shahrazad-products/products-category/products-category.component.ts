import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {
  listCategories: any
  constructor() { }

  ngOnInit(): void {
  

    this.listCategories = [{
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Dresses', nbrProduct: 3
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Jackets', nbrProduct: 5
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'T-shirts', nbrProduct: 4
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Jeans', nbrProduct: 2
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Bags', nbrProduct: 8
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Sportwear', nbrProduct: 9
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Jumpers', nbrProduct: 8
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Shoes', nbrProduct: 1
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Shoes', nbrProduct: 1
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Shoes', nbrProduct: 1
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Shoes', nbrProduct: 1
    },
    {
      image: 'assets/images/category/boxed/banner-1.jpg', nameCategorie: 'Shoes', nbrProduct: 1
    }]
  }

}
