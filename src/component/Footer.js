export default function Footer() {
	return (
		<footer className="mt-24">
			<div className="container">
        <hr />
				<p className="text-center text-xs lg:text-base py-5 text-slate-500">
					&copy;{new Date().getFullYear()} <a href="/" className="text-slate-700 font-medium">Dimas Ari Prastyo</a>❤️
				</p>
			</div>
		</footer>
	);
}
