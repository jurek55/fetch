import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import MainMenu from "./components/MainMenu";
import Dropdown from "./components/Dropdown/Dropdown";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import "./App.css";
import { NavLink } from "react-router-dom";
// import {Outlet} from 'react-router';

import Rout from "./components/Rout";

function App() {
	const [data, setData] = useState([]);
	const [images, setImages] = useState([]);
	const myurl_data = "http://localhost/home/dane.php";
	const myurl_images = "http://localhost/home/images.php";

	const request = async url => {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json, "json");
		return json;
	};

	useEffect(() => {
		request(myurl_data).then(resp => {
			setData(resp);
		});
	}, []);
	useEffect(() => {
		request(myurl_images).then(resp => {
			setImages(resp);
		});
	}, []);

	console.log(data);
	console.log(images);
	// const items = [1, 2, 3, 4, 5, 6, 7, 8];
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
	if (data.length && images.length) {
		return (
			<BrowserRouter>
			<div className='dropdown'>
						<Dropdown
							buttonText='MENU'
							content={
								<>
									{links.map(item => (
										<DropdownItem key={item.id}>
											<NavLink to={item.path}>{item.name}</NavLink>
										</DropdownItem>
									))}
								</>
							}
						/>
					</div>
				<div className='container'>
					{/* <div className='nav'> */}
					
					{/* </div> */}

					<div className='content'>
						<Rout data={data} images={images} />
					</div>
				</div>
			</BrowserRouter>
		);
	} else return <div>waiting for data ...</div>;
}

export default App;
