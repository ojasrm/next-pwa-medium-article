import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark align-middle p-2">
				<div className="container-fluid">
					<Link href="/">
						<a className="navbar-brand">Portfolio</a>
					</Link>
					<div>
						<Link href="/projects">
							<a className="navbar-brand">Projects</a>
						</Link>
						<Link href="/about">
							<a className="navbar-brand">About</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
