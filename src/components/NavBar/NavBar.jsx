import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import { useState } from "react";
import AlbumsMenu from "../AlbumsMenu/AlbumsMenu";
import FamiliesMenu from "../FamiliesMenu/FamiliesMenu";
const NavBar = () => {
	const links = [
		{ id: 1, path: "/", name: "Home" },
		{ id: 2, path: "/blogs", name: "Rodziny" },
		{ id: 3, path: "/albums", name: "Albums" },
		{ id: 4, path: "/list", name: "Osoby" },
		{ id: 18, path: "/admin", name: "Admin panel" },
	];
	const [isvisible3, setIsvisible3] = useState(false);
	const [isvisible2, setIsvisible2] = useState(false);
	const handleClick = event => {
		console.log(event.target.name);
		console.log(isvisible3);
		if (event.target.name === "3") {
			setIsvisible3(!isvisible3);
			setIsvisible2(false)
		}
		if (event.target.name === "2") {
			setIsvisible2(!isvisible2);
			setIsvisible3(false)
		}
		if (event.target.name != "2" && event.target.name != '3') {
			setIsvisible2(false);
			setIsvisible3(false)
		}
	};

	const items = links.map(item => {
		return (
			<li key={item.id} onClick={handleClick}>
				<NavLink to={item.path} name={item.id}>
					{item.name}
				</NavLink>
				<Outlet />
			</li>
		);
	});

	return (
		<>
			<ul>{items}</ul>
			{isvisible3 && <AlbumsMenu isvisible={isvisible3} changeIsVisible={handleClick} />}
			{isvisible2 && <FamiliesMenu isvisible={isvisible2} changeIsVisible={handleClick} />}
		</>
	);
};
export default NavBar;
