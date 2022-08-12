import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import FlashMessage from "./FalshMessage";
import {AnimatePresence} from "framer-motion";

export default function ContactForm() {
	const form = useRef(null);
	const [flash, setFlash] = useState({
		view: false,
		msg: "",
	});

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_p3isbxv", "template_80e3f79", form.current, "ASm4cQxK9gF9lk4Z4").then(
			(result) => {
				setFlash({
					view: true,
					msg: "Pesan Telah Terkirim👌",
				});

				// setTimeout(() => {
				// 	setFlash({
				// 		view: false,
				// 		msg: "",
				// 	});
				// }, 5000);
				console.log(result.text);
			},
			(error) => {
				setFlash({
					view: true,
					msg: "Pesan Telah Terkirim😭",
				});
				// setTimeout(() => {
				// 	setFlash({
				// 		view: false,
				// 		msg: "",
				// 	});
				// }, 5000);
				console.log(error.text);
			}
		);
	};
	const closeMsg = (param) => {
		setFlash({view: param});
	};

	return (
		<div className="w-full">
			<AnimatePresence>{flash.view && <FlashMessage msg={flash.msg} key={"box"} closeMsg={closeMsg} />}</AnimatePresence>
			<form action="" className="mt-3" ref={form} onSubmit={sendEmail}>
				<div className="w-full flex flex-wrap gap-5">
					<div className="w-full md:w-[calc(100%/2-10px)]">
						<label htmlFor="nd" className="text-sm lg:text-lg font-medium inline-block mb-2">
							Nama Depan
						</label>
						<input type="text" name="nd" id="nd" className="border-2 rounded py-1 px-2 w-full focus:outline-2 focus:outline-sky-500" required />
					</div>
					<div className="w-full md:w-[calc(100%/2-10px)]">
						<label htmlFor="nb" className="text-sm lg:text-lg font-medium inline-block mb-2">
							Nama Belakang
						</label>
						<input type="text" name="nb" id="nb" className="border-2 rounded py-1 px-2 w-full focus:outline-2 focus:outline-sky-500" required />
					</div>
				</div>
				<div className="w-full mt-5">
					<label htmlFor="email" className="text-sm lg:text-lg font-medium inline-block mb-2">
						Email
					</label>
					<input type="email" name="email" id="email" className="border-2 rounded py-1 px-2 w-full focus:outline-2 focus:outline-sky-500" required />
				</div>
				<div className="w-full mt-5">
					<label htmlFor="subjek" className="text-sm lg:text-lg font-medium inline-block mb-2">
						Subjek
					</label>
					<input type="text" name="subjek" id="subjek" className="border-2 rounded py-1 px-2 w-full focus:outline-2 focus:outline-sky-500" required />
				</div>
				<div className="w-full mt-5">
					<label htmlFor="pesan" className="text-sm lg:text-lg inline-block font-medium mb-2">
						Pesan
					</label>
					<textarea name="pesan" id="pesan" rows={10} className="border-2 rounded block w-full p-2 focus:outline-2 focus:outline-sky-500" required></textarea>
				</div>
				<div className="w-full mt-5">
					<button type="submit" className="bg-sky-800 py-2 px-4 rounded-md text-white font-medium block ml-auto lg:text-lg">
						Kirim
					</button>
				</div>
			</form>
		</div>
	);
}
