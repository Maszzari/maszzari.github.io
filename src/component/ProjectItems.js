import porojek1 from "../img/projek1.png";

export default function ProjectItems() {
	return (
		<div className="w-full flex flex-wrap mt-7 gap-5">
			<div className="w-full md:w-[calc(100%/2-10px)] lg:w-[calc((100%/3)-(20px-(20px/3)))] text-center">
				<img src={porojek1} alt="projek 1" />
				<a href="/" className="font-medium text-base lg:text-xl text-sky-800 inline-block mt-3">Membuat Portofolio</a>
				<span className="text-xs lg:text-sm text-slate-400 block">3 Agustus 2022</span>
			</div>
		</div>
	);
}
