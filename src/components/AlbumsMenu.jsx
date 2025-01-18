import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import "../style/AlbumsMenu.css";

const AlbumsMenu = () => {
	const links = [
		{ id: 2, path: "/marszewo", name: "Marszewo " },
		{ id: 3, path: "/promnice", name: "Promnice" },
		{ id: 4, path: "/powiazyn", name: "Powiazyń" },
	];

	const items = links.map(item => {
		return (
			<li key={item.id}>
				<NavLink to={item.path}>{item.name}</NavLink>
				<Outlet />
			</li>
		);
	});

	return (
		<div className='nav-menu'>
			<ul>{items}</ul>
		</div>
	);
};

export default AlbumsMenu;
