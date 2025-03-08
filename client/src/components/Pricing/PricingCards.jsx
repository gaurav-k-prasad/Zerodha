import { main4, main5 } from "../../assets/Images";

const PricingCards = () => {
	return (
		<section className="pt-20 md:pt-48">
			<div className="max-container grid grid-cols-3 max-md:grid-cols-1 gap-14">
				<div className="text-center">
					<img src={main4} alt="" className="max-md:w-44 m-auto w-60 mb-10" />
					<h3 className="tracking-wide mb-6 text-2xl font-semibold text-darkgray">Free equity delivery</h3>
					<p className="text-base leading-6 text-lightgray">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
				</div>
				<div className="text-center">
					<img src={main5} alt="" className="max-md:w-44 m-auto w-60 mb-10" />
					<h3 className="tracking-wide mb-6 text-2xl font-semibold text-darkgray">Intraday and F&O trades</h3>
					<p className="text-base leading-6 text-lightgray">
						Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across
						equity, currency, and commodity trades. Flat ₹20 on all option trades.
					</p>
				</div>
				<div className="text-center">
					<img src={main4} alt="" className="max-md:w-44 m-auto w-60 mb-10" />
					<h3 className="tracking-wide mb-6 text-2xl font-semibold text-darkgray">Free direct MF</h3>
					<p className="text-base leading-6 text-lightgray">
						All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
					</p>
				</div>
			</div>
		</section>
	);
};

export default PricingCards;
