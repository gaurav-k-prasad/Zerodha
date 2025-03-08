import PropTypes from "prop-types";
import Button from "../General/Button";

const SignUp = ({ btnText = "Sign up for free", pText, hText, hSize = "text-5xl", pSize = "text-lg" }) => {
	return (
		<div>
			<h1 className={`${hSize} max-sm:text-4xl text-center font-medium space-x-10 mt-8 text-darkgray`}>
				{hText}
			</h1>
			<p className={`text-lightgray text-center my-5 ${pSize} mb-9`}>{pText}</p>

			<div className="text-center">
				<Button text={btnText} />
			</div>
		</div>
	);
};

SignUp.propTypes = {
	btnText: PropTypes.string,
	pText: PropTypes.string.isRequired,
	hText: PropTypes.string.isRequired,
	hSize: PropTypes.string,
	pSize: PropTypes.string,
};

export default SignUp;
