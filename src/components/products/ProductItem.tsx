import { FC } from 'react';
import { Product } from '../../types';

interface ProductItemProps {
  product: Product;
}

export const ProductItem:FC<ProductItemProps> = ({product}) => {
  return (
    <li>{product.name} precio <span className='text-gray-400'>${product.price}</span></li>
  )
}