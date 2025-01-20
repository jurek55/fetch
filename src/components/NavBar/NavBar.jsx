import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import { useState } from "react";
import AlbumsMenu from "../AlbumsMenu";
const NavBar = () => {
	const links = [
		{ id: 1, path: "/", name: "Home" },
		{ id: 2, path: "/blogs", name: "Blogs" },
		{ id: 3, path: "/albums", name: "Albums" },
		{ id: 4, path: "/list", name: "List" },
		{ id: 18, path: "/admin", name: "Admin panel" },
	];
	const [isvisible, setIsvisible] = useState(false);
	const handleClick = event => {
		event.preventDefault();
		console.log(event.target.name);
		console.log(isvisible);
		if (event.target.name === "3") {
			setIsvisible(!isvisible);
		}
	};
	const items = links.map(item => {
		return (
			<>
				<li key={item.id} onClick={handleClick}>
					<NavLink to={item.path} name={item.id}>
						{item.name}
					</NavLink>
					<Outlet />
				</li>
			</>
		);
	});

	return (
		<>
			<ul>{items}</ul>
			<AlbumsMenu isvisible={isvisible} />
		</>
	);
};
export default NavBar;
