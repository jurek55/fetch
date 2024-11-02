import { Outlet, Link } from "react-router-dom";
import "../style/Layout.css";

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/home'>Home</Link>
					</li>
					<li>
						<Link to='/blogs'>Blogs</Link>
					</li>
					<li>
						<Link to='/albums'>Albums</Link>
					</li>
					<li>
						<Link to='/list'>List</Link>
					</li>
						<Link to='/kunicki'>Kunicki</Link>
					<li>
						<Link to='/kocur'>Kocur</Link>
					</li>
					<li>
						<Link to='/frackowiak'>Frąckowiak</Link>
					</li>
					<li>
						<Link to='/hermann'>Hermann</Link>
					</li>
					<li>
						<Link to='/felicki'>Felicki</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
