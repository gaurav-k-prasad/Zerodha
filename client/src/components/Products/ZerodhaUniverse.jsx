import { zerodhaUniverse } from "../../constants";
import Button from "../General/Button";
import ExtraProducts from "./ExtraProducts";

const ZerodhaUniverse = () => {
	return (
		<section>
			<div className="max-container mt-24">
				<div className="mb-16">
					<h1 className="text-darkgray text-3xl font-semibold text-center my-8">
						The Zerodha Universe
					</h1>
					<p className="text-darkgray text-base text-center">
						Extend your trading and investment experience even further with our partner platforms
					</p>
				</div>

				<div className="grid grid-cols-3 items-center gap-20 max-md:grid-cols-2 max-sm:grid-cols-1">
					{zerodhaUniverse.map((item, i) => (
						<ExtraProducts key={i} img={item.img} text={item.text} />
					))}
				</div>

				<div className="text-center my-14">
					<Button text="Sign up for free" />
				</div>
			</div>
		</section>
	);
};

export default ZerodhaUniverse;
