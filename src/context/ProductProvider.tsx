import { FC, useEffect, useState } from 'react';
import ProductService from '../components/products/Products';
import { Product } from '../types';
import { ProductContext } from './ProductContext';

interface ProductProviderProps {
  children: React.ReactNode;
}

const productService = new ProductService("http://localhost:3001/products");

const ProductProvider:FC<ProductProviderProps> = ({ children }) => {
  
  const [products, setProducts] = useState<Product[]>([]);


	const fetchProducts = async () => {
		const productsData = await productService.getAllProducts();
		setProducts(productsData);
  };
  
  const addProduct = async (product: Product) => {
    const newProduct = await productService.createProduct(product);
    setProducts([...products, newProduct]);
  };

  const deleteProduct = async (id: number) => {
    await productService.deleteProduct(id);
    fetchProducts();
  };

  const printProducts = async() => {
    const products = await productService.getAllProducts();

    productService.printReport(products)
  }

	useEffect(() => {
    fetchProducts();
    printProducts();
	}, []);


  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      deleteProduct
    }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider