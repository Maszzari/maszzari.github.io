import {motion} from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function FlashMessage({msg, closeMsg}) {
	return (
		<motion.div className="w-full p-4 bg-sky-100 rounded-md" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
			<div className="w-full text-sky-800 flex items-center justify-between">
				<h1 className="font-semibold lg:text-xl">{msg}</h1>
        <button onClick={() => closeMsg(false)}><FaTimes/></button>
			</div>
		</motion.div>
	);
}
