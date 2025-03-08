import { ceo } from "../../assets/Images";

const Ceo = () => {
	return (
		<div className="flex items-start justify-between max-md:flex-col max-md:justify-center mb-32">
			<div className="md:w-5/12 m-auto">
				<img
					src={ceo}
					alt="Founder, CEO Nithin Kamath"
					className="rounded-full m-auto max-md:w-3/4"
					width={260}
					height={260}
				/>
				<br />
				<p className="text-center mb-4 text-lg text-darkgray">Nithin Kamath</p>
				<p className="text-center text-xs text-lightgray">Founder, CEO</p>
			</div>
			<div className="flex flex-col gap-5 md:w-7/12 text-darkgray text-sm leading-7 mt-3">
				<p>
					Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during
					his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian
					broking industry.
				</p>
				<p>
					He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data
					Advisory Committee (MDAC).
				</p>
				<p>Playing basketball is his zen.</p>
				<p>
					Connect on <span className="text-blue hover:text-darkgray cursor-pointer font-semibold">Homepage</span> / <span className="text-blue hover:text-darkgray cursor-pointer font-semibold">TradingQnA</span> / <span className="text-blue hover:text-darkgray cursor-pointer font-semibold">Twitter</span>
				</p>
			</div>
		</div>
	);
};

export default Ceo;
