import { createProduct, getProducts, updateProduct } from '../../services/products';
import { Product } from '../../types';

class ProductService{
  private url: string;

  constructor(url: string){
    this.url = url;
  }

  // Metodo para obtener los productos
  async getAllProducts(): Promise<Product[]> {
    try {
      const products = await getProducts(this.url);
      return products;
    } catch (error) {
      console.error(error);
      throw new Error('Error en la obtención de productos');
    }
  }

  // Metodo para obtener un producto por id
  async getProductById(id: number): Promise<Product> {
    try {
      const products = await getProducts(this.url);
      const product = products.find(product => product.id === id);
      if (product) {
        return product;
      } else {
        throw new Error('Producto no encontrado');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Error en la obtención de productos');
    }
  }

  // Metodo para crear un producto
  async createProduct(product: Product): Promise<Product> {
    try {
      const response = await createProduct(this.url, product);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Error en la creación del producto');
    }
  }

  // Metodo para actualizar un producto
  async updateProduct(product: Product): Promise<Product> {
    try {
      const response = await updateProduct(this.url, product);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Error en la actualización del producto');
    }
  }

}

export default ProductService;