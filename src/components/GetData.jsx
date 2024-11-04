import { useState, useEffect } from "react";
// import PersonsList from "./PersonsList.jsx";

const GetData = () =>{
	const [data, setData] = useState([]);
	const myurl = "https://api.jkunicki.pl/dane.php";
	
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
	if (data.length) {
		return null
	} else {
		return <div>waiting for data ...</div>;
	}
};
export default GetData;
