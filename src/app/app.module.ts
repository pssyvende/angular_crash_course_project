import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ItemsComponent } from './main/items/items.component';
import { HomeComponent } from './main/home/home.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './main/items/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    MainComponent,
    ItemsComponent,
    HomeComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
