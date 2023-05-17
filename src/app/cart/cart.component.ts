import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { Item } from "../../models/item.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  items!: Item[];
  itemsSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.itemsSubscription = this.cartService.items.subscribe((items) => {
      this.items = items;
    });
    this.cartService.reloadItemsFromLocalStorage();
  }
}
