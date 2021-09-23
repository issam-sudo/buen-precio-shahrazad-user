import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProductsQuickViewComponent } from './products-quick-view/products-quick-view.component';
const FILTER_PAG_REGEX = /[^0-9]/g;


@Component({
  selector: 'app-shahrazad-products',
  templateUrl: './shahrazad-products.component.html',
  styleUrls: ['./shahrazad-products.component.scss']
})
export class ShahrazadProductsComponent implements OnInit {
  pageSize: any = 4;
  page: any = 1;

  listProduct = [{
    id:'0',stateProduct: 'New', image: 'assets/images/products/product-8.jpg', prix: '60', review: 2, subCategorie: 'Women', title: 'Brown paperbag waist pencil skirt', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque',
    imagesList: [{ url: 'assets/images/products/product-8.jpg' }, { url: 'assets/images/products/product-4-2-thumb.jpg' }, { url: 'assets/images/products/product-4-3-thumb.jpg' }]
  },
  {
    id:'1', stateProduct: 'Out of Stock', image: 'assets/images/products/product-4.jpg', prix: '6', review: 1, subCategorie: 'Women', title: 'Brown paperbag waist pencil skirt', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque',
    imagesList: [{ url: 'assets/images/products/product-4.jpg' }, { url: 'assets/images/products/product-4-2-thumb.jpg' }, { url: 'assets/images/products/product-4-3-thumb.jpg' }]
  },
  {
    id:'2', stateProduct: 'Sale', image: 'assets/images/products/product-4.jpg', prix: '60', review: 2, subCategorie: 'Women', title: 'Brown paperbag waist pencil skirt', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque',
    imagesList: [{ url: 'assets/images/products/product-4.jpg' }, { url: 'assets/images/products/product-4-2-thumb.jpg' }, { url: 'assets/images/products/product-4-3-thumb.jpg' }]
  },
  {
    id:'3', stateProduct: 'Top', image: 'assets/images/products/product-4.jpg', prix: '60', review: 7, subCategorie: 'Women', title: 'Brown paperbag waist pencil skirt', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque',
    imagesList: [{ url: 'assets/images/products/product-4.jpg' }, { url: 'assets/images/products/product-5.jpg' }, { url: 'assets/images/products/product-4-3-thumb.jpg' }]
  },
  {
    id:'4', stateProduct: 'Deal of the week', image: 'assets/images/products/product-4.jpg', prix: '6', review: 2, subCategorie: 'Women', title: 'Brown paperbag waist pencil skirt', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque',
    imagesList: [{ url: 'assets/images/products/product-4.jpg' }, { url: 'assets/images/products/product-1.jpg' }, { url: 'assets/images/products/product-4-3-thumb.jpg' }]
  },
  {
    id:'0', stateProduct: null, image: 'assets/images/products/product-4.jpg', prix: '60', review: 1, subCategorie: 'Women', title: 'Brown paperbag waist pencil skirt', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque',
    imagesList: [{ url: 'assets/images/products/product-4.jpg' }, { url: 'assets/images/products/product-6.jpg' }, { url: 'assets/images/products/product-4-3-thumb.jpg' }]
  }]
  imageUrlSelect: any ;
  idSelect: any ;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
   
  openDialog() {
  
    const dialogRef = this.dialog.open(ProductsQuickViewComponent, {
      width: '80%',
 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

changeImage(product:any ,e:any , id:any){
 
  if(product.id == id){
    this.imageUrlSelect = e
    this.idSelect = id
    return this.imageUrlSelect
  }else{
    this.imageUrlSelect = null
    this.idSelect = null
  }

}

getReview(e:any){
  return e*10
}
}
