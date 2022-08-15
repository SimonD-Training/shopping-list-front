import { Component, ElementRef, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/categories.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss'],
})
export class ShoplistComponent implements OnInit {
  listArray: { class: string; toggle: boolean }[] = [];
  Items: Item[] = [];
  Categories: Category[] = [];
  newItem: any = {};
  constructor(private shoppingService: ShoppingService) {
    shoppingService.getItems().subscribe((data) => {
      this.Items = data ?? [];
      this.Items?.forEach(() => {
        this.listArray.push({ class: 'fa fa-pencil', toggle: true });
      });
    });
    shoppingService.getCategories().subscribe((data) => {
      this.Categories = data ?? [];
    });
  }

  ngOnInit(): void {}

  createItem(item: Item) {
    if (
      item.category == undefined ||
      item.name == undefined ||
      item.price == undefined ||
      item.price < 1 ||
      item.quantity == undefined ||
      item.quantity < 1
    )
      return;
      console.log(item);
      
    this.shoppingService.createItem(item).subscribe((data) => {
      if (data) {
        this.Items.push(data);
        this.listArray.push({ class: 'fa fa-pencil', toggle: true });
        this.newItem = {};
      } else {
      }
    });
  }

  mark(row: HTMLTableRowElement) {
    row.classList.toggle("marked");
  }

  updateItem(id: string, item: Item) {
    this.shoppingService.updateItem(id, item).subscribe((data) => {
      if (data) {
      } else {
      }
    });
  }

  deleteItem(id: string) {
    this.shoppingService.deleteItem(id).subscribe((data) => {
      if (data) {
        this.Items = this.Items.filter(value=>value._id != id);
      } else {
      }
    });
  }
}
