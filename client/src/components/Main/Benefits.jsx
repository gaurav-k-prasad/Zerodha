import PropTypes from "prop-types";

const Benefits = ({ img, content }) => {
	return (
		<div className="flex items-center">
			<img src={img} alt="Benefits" width={110} height={110} />
			<p className={`text-lightgray text-[9px] max-w-[110px] -left-3 relative`}>{content}</p>
		</div>
	);
};

Benefits.propTypes = {
	img: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

export default Benefits;
