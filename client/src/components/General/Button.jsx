import PropTypes from "prop-types";

const Button = ({ bgColor = "bg-blue", text }) => {
	return (
		<button className={`${bgColor} text-white py-2 px-6 rounded-md font-medium font-roboto hover:bg-darkgray`}>
			{text}
		</button>
	);
};

Button.propTypes = {
	bgColor: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default Button;
