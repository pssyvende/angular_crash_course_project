/* ZADANIE 5 */
/* W wykorzystanej wcześniej metodzie (onSelectItem) wyemituj nowe wydarzenie. Wydarzenie powinno zawierać informację o identyfikatorze produktu. */

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Item } from '../../../../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item!: Item;
  @Output() newItemSelectedEvent = new EventEmitter<number>();

  onSelectItem(id: number) {
    console.log(`kliknięto w produkt z id: ${id}`);
  }
}
