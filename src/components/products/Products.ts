import {
	createProduct,
	deleteProduct,
	getProducts,
	updateProduct,
} from "../../services/products";
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
			const products = await getProducts(this.url);
			return products;
		} catch (error) {
			console.error(error);
			throw new Error("Error en la obtención de productos");
		}
	}

	// Metodo para obtener un producto por id
	async getProductById(id: number): Promise<Product> {
		try {
			const products = await getProducts(this.url);
			const product = products.find((product) => product.id === id);
			if (product) {
				return product;
			} else {
				throw new Error("Producto no encontrado");
			}
		} catch (error) {
			console.error(error);
			throw new Error("Error en la obtención de productos");
		}
	}

	// Metodo para crear un producto
	async createProduct(product: Product): Promise<Product> {
		try {
			const response = await createProduct(this.url, product);
			return response;
		} catch (error) {
			console.error(error);
			throw new Error("Error en la creación del producto");
		}
	}

	// Metodo para actualizar un producto
	async updateProduct(product: Product): Promise<Product> {
		try {
			const response = await updateProduct(this.url, product);
			return response;
		} catch (error) {
			console.error(error);
			throw new Error("Error en la actualización del producto");
		}
	}

	// Metodo para eliminar un producto
	async deleteProduct(id: number): Promise<void> {
    try {
      const response = await deleteProduct(this.url, id);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Error en la eliminación del producto");
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
