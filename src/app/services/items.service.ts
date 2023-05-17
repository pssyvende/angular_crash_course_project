/* ZADANIE 7 */
/* W konstruktorze serwisu (ItemsService) narzuć utworzenie serwisu obsługującego koszyk (CartService). W metodzie odpowiedzialnej za dodanie produktu do koszyka wykorzystaj wstrzyknięty serwis i dodaj produkt do koszyka (addToCart) */

import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";

import { Item } from "../../models/item.model";
import { Category } from "../../models/category.model";

import categories from "../../database/categories.json";
import items from "../../database/items.json";

@Injectable({
  providedIn: "root",
})
export class ItemsService {
  constructor() {}

  getCategories(): Category[] {
    return categories;
  }

  getItems(categoryId: number): Item[] {
    return items.filter((item) => item.categoryId === categoryId);
  }

  addToCart(item: Item) {
    console.log('dodano produkt do koszyka');
  }
}
