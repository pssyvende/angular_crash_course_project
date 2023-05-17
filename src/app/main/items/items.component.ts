/* ZADANIE 6 */
/* Po znalezieniu produktu z odpowiadającym przesłanemu numerowi identyfikatorem, wykorzystaj dostępny serwis (ItemsService) i dodaj produkt do koszyka (addToCart) */

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../../services/items.service";

import { Item } from "../../../models/item.model";
import { map } from "rxjs";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"],
})
export class ItemsComponent implements OnInit {
  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) {}

  items!: Item[];

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((params) => Number(params.get("categoryId"))))
      .subscribe((categoryId) => {
        this.items = this.itemsService.getItems(categoryId);
      });
  }

  onSelectItem(id: number) {
    let selectedItem = this.items.find((item) => item.id === id);
    if (selectedItem) {
    }
  }

  isActive(): boolean {
    return !!this.items.length;
  }
}
