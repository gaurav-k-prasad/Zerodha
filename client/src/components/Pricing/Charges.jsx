const Charges = () => {
	return (
		<section className="py-16 mb-28">
			<div className="max-container">
				<div className="flex">
					<div className="w-[70%]">
						<h3 className="text-blue text-2xl text-center mb-8">Brokerage Calculator</h3>
						<ul className="list-disc">
							<li className="mb-3 text-sm text-lightgray">
								Call & trade and RMS auto-squareoff. Additional charges of &#8377; + GST per
								order
							</li>
							<li className="mb-3 text-sm text-lightgray">
								Digital contract notes will be sent via e-mail.
							</li>
							<li className="mb-3 text-sm text-lightgray">
								Physical copies of contract notes. If required, shall be charges &#8377;20 per
								contract note. Courier charges apply.
							</li>
							<li className="mb-3 text-sm text-lightgray">
								For NRI account (non-PISI), 0.5% or &#8377; 100 per executed order for equity
								(whichever is lower).
							</li>
							<li className="mb-3 text-sm text-lightgray">
								for NRI account (PIS), 0.5% or &#8377; per executed for equity (whichever is
								lower)
							</li>
							<li className="mb-3 text-sm text-lightgray">
								If the accout is in debit balance, any order placed will be charges &#8377;40
								per executed order instead of &#8377;20 per executed order
							</li>
						</ul>
					</div>
					<div className="w-[30%]">
						<h3 className="text-blue text-2xl text-center mb-8">List of charges</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Charges;
