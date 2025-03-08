import { main2, main3 } from "../../assets/Images";
import { appInfo } from "../../constants";
import AppInfo from "./AppInfo";

const ZerodhaApps = () => {
	return (
		<section className="pt-24">
			<div className="max-container">
				<div className="flex justify-center items-center max-md:flex-col">
					<div className="md:w-5/12">
						<h1 className="text-3xl font-medium text-darkgray mb-10">Trust with confidence</h1>
						{appInfo.map((app) => (
							<AppInfo key={app.title} title={app.title} content={app.content} />
						))}
					</div>
					<div className="md:w-7/12">
						<img src={main2} alt="Apps" />
						<div className="flex items-center justify-center gap-8">
							<a className="hover:text-darkgray text-blue" href="/products">
								Explore our products <i className="fa-solid fa-arrow-right text-sm"></i>
							</a>
							<a className="hover:text-darkgray text-blue" href="#">
								Try kite demo <i className="fa-solid fa-arrow-right text-sm"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="my-10 max-sm:my-20">
					<img src={main3} alt="" className="mx-auto" />
				</div>
			</div>
		</section>
	);
};

export default ZerodhaApps;
