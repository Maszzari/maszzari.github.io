import about from "../img/about.png";
import MySosmed from "./MySosmed";
import TransitionPage from "./TransitionPage";

export default function About() {
	return (
		<section id="about" className={`mt-24`}>
			<div className="container overflow-x-hidden">
				<TransitionPage>
					<div className="w-full flex flex-wrap">
						<div className="w-full mb-2">
							<h2 className="text-lg font-semibold lg:text-3xl">Tentang Saya</h2>
						</div>
						<div className="w-full md:w-[40%] self-center">
							<img src={about} alt="about" className="rounded-md shirnk md:" />
						</div>
						<div className="w-full md:w-[calc(60%-28px)] mt-2 md:ml-7 md:mt-0">
							<h3 className="block text-xl lg:text-4xl text-sky-800 font-medium">HAI, SAYA DIMAS,</h3>
							<p className="text-justify text-sm lg:text-xl mt-1">Nama lengkap saya Dimas Ari Prastyo. Saya seorang Junior Web Developer. Saya tinggal di Kesiman, Denpasar Timur, Pendidikan terakhir saya SMK, alumni dari SMK TI Bali Global Denpasar, angktan ke- 13. Hobi saya menolong orang dan kadang juga menyusahkan orang😝.</p>
							<p className="text-sm lg:text-xl mt-3">Mungkin cuma sampai sini saja dulu. Yang mau berteman bisa klik tombol di bawah👇👇👇</p>
							<MySosmed size={"text-xl lg:text-3xl"} />
						</div>
					</div>
				</TransitionPage>
			</div>
		</section>
	);
}
