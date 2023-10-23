import { createContext } from 'react';
import { Product } from '../types';

interface ProductContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const ProductContext = createContext({} as ProductContextProps)