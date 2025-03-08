const ProductHeading = () => {
	return (
		<section className="pt-20 mt-10 max-md:mt-20 relative">
			<div className="min-container w-full flex flex-col justify-center items-center border-b-2 border-slate-50 pb-20">
				<h1 className="text-4xl max-sm:text-4xl text-center font-medium space-x-10 mt-8 text-darkgray">
					Zerodha Products
				</h1>
				<p className="my-5 text-darkgray">Sleek, modern, and intuitive trading platforms</p>
				<p className="text-sm text-darkgray">
					Check out our
					<a href="/" className="text-blue hover:text-darkgray font-medium">
						{" "}
						Investment offering &rarr;
					</a>
				</p>
			</div>
		</section>
	);
};

export default ProductHeading;
