import profile from "../img/profile.jpg";
import NavHeader from "./NavHeader";

export default function ProfileHeader() {
	return (
		<div className="w-full lg:flex flex-wrap gap-3 justify-center mt-5">
			<div className="w-full lg:w-auto">
				<img src={profile} alt="profile" className="w-32 h-32 object-cover object-top rounded-full mx-auto border-collapse border-4 border-sky-800" />
			</div>
			<div className="w-full lg:w-auto">
				<h1 className="text-2xl lg:text-4xl text-center font-bold text-sky-800 mt-5">Dimas Ari Prastyo</h1>
				<NavHeader />
			</div>
		</div>
	);
}
