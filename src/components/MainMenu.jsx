import {  NavLink } from "react-router-dom";
import {Outlet} from 'react-router';
import "../style/Layout.css";

const MainMenu = () => {
	const links = [
		{ id: 1, path: "/", name: "Home" },
		{ id: 2, path: "/blogs", name: "Blogs" },
		{ id: 3, path: "/albums", name: "Albums" },
		{ id: 4, path: "/list", name: "List" },
		{ id: 18, path: "/admin", name: "Admin panel" },
	];

	const items = links.map(item => {
		return (
			<div className='nav-menu ' key={item.id}>
				<NavLink to={item.path}>{item.name}</NavLink>
				<Outlet />
			</div>
		);
	});

	return <>{items}</>;
};

export default MainMenu
