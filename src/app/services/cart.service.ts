import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Item } from "../../models/item.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items = new Subject<Item[]>();

  addToCart(item: Item) {
    let cartJSON = localStorage.getItem("cart");

    if (cartJSON) {
      let items: Item[] = JSON.parse(cartJSON);
      localStorage.setItem("cart", JSON.stringify([...items, item]));
    } else {
      localStorage.setItem("cart", JSON.stringify([item]));
    }
    this.reloadItemsFromLocalStorage();
  }

  reloadItemsFromLocalStorage(): void {
    let items = [];
    let cartJSON = localStorage.getItem("cart");
    if (cartJSON) {
      items = JSON.parse(cartJSON);
    }
    this.items.next(items);
  }
}
