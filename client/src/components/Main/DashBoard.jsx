import Education from "./Education";
import Invest from "./Invest";
import OpenAccount from "./OpenAccount";
import Pricing from "./Pricing";
import ZerodhaApps from "./ZerodhaApps";

const DashBoard = () => {
	return (
		<>
			<main>
				<Invest />
				<ZerodhaApps />
				<Pricing />
				<Education />
				<OpenAccount />
			</main>
		</>
	);
};

export default DashBoard;
