import { Link } from "react-router-dom";
import { hamburger, logo } from "../../assets/Images";
import { navLinks } from "../../constants";
import Button from "../General/Button";

const Navbar = () => {
	return (
		<header className="sticky z-10 bg-white w-full border-b-2 border-slate-100 top-0 ">
			<nav className="w-full flex items-center justify-between px-10 py-5 max-container m-auto">
				<Link to="/">
					<img src={logo} alt="Zerodha" width={130} height={80} />
				</Link>
				<div className="flex items-center gap-10">
					<Link to="https://zerodha-dashboard-rho.vercel.app/"><Button text="Dashboard"/></Link>

					<div className="flex items-center gap-10 max-md:hidden text-sm text-slate-600">
						{navLinks.map((link) => (
							<Link key={link.name} to={link.href} className="hover:text-blue">
								{link.name}
							</Link>
						))}
					</div>

					<img src={hamburger} alt="Options" width={24} height={24} className="cursor-pointer" />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
