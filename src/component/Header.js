import { useEffect, useState } from "react";
import MySosmed from "./MySosmed";
import ProfileHeader from "./ProfileHeader";

export default function HeaderComp() {
	const [wScroll, setWScroll] = useState(0)
	useEffect(() => {
		const onScroll = () => setWScroll(window.pageYOffset);
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [wScroll])

	return (
		<header className={`w-full`}>
			<div className="container">
				<MySosmed size={'text-xl'}/>
				<ProfileHeader />
			</div>
		</header>
	);
}
