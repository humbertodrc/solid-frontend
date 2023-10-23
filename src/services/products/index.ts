import { Product } from '../../types';

export const getProducts = async (url: string):Promise<Product[]> => {

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error en la llamada a la API');
    }

    const data = await response.json();
    return data;

  } catch (error) {
    
    console.log(error);
    throw new Error("Error network");

  }

}

export const createProduct = async (url: string, product: Product): Promise<Product> => {
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Error en la llamada a la API');
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      
      console.log(error);
      throw new Error("Error network");
  
    }
}

export const updateProduct = async (url: string, product: Product): Promise<Product> => {
    
    try {
      const response = await fetch(`${url}/${product.id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Error en la llamada a la API');
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      
      console.log(error);
      throw new Error("Error network");
  
    }
}

export const deleteProduct = async (url: string, id: number): Promise<void> => {
      
      try {
        const response = await fetch(`${url}/${id}`, {
          method: 'DELETE',
        });
    
        if (!response.ok) {
          throw new Error('Error en la llamada a la API');
        }
    
      } catch (error) {
        
        console.log(error);
        throw new Error("Error network");
    
      }
}