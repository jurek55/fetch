import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import "../style/Layout.css";

const AlbumsMenu = () => {
	const links = [
		{ id: 2, path: "/marszewo", name: "Marszewo " },
		{ id: 3, path: "/promnice", name: "Promnice" },
		{ id: 4, path: "/powiazyn", name: "Powiazyń" },
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

export default AlbumsMenu;
