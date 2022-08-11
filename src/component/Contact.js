import ContactForm from "./ContactForm";
import TransitionPage from "./TransitionPage";

export default function Contact() {

	return (
		<section id="contact" className="mt-24">
			<div className="container overflow-x-hidden">
				<TransitionPage>
					<h2 className="text-lg lg:text-3xl font-semibold lg:text-center">Kontak</h2>
					<p className="text-sm lg:text-xl text-slate-500 max-w-lg lg:mx-auto lg:text-center">Jika ada yang ingin ditanyakan silahkan mengirimkan email dengan cara mengisi form dibawah ini.</p>
					<hr className="mt-3 mb-10" />
					<ContactForm />
				</TransitionPage>
			</div>
		</section>
	);
}
