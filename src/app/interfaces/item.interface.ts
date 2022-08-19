/**
 * Represents an Item in the shopping list
 * @param category
 * @param name
 * @param price
 * @param quantity
 * @param _id
 * @param __v
 */
export class Item {
	_id?: string
	category: string
	name: string
	price: number
	quantity: number
	__v?: number
	constructor(
		category: string,
		name: string,
		price: number,
		quantity: number,
		_id?: string,
		__v?: number
	) {
		this._id = _id
		this.category = category
		this.name = name
		this.price = price
		this.quantity = quantity
		this.__v = __v
	}
}
