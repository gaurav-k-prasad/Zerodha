import { aboutLeft, aboutRight } from "../../constants";

const AboutCompany = () => {
	return (
		<section>
			<div className="flex max-container gap-10 min-container mb-10">
				<div className="flex-1">
					{aboutLeft.map((passage, i) => (
						<p className="my-4 text-sm leading-7 text-darkgray" key={i}>{passage}</p>
					))}
				</div>
				<div className="flex-1">
					{aboutRight.map((passage, i) => (
						<p className="my-4 text-sm leading-7 text-darkgray" key={i}>{passage}</p>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutCompany;
