import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { CountdownModule } from 'ng2-date-countdown-inline';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShahrazadFooterComponent } from './layouts/shahrazad-footer/shahrazad-footer.component';
import { ShahrazadHeaderComponent } from './layouts/shahrazad-header/shahrazad-header.component';
import { ShahrazadHeaderHomeComponent } from './layouts/shahrazad-header-home/shahrazad-header-home.component';
import { ShahrazadMobileBarComponent } from './layouts/shahrazad-mobile-bar/shahrazad-mobile-bar.component';
import { ShahrazadMobileBarHomeComponent } from './layouts/shahrazad-mobile-bar-home/shahrazad-mobile-bar-home.component';
import { ShahrazadAboutsComponent } from './pages/shahrazad-abouts/shahrazad-abouts.component';
import { ShahrazadAccountsComponent } from './pages/shahrazad-accounts/shahrazad-accounts.component';
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
import { ShahrazadNewslettersComponent } from './pages/shahrazad-newsletters/shahrazad-newsletters.component';
import { ShahrazadProductsComponent } from './pages/shahrazad-products/shahrazad-products.component';
import { ShahrazadStoresComponent } from './pages/shahrazad-stores/shahrazad-stores.component';
import { ShahrazadWishlistComponent } from './pages/shahrazad-wishlist/shahrazad-wishlist.component';
import { BlogsDetailsComponent } from './pages/shahrazad-blogs/blogs-details/blogs-details.component';
import { ProductsCategoryComponent } from './pages/shahrazad-products/products-category/products-category.component';
import { ProductsDetailsComponent } from './pages/shahrazad-products/products-details/products-details.component';
import { ProductsFoorColComponent } from './pages/shahrazad-products/products-foor-col/products-foor-col.component';
import { ProductsQuickViewComponent } from './pages/shahrazad-products/products-quick-view/products-quick-view.component';
import { ProductsRecommendationComponent } from './pages/shahrazad-products/products-recommendation/products-recommendation.component';
import { ProductsThreeColComponent } from './pages/shahrazad-products/products-three-col/products-three-col.component';
import { ProductsTwoColComponent } from './pages/shahrazad-products/products-two-col/products-two-col.component';
import { HomeBestDealsComponent } from './pages/shahrazad-home/home-best-deals/home-best-deals.component';
import { HomeBestSellersComponent } from './pages/shahrazad-home/home-best-sellers/home-best-sellers.component';
import { HomeBlogsComponent } from './pages/shahrazad-home/home-blogs/home-blogs.component';
import { HomeBrandComponent } from './pages/shahrazad-home/home-brand/home-brand.component';
import { HomePubOneComponent } from './pages/shahrazad-home/home-pub-one/home-pub-one.component';
import { HomePubTwoComponent } from './pages/shahrazad-home/home-pub-two/home-pub-two.component';
 
import { HomeSpecialOffersComponent } from './pages/shahrazad-home/home-special-offers/home-special-offers.component';
import { HomeTrendingComponent } from './pages/shahrazad-home/home-trending/home-trending.component';
import { HomeSliderComponent } from './pages/shahrazad-home/home-slider/home-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ShahrazadFooterComponent,
    ShahrazadHeaderComponent,
    ShahrazadHeaderHomeComponent,
    ShahrazadMobileBarComponent,
    ShahrazadMobileBarHomeComponent,
    ShahrazadAboutsComponent,
    ShahrazadAccountsComponent,
    ShahrazadBlogsComponent,
    ShahrazadBrandsComponent,
    ShahrazadCartsComponent,
    ShahrazadCheckoutComponent,
    ShahrazadContactsComponent,
    ShahrazadContainersComponent,
    ShahrazadErrorsComponent,
    ShahrazadFaqsComponent,
    ShahrazadHomeComponent,
    ShahrazadLoginComponent,
    ShahrazadNewslettersComponent,
    ShahrazadProductsComponent,
    ShahrazadStoresComponent,
    ShahrazadWishlistComponent,
    BlogsDetailsComponent,
    ProductsCategoryComponent,
    ProductsDetailsComponent,
    ProductsFoorColComponent,
    ProductsQuickViewComponent,
    ProductsRecommendationComponent,
    ProductsThreeColComponent,
    ProductsTwoColComponent,
    HomeBestDealsComponent,
    HomeBestSellersComponent,
    HomeBlogsComponent,
    HomeBrandComponent,
    HomePubOneComponent,
    HomePubTwoComponent,
 
    HomeSpecialOffersComponent,
    HomeTrendingComponent,
    HomeSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    CountdownModule,
    MatDialogModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
