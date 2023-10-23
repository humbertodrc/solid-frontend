import {useContextProduct} from "../../hooks/useContextProduct";
import {ProductItem} from "./ProductItem";

export const ProductList = () => {
	const {products} = useContextProduct();

	return (
		<section>
			<h2 className="text-2xl font-bold">Products</h2>
			<ul>
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};
