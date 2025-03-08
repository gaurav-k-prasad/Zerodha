import AllProducts from "./AllProducts";
import ProductHeading from "./ProductHeading";
import ZerodhaUniverse from "./ZerodhaUniverse";

const Products = () => {
	return (
		<>
			<main>
				<ProductHeading />
				<AllProducts />
				<p className="text-darkgray text-center my-8 text-lg">Want to know more about our technology stack? Check out the <a className="text-blue hover:text-darkgray cursor-pointer font-semibold">Zerodha.tech</a> blog.</p>
				<ZerodhaUniverse />
			</main>
		</>
	);
};

export default Products;
