import { employees } from "../../constants";
import Ceo from "./Ceo";
import PeopleCard from "./PeopleCard";

const People = () => {
	return (
		<section>
			<div className="max-container mb-24">
				<h1 className="text-3xl font-medium text-darkgray text-center mb-20">People</h1>
				<div>
					<Ceo />

					<div className="grid grid-cols-3 gap-20 max-md:grid-cols-1">
						{employees.map((emp) => (
							<PeopleCard key={emp.name} name={emp.name} role={emp.post} img={emp.img} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default People;
