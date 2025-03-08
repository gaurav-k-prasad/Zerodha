import PropTypes from "prop-types";
import { person1 } from "../../assets/Images";

const PeopleCard = ({ img = person1, name = "name", role = "ceo" }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-5">
			<img src={img} alt={name} className="rounded-full max-md:w-2/3" width={220} height={220} />
			<div>
				<h4 className="text-center text-lg">{name}</h4>
				<p className="text-center text-sm">{role}</p>
			</div>
		</div>
	);
};

PeopleCard.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
};

export default PeopleCard;
