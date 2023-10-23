import { useState, useEffect, FC } from 'react';
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
		const products = await productService.getAllProducts();
		setProducts(products);
  };
  
  const addProduct = async (product: Product) => {
    const newProduct = await productService.createProduct(product);
    setProducts([...products, newProduct]);
  };

	useEffect(() => {
		fetchProducts();
	}, []);


  return (
    <ProductContext.Provider value={{
      products,
      addProduct
    }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider