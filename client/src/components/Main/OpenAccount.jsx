import SignUp from "./SignUp";

const OpenAccount = () => {
	return (
		<section className="pt-20">
			<div className="max-container mb-20">
				<SignUp
					hText={"Open a Zerodha account"}
					pText={"Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."}
					hSize="text-4xl"
					pSize="text-md"
				/>
			</div>
		</section>
	);
};

export default OpenAccount;
