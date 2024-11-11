import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Rout from "./components/Rout.jsx";
import "./App.css";

function App() {
	const [data, setData] = useState([]);
	const myurl = "http://localhost/home/dane.php";

	const request = async url => {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json, "json");
		return json;
	};

	useEffect(() => {
		request(myurl).then(resp => {
			setData(resp);
		});
	}, []);

	console.log(data);
	if (data.length) {
		return (
			<BrowserRouter>
				<div className='container'>
					<div className='nav'>
						<Layout />
					</div>
					<div className='content'>
						<Rout data={data} />
					</div>
				</div>
			</BrowserRouter>
		);
	} else return <div>waiting for data ...</div>;
}

export default App;
