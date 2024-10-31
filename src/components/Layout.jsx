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
						<Link to='/albums'>albums</Link>
					</li>
					<li>
						<Link to='/list'>list</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
