import { createContext } from 'react';
import { Product } from '../types';


interface ProductContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}

export const ProductContext = createContext({} as ProductContextProps)