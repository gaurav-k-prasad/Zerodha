import { main6 } from "../../assets/Images";

const Education = () => {
	return (
		<section className="pt-20">
			<div className="max-container flex max-md:flex-col gap-20 items-center">
				<div className="md:w-1/2">
					<img src={main6} alt="Varsity" className="m-auto" />
				</div>
				<div className="md:w-1/2 content-center">
					<h1 className="text-3xl font-medium text-darkgray mb-5">
						Free and open market education
					</h1>
					<p className="text-md text-lightgray">
						Varsity, the largest online stock market education book in the world covering
						everything from the basics to advanced trading.
					</p>
					<a href="/" className="text-blue hover:text-darkgray block mt-4 mb-7">
						Varsity <i className="fa-solid fa-arrow-right text-sm"></i>
					</a>
					<p className="text-md text-lightgray">
						TradingQ&A, the most active trading and investment community in India for all your
						market related queries.
					</p>
					<a href="/" className="text-blue hover:text-darkgray block mt-4">
						TradingQ&A <i className="fa-solid fa-arrow-right text-sm"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Education;
