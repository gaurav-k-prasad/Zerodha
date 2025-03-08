import PropTypes from "prop-types";

const ProductCard = ({ img, title, text, links, icons, i = 0 }) => {
	return (
		<div className="pt-20 flex items-center justify-between md:gap-20 gap-3 max-md:flex-col lg:min-h-[600px]">
			<div className="md:w-5/12 flex-1 md:hidden">
				<img src={img} alt={title} />
			</div>

			{i % 2 == 0 && 
				<div className="md:w-5/12 flex-1 max-md:hidden">
					<img src={img} alt={title} />
				</div>
			}

			<div className="md:w-6/12 md:max-w-96 flex-1">
				<h3 className="text-3xl font-semibold text-darkgray my-5">{title}</h3>
				<p className="text-lightgray leading-8">{text}</p>
				{links && (
					<div className="flex md:items-center justify-start my-4 max-md:flex-col">
						{links.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-blue hover:text-darkgray flex-1 my-1">
								{link.name} <i className="fa-solid fa-arrow-right"></i>
							</a>
						))}
					</div>
				)}
				{icons &&
					icons.map((icon) => (
						<span key={icon.text}>
							<img src={icon.img} height={40} className="inline-block m-2 ml-0" />
						</span>
					))}
			</div>

			{i % 2 == 1 && 
				<div className="md:w-5/12 flex-1 max-md:hidden">
					<img src={img} alt={title} />
				</div>
			}
		</div>
	);
};

ProductCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(PropTypes.object),
	icons: PropTypes.arrayOf(PropTypes.object),
	i: PropTypes.number,
};

export default ProductCard;
