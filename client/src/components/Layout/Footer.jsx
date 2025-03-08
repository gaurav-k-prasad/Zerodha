import PropTypes from "prop-types";
import { logo } from "../../assets/Images";
import { footerDesc, footerLinks, footerPolicies } from "../../constants";

const Footer = ({ info = true }) => {
	return (
		<section className="pt-20 bg-[#fbfbfb] border-t-2 border-slate-100">
			<div className="max-container flex flex-col">
				<div className="flex max-md:flex-col gap-10 mb-10">
					<div>
						<img src={logo} alt="Zerodha" width={150} height={19} className="mb-5" />
						<p className="my-1 text-[0.75rem] text-darkgray">
							&copy; 2010 - 2024, Zerodha Broking Ltd.
						</p>
						<p className="my-1 text-[0.75rem] text-darkgray">All rights reserved.</p>
						<div className="mt-5 w-full flex gap-6 text-lg text-lightgray">
							<i className="fa-brands fa-x-twitter hover:text-blue transition cursor-pointer"></i>
							<i className="fa-brands fa-facebook hover:text-blue transition cursor-pointer"></i>
							<i className="fa-brands fa-instagram hover:text-blue transition cursor-pointer"></i>
							<i className="fa-brands fa-linkedin-in hover:text-blue transition cursor-pointer"></i>
						</div>
						<div className="mt-5 w-full flex gap-6 text-lg text-lightgray">
							<i className="fa-brands fa-youtube hover:text-blue transition cursor-pointer"></i>
							<i className="fa-brands fa-whatsapp hover:text-blue transition cursor-pointer"></i>
							<i className="fa-brands fa-telegram hover:text-blue transition cursor-pointer"></i>
						</div>
					</div>

					<div className="flex items-start justify-between max-md:flex-col gap-5 flex-1">
						{footerLinks.map((sec) => (
							<div key={sec.title}>
								<h4 className="font-medium text-darkgray mb-3">{sec.title}</h4>
								<ul className="flex flex-col">
									{sec.links.map((link) => (
										<a
											href={link.href}
											key={link.link}
											className="text-lightgray hover:text-blue leading-7 text-sm font-medium">
											{link.link}
										</a>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{info && (
					<>
						<div>
							{footerDesc.map((text, i) => (
								<div key={i} className="text-[10px] text-gray-500 mb-3  leading-5">
									{text}
								</div>
							))}
						</div>

						<div className="flex flex-wrap gap-5 items-center justify-center font-medium my-3">
							{footerPolicies.map((text) => (
								<a
									key={text}
									className="text-xs text-lightgray mb-3 cursor-pointer hover:text-blue">
									{text}
								</a>
							))}
						</div>
					</>
				)}
			</div>
		</section>
	);
};

Footer.propTypes = {
	info: PropTypes.bool,
};

export default Footer;
