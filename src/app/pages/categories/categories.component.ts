import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Category } from 'src/app/interfaces/categories.interface'
import { ShoppingService } from 'src/app/services/shopping.service'

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements AfterViewInit {
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

	@ViewChild('popup') Popup!: ElementRef<HTMLSpanElement>
	popupMsg = ''
	popupFunc!: Function

	ngAfterViewInit(): void {
		this.Popup.nativeElement.style.borderRadius = '5px'
		this.Popup.nativeElement.style.padding = '20px'
		this.Popup.nativeElement.style.background = 'var(--bs-warning)'
		this.Popup.nativeElement.style.position = 'fixed'
		this.Popup.nativeElement.style.top = '50%'
		this.Popup.nativeElement.style.left = '50%'
		this.Popup.nativeElement.style.transform = 'translate(-50%,-50%)'
		this.Popup.nativeElement.style.display = 'none'
	}

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
		this.popupMsg = 'Deleting a category will also delete all dependent items!'
		this.popupFunc = () => {
			this.Popup.nativeElement.style.display = 'none'
			this.shoppingService.deleteCategory(id).subscribe((data) => {
				if (data) {
					this.Categories = this.Categories.filter((value) => value._id != id)
				} else {
				}
			})
		}
		this.Popup.nativeElement.style.display = 'block'
	}
}
