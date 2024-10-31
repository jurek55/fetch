import { Routes, Route } from "react-router-dom";
import GetData from "./GetData.jsx";
import Albums from "./Albums.jsx";
import Home from "./Home.jsx";
import Blogs from "./Blogs.jsx";

const Rout = () => {
	return (
		<Routes>
			{/* <Route index element={<Layout />} /> */}
			<Route path='/start' element={<GetData />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/albums' element={<Albums />} />
			<Route path='/home' element={<Home />} />
		</Routes>
	);
};

export default Rout;
