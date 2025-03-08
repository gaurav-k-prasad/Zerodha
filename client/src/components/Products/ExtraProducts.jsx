import PropTypes from 'prop-types';

const ExtraProducts = ({ img, text }) => {
	return (
		<div className="h-full max-w-56 relative mx-auto">
			<img src={img} alt="Product" className="mb-5 m-auto h-16" />
			<p className="text-xs text-center text-lightgray">{text}</p>
		</div>
	);
};

ExtraProducts.propTypes = {
	img: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default ExtraProducts;
