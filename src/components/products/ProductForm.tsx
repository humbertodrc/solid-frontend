import { useContextProduct } from '../../hooks/useContextProduct';
import { createNewProduct } from '../../utilities';

export const ProductForm = () => {

  const {addProduct} = useContextProduct();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    const newProduct = createNewProduct(formData);

    addProduct(newProduct);

    e.currentTarget.reset();

  };

	return (
		<div className="p-4 w-3/4 mx-auto">
			<form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
				<div className="mb-4">
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
            placeholder="Product name"
            name='name'
					/>
				</div>
				<div className="mb-6">
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="number"
            placeholder="Product price"
            name='price'
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Add product
					</button>
				</div>
			</form>
		</div>
	);
};
