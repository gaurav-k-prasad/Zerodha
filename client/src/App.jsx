import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { DashBoard } from "./components/Main";
import { Footer, Navbar } from "./components/Layout";
import { Pricing } from "./components/Pricing";
import { Products } from "./components/Products";
import { SignUp } from "./components/SignUp";
import { Support } from "./components/Support";
import NotFound from "./components/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<DashBoard />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/products" element={<Products />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/support" element={<Support />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;

