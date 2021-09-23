import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShahrazadAboutsComponent } from './pages/shahrazad-abouts/shahrazad-abouts.component';
import { ShahrazadAccountsComponent } from './pages/shahrazad-accounts/shahrazad-accounts.component';
import { BlogsDetailsComponent } from './pages/shahrazad-blogs/blogs-details/blogs-details.component';
import { ShahrazadBlogsComponent } from './pages/shahrazad-blogs/shahrazad-blogs.component';
import { ShahrazadBrandsComponent } from './pages/shahrazad-brands/shahrazad-brands.component';
import { ShahrazadCartsComponent } from './pages/shahrazad-carts/shahrazad-carts.component';
import { ShahrazadCheckoutComponent } from './pages/shahrazad-checkout/shahrazad-checkout.component';
import { ShahrazadContactsComponent } from './pages/shahrazad-contacts/shahrazad-contacts.component';
import { ShahrazadContainersComponent } from './pages/shahrazad-containers/shahrazad-containers.component';
import { ShahrazadErrorsComponent } from './pages/shahrazad-errors/shahrazad-errors.component';
import { ShahrazadFaqsComponent } from './pages/shahrazad-faqs/shahrazad-faqs.component';
import { ShahrazadHomeComponent } from './pages/shahrazad-home/shahrazad-home.component';
import { ShahrazadLoginComponent } from './pages/shahrazad-login/shahrazad-login.component';
import { ProductsCategoryComponent } from './pages/shahrazad-products/products-category/products-category.component';
import { ProductsDetailsComponent } from './pages/shahrazad-products/products-details/products-details.component';
import { ProductsFoorColComponent } from './pages/shahrazad-products/products-foor-col/products-foor-col.component';
import { ProductsThreeColComponent } from './pages/shahrazad-products/products-three-col/products-three-col.component';
import { ProductsTwoColComponent } from './pages/shahrazad-products/products-two-col/products-two-col.component';
import { ShahrazadProductsComponent } from './pages/shahrazad-products/shahrazad-products.component';
import { ShahrazadStoresComponent } from './pages/shahrazad-stores/shahrazad-stores.component';
import { ShahrazadWishlistComponent } from './pages/shahrazad-wishlist/shahrazad-wishlist.component';

const routes: Routes = [
  {path:'', component:ShahrazadHomeComponent},


  {
    path: '', component: ShahrazadContainersComponent,  
    children: [
      {path:'about', component:ShahrazadAboutsComponent},
      {path:'contact', component:ShahrazadContactsComponent},
      {path:'faq', component:ShahrazadFaqsComponent},
      {path:'404', component:ShahrazadErrorsComponent},
      {path:'product', component:ShahrazadProductsComponent},
      {path:'product/2col', component:ProductsTwoColComponent},
      {path:'product/3col', component:ProductsThreeColComponent},
      {path:'product/4col', component:ProductsFoorColComponent},
      {path:'cart', component:ShahrazadCartsComponent},
      {path:'product/detail', component:ProductsDetailsComponent},
      {path:'checkout', component:ShahrazadCheckoutComponent},
      {path:'category', component:ProductsCategoryComponent},
      {path:'login', component:ShahrazadLoginComponent},
      {path:'wishlist', component:ShahrazadWishlistComponent},
      {path:'account', component:ShahrazadAccountsComponent},
      {path:'blog', component:ShahrazadBlogsComponent},
      {path:'blog/detail', component:BlogsDetailsComponent},
      {path:'store', component:ShahrazadStoresComponent},
      {path:'brand', component:ShahrazadBrandsComponent},
   
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'shahrazad/404'  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
