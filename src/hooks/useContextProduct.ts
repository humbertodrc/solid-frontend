import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export const useContextProduct = () => {
  return useContext(ProductContext);
}