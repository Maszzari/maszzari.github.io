import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import HeaderComp from "./Header";
import Project from "./Project";
import {Routes, Route, useLocation} from "react-router-dom";
import NotFound from "./NotFound";
import {AnimatePresence} from "framer-motion";
import { useEffect } from "react";

export default function App() {
	let location = useLocation();
	useEffect(() => {
		document.title ="Dimas Ari Prastyo | Portofolio"
	}, [])
	return (
		<div className="app">
			<HeaderComp />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<About />} />
					<Route path="/projek" element={<Project />} />
					<Route path="/kontak" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</div>
	);
}
