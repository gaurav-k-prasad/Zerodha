const QnA = () => {
	return (
		<section className="pt-28 py-24 bg-blue text-white">
			<div className="max-container max-w-[1250px]">
				<div className="flex items-center justify-between mb-10">
					<h3 className="font-semibold text-xl">Support Portal</h3>
					<a href="/" className="text-white underline underline-offset-4">
						Track Tickets
					</a>
				</div>
				<div className="flex md:items-center justify-between gap-16 max-md:flex-col">
					<div className="md:w-7/12">
						<p className="text-2xl font-normal mb-8">
							Search for an answer or browse help topics to create a ticket
						</p>

						<div className="bg-white rounded flex items-center justify-between">
							<input
								type="text"
								placeholder="Eg: How do I activate F&O, Why is my order getting rejected..."
								className="m-4 border-0 text-darkgray focus:outline-0 w-10/12 flex-1"
							/>
							<i className="fa-solid fa-magnifying-glass text-darkgray text-xl p-3 pr-6"></i>
						</div>

						<div className="flex flex-wrap mt-6">
							<a href="/" className="mr-6 font-[300] text-white underline underline-offset-[6px] text-base leading-10">
								Track account opening
							</a>
							<a href="/" className="mr-6 font-[300] text-white underline underline-offset-[6px] text-base leading-10">
								Track segment activation
							</a>
							<a href="/" className="mr-6 font-[300] text-white underline underline-offset-[6px] text-base leading-10">
								Intraday margins
							</a>
							<a href="/" className="mr-6 font-[300] text-white underline underline-offset-[6px] text-base leading-10">
								Kite user manual
							</a>
						</div>
					</div>
					<div className="md:w-5/12">
						<p className="text-xl font-semibold">Featured</p>
						<ol className="list-decimal pl-8 text-wrap">
							<li>
								<a href="" className="text-white underline underline-offset-4 leading-10">
									BSE StAR mutual fund platform downtime
								</a>
							</li>
							<li>
								<a href="" className="text-white underline underline-offset-4 leading-10">
									Surveillance measure on scrips - January 2025
								</a>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default QnA;
