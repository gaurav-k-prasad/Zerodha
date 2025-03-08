import { benefits } from "../../constants";
import Benefits from "./Benefits";

const Pricing = () => {
	return (
		<section className="pt-20">
			<div className="max-container flex">
				<div>
					<h2 className="font-medium text-3xl text-darkgray">Unbeatable pricing</h2>
					<div className="flex gap-3 max-lg:flex-col items-center justify-between">
						<p className="text-md my-3 mb-5 text-darkgray lg:w-2/5 w-full self-start">
							We pioneered the concept of discount broking and price transparency in India. Flat
							fees and no hidden charges.
						</p>
						<div className="md:w-3/5 flex justify-center mb-5">
							{benefits.map((benefit) => (
								<Benefits img={benefit.img} content={benefit.content} key={benefit.content} />
							))}
						</div>
					</div>
					<a className="hover:text-darkgray text-blue" href="/pricing">
						See pricing <i className="fa-solid fa-arrow-right text-sm"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
