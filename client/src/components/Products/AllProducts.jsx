import { products } from "../../constants";
import ProductCard from "./ProductCard";

const AllProducts = () => {
	return (
		<div className="max-container">
			{products.map((product, i) => (
				<ProductCard
					icons={product.icons}
					img={product.img}
					links={product.links}
					text={product.text}
					title={product.title}
					key={product.title}
					i={i}
				/>
			))}
		</div>
	);
};

export default AllProducts;
