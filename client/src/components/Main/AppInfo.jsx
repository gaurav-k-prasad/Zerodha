import PropTypes from "prop-types";

const AppInfo = ({ title, content }) => {
	return (
		<div>
			<h3 className="font-medium text-xl text-darkgray">{title}</h3>
			<p className="text-md my-3 mb-8 text-lightgray">{content}</p>
		</div>
	);
};

AppInfo.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
};

export default AppInfo;
