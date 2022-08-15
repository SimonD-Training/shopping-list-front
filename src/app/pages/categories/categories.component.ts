import { Component, OnInit } from '@angular/core'
import { Category } from 'src/app/interfaces/categories.interface'
import { ShoppingService } from 'src/app/services/shopping.service'

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
	listArray: { class: string; toggle: boolean }[] = []
	Categories: Category[] = []
	newCat: any = {}
	constructor(private shoppingService: ShoppingService) {
		shoppingService.getCategories().subscribe((data) => {
			this.Categories = data ?? []
			this.Categories?.forEach(() => {
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
			})
		})
	}

	ngOnInit(): void {}

	createCategory(category: Category) {
		if (category.name == undefined) return
		this.shoppingService.createCategory(category).subscribe((data) => {
			if (data) {
				this.Categories.push(data)
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
				this.newCat = {}
			} else {
			}
		})
	}

	updateCategory(id: string, category: Category) {
		this.shoppingService.updateCategory(id, category).subscribe((data) => {
			if (data) {
			} else {
			}
		})
	}

	deleteCategory(id: string) {
		this.shoppingService.deleteCategory(id).subscribe((data) => {
			if (data) {
				this.Categories = this.Categories.filter((value) => value._id != id)
			} else {
			}
		})
	}
}
