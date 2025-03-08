import { support } from "../../constants";

const Ticket = () => {
	return (
		<section>
			<div className="max-container max-w-[1250px] mt-16 mb-20">
				<p className="text-xl text-lightgray mb-16">To create a ticket, select a relevant topic</p>
				<div className="grid grid-cols-3 max-md:grid-cols-1">
					{support.map((item) => (
						<div key={item.name} className="mb-8">
							<h5 className="mb-4">
								<a href="/" className="text-darkgray hover:text-blue text-lg">
									<i className={`fa-solid ${item.icon} mr-2`}></i>
									{item.name}
								</a>
							</h5>
							<ul className="ml-6">
								{item.links.map((link) => (
									<li key={link} className="leading-9 text-sm">
										<a href="/" className="text-blue hover:text-darkgray">
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Ticket;
