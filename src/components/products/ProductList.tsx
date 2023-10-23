import {useContextProduct} from "../../hooks/useContextProduct";
import {ProductItem} from "./ProductItem";

export const ProductList = () => {
	const {products} = useContextProduct();

	return (
		<section>
			<h2 className="text-2xl font-bold">Products</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};
