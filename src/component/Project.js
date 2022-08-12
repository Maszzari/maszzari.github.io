import ProjectItems from "./ProjectItems";
import TransitionPage from "./TransitionPage";

export default function Project() {
	return (
		<section id="project" className="mt-24 bg-slate-100 py-5">
			<div className="container overflow-x-hidden">
				<TransitionPage>
					<div className="w-full text-center">
						<h2 className="text-lg font-semibold lg:text-2xl">Projek</h2>
						<p className="text-sm lg:text-base mt-2 text-slate-500">Projek yang telah saya buat, terakhir update 3 Agustus 2022</p>
					</div>
					<ProjectItems />
				</TransitionPage>
			</div>
		</section>
	);
}
