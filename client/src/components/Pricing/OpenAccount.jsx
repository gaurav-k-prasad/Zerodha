import Button from "../General/Button";

const OpenAccount = () => {
	return (
		<section className="p-36 text-center">
			<div className="max-container">
				<h2 className="font-semibold text-4xl text-darkgray m-2">Open a Zerodha Account</h2>
				<p className="m-2 mb-8">Modern platform and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
				<Button text={"Sign up Now"} />
			</div>
		</section>
	);
};

export default OpenAccount;
