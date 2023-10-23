import { Product } from '../types';

export const createNewProduct = (formData: FormData) => {
  
  const newProduct: Product = {
    name: formData.get('name')?.toString() || '',
    price: Number(formData.get('price'))
  }

  return newProduct;
}