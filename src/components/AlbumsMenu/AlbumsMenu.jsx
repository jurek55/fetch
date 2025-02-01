import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import "./AlbumsMenu.css";

const AlbumsMenu = ({ isvisible, changeIsVisible }) => {
	const links = [
		{ id: 2, path: "/marszewo", name: "Marszewo " },
		{ id: 3, path: "/promnice", name: "Promnice" },
		{ id: 4, path: "/powiazyn", name: "Powiazyń" },
	];

	console.log(isvisible);
	
	const items = links.map(item => {
		return (
			<p key={item.id}>
				<NavLink to={item.path} name = '3'>{item.name}</NavLink>
				<Outlet />
			</p>
		);
	});

	if (isvisible) {
		return (
			<div className='nav-menu-visible-albums' onClick={changeIsVisible}>
				{items}
			</div>
		);
	} else {
		return <div className='nav-menu-unvisible-albums'>{items}</div>;
	}
};

export default AlbumsMenu;
