/**
 * Represents a category of items
 * @param name
 * @param _id
 */
export class Category {
	_id?: string
	name: string
	constructor(name: string, _id?: string) {
		this._id = _id
		this.name = name
	}
}
