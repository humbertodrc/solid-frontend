import { Product } from "../../types";

interface IProductService {
	getAllProducts(): Promise<Product[]>;
	getProductById(id: number): Promise<Product>;
	createProduct(product: Product): Promise<Product>;
	updateProduct(product: Product): Promise<Product>;
	deleteProduct(id: number): Promise<void>;
	printReport(products: Product[]): void;
}

class ProductService implements IProductService {
	private url: string;

	constructor(url: string) {
		this.url = url;
	}

	// Metodo para obtener los productos
	async getAllProducts(): Promise<Product[]> {
		try {
			const response = await fetch(this.url);
	
			if (!response.ok) {
				throw new Error("Error en la llamada a la API");
			}
	
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
			throw new Error("Error network");
		}
	}

	// Metodo para obtener un producto por id
	async getProductById(id: number): Promise<Product> {
		try {
			const response = await fetch(`${this.url}/${id}`);
	
			if (!response.ok) {
				throw new Error("Error en la llamada a la API");
			}
	
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
			throw new Error("Error network");
		}
	}

	// Metodo para crear un producto
	async createProduct(product: Product): Promise<Product> {
		try {
			const response = await fetch(this.url, {
				method: "POST",
				body: JSON.stringify(product),
				headers: {
					"Content-Type": "application/json",
				},
			});
	
			if (!response.ok) {
				throw new Error("Error en la llamada a la API");
			}
	
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
			throw new Error("Error network");
		}
	}

	// Metodo para actualizar un producto
	async updateProduct(product: Product): Promise<Product> {
		try {
			const response = await fetch(`${this.url}/${product.id}`, {
				method: "PUT",
				body: JSON.stringify(product),
				headers: {
					"Content-Type": "application/json",
				},
			});
	
			if (!response.ok) {
				throw new Error("Error en la llamada a la API");
			}
	
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
			throw new Error("Error network");
		}
	}

	// Metodo para eliminar un producto
	async deleteProduct(id: number): Promise<void> {
		try {
			const response = await fetch(`${this.url}/${id}`, {
				method: "DELETE",
			});
	
			if (!response.ok) {
				throw new Error("Error en la llamada a la API");
			}
		} catch (error) {
			console.log(error);
			throw new Error("Error network");
		}
	}

  // Metodo para imprimir un reporte de productos
	printReport(products: Product[]): void {
		console.log("Reporte de productos");
		console.log("====================");
		products.forEach((product) => {
			console.log(`Nombre: ${product.name}`);
			console.log(`Precio: ${product.price}`);
			console.log("-------------------");
		});
	}
}

export default ProductService;
