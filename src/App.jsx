import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Rout from "./components/Rout.jsx";
import "./App.css";

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
	if (data.length && images.length) {
		return (
			<BrowserRouter>
				<div className='container'>
					<div className='nav'>
						<Layout />
					</div>
					<div className='content'>
						<Rout data={data} images={images} />
					</div>
				</div>
			</BrowserRouter>
		);
	} else return <div>waiting for data ...</div>;
}

export default App;
