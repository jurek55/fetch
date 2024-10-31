import { Routes, Route } from "react-router-dom";
// import GetData from "./GetData.jsx";
import Albums from "./Albums.jsx";
import Home from "./Home.jsx";
import Blogs from "./Blogs.jsx";
import PersonsList from './PersonsList.jsx'
import Welcome from './Welcome.jsx'

const Rout = () => {
	return (
		<Routes>
			<Route index element={<Welcome />} />
			<Route path='/list' element={<PersonsList />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/albums' element={<Albums />} />
			<Route path='/home' element={<Home />} />
		</Routes>
	);
};

export default Rout;
