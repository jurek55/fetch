import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import "../style/AlbumsMenu.css";

const AlbumsMenu = ({ isvisible, handleClick }) => {
	console.log(isvisible);
	const links = [
		{ id: 2, path: "/marszewo", name: "Marszewo " },
		{ id: 3, path: "/promnice", name: "Promnice" },
		{ id: 4, path: "/powiazyn", name: "Powiazyń" },
	];
	
	

	const items = links.map(item => {
		return (
			<p key={item.id} onClick={()=>handleClick}>
				<NavLink to={item.path}>{item.name}</NavLink>
				<Outlet />
			</p>
		);
	});

	if (isvisible) {
		return <div className='nav-menu-visible'>{items}</div>;
	} else {
		return <div className='nav-menu-unvisible'>{items}</div>;
	}
};

export default AlbumsMenu;
