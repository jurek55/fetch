import { useState } from "react";

import Dropdown from "./Dropdown/Dropdown";
import DropdownItem from "./DropdownItem/DropdownItem";
import { NavLink } from "react-router-dom";

function Menu() {
	const [open, setOpen] = useState(false);
	const toggleDropdown = () => {
		setOpen(open => !open);
	};
	const links = [
		{ id: 1, path: "/", name: "Home" },
		{ id: 2, path: "/blogs", name: "Blogs" },
		{ id: 3, path: "/albums", name: "Albums" },
		{ id: 4, path: "/list", name: "List" },
		{ id: 5, path: "/blogs", name: "Blogs" },
		{ id: 6, path: "/kunicki", name: "Kunicki" },
		{ id: 7, path: "/kocur", name: "Kocur" },
		{ id: 8, path: "/knapik", name: "Knapik" },
		{ id: 9, path: "/malik", name: "Malik" },
		{ id: 10, path: "/frackowiak", name: "Frąckowiak" },
		{ id: 11, path: "/hermann", name: "Hermann" },
		{ id: 12, path: "/felicki", name: "Felicki" },
		{ id: 13, path: "/stroka", name: "Stroka" },
		{ id: 14, path: "/spaloniak", name: "Spaloniak" },
		{ id: 15, path: "/marszewo", name: "Album Marszewo" },
		{ id: 16, path: "/powiazyn", name: "Album Powiazyn" },
		{ id: 17, path: "/promnice", name: "Album Promnice" },
		{ id: 18, path: "/admin", name: "Admin panel" },
	];
	return (
		<div className='dropdown'>
			<Dropdown
				onClick={toggleDropdown}
				open={open}
				buttonText='MENU'
				content={
					<>
						{links.map(item => (
							<DropdownItem key={item.id} open={open} onClick={toggleDropdown}>
								<NavLink to={item.path}>{item.name}</NavLink>
							</DropdownItem>
						))}
					</>
				}
			/>
		</div>
	);
}

export default Menu;
