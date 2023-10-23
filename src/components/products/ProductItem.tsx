import { FC } from 'react';
import { Product } from '../../types';

interface ProductItemProps {
  product: Product;
}

export const ProductItem:FC<ProductItemProps> = ({product}) => {
  return (
    <div className="border border-gray-500 shadow-md rounded p-4 m-4">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-400">Precio: ${product.price}</p>
    </div>
  )
}