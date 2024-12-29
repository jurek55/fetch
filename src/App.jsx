import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import "./App.css";

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

	if (data.length && images.length) {
		return (
			<BrowserRouter>
				<Menu />
				<div className='container'>
					<div className='content'>
						<Rout data={data} images={images} />
					</div>
				</div>
			</BrowserRouter>
		);
	} else return <div>waiting for data ...</div>;
}

export default App;
