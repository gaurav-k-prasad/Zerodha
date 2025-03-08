import { main1 } from "../../assets/Images";
import SignUp from "./SignUp";

const Invest = () => {
	return (
		<section className="pt-20 mt-8 max-md:mt-20 relative">
			<div className="max-container w-full flex flex-col justify-center items-center">
				<div className="lg:w-3/4 max-w-[45rem]">
					<img src={main1} alt="Dashboard" />
				</div>
				<SignUp
					pText={
						"Online platform to invest stocks, derivates, mutual funds, ETFs, bonds, and more."
					}
					hText={"Invest in everything"}
				/>
			</div>
		</section>
	);
};

export default Invest;
