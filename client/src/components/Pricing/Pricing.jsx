import OpenAccount from "./OpenAccount";
import PricingCards from "./PricingCards";
import PricingHeading from "./PricingHeading";
import Charges from "./Charges";

const Pricing = () => {
	return (
		<>
			<main>
				<PricingHeading />
				<PricingCards />
				<OpenAccount />
				<Charges />
			</main>
		</>
	);
};

export default Pricing;
