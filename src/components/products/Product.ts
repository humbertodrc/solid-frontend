class Product {
	constructor(
		public id: number,
		public name: string,
		public price: number,
		public description: string
	) {}
}

export class DiscountedProduct extends Product {
	constructor(
		id: number,
		name: string,
		price: number,
		description: string,
		public discountPercentage: number
	) {
		super(id, name, price, description);
	}

	calculateDiscountedPrice(): number {
		return this.price - (this.price * this.discountPercentage) / 100;
	}
}
