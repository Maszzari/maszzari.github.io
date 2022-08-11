import {FaGithub, FaFacebook, FaInstagram} from "react-icons/fa";

export default function MySosmed({size = "text-base"}) {
	return (
		<div className={`w-full flex flex-wrap gap-5 py-3 ${size}`}>
			<a href="https://github.com/Maszzari" target={"_blank"} rel={"noreferrer"}>
				<FaGithub className="opacity-75 hover:opacity-100" />
			</a>
			<a href="https://www.facebook.com/profile.php?id=100010822639224" target={"_blank"} rel={"noreferrer"}>
				<FaFacebook className="opacity-75 hover:opacity-100" />
			</a>
			<a href="https://www.instagram.com/ini.dimasreal_/?hl=id" target={"_blank"} rel={"noreferrer"}>
				<FaInstagram className="opacity-75 hover:opacity-100" />
			</a>
		</div>
	);
}
