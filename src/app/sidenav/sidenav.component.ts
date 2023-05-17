import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  constructor(private itemsService: ItemsService) {}

  categories!: Category[];

  ngOnInit(): void {
    this.categories = this.itemsService.getCategories();
  }
}
