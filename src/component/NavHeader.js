import {NavLink} from "react-router-dom";

export default function NavHeader() {
	return (
		<ul className="w-full flex flex-warp text-sm gap-3 justify-center lg:justify-start lg:text-xl font-medium">
			<NavLink className={({isActive}) => (isActive ? "nav-active" : undefined)} to={"/"}>
				TENTANG
			</NavLink>
			<NavLink className={({isActive}) => (isActive ? "nav-active" : undefined)} to={"/projek"}>
				PROJEK
			</NavLink>
			<NavLink className={({isActive}) => (isActive ? "nav-active" : undefined)} to={"/kontak"}>
				KONTAK
			</NavLink>
		</ul>
	);
}
