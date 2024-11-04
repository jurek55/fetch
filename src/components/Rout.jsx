import { Routes, Route } from "react-router-dom";
import GetData from "./GetData.jsx";
import Albums from "./Albums.jsx";
import Home from "./Home.jsx";
import Blogs from "./Blogs.jsx";
import Welcome from './Welcome.jsx'
import Kunicki from "./Kunicki.jsx";
import Kocur from "./Kocur.jsx";
import Hermann from "./Hermann.jsx";
import Frackowiak from './Frackowiak.jsx'
import Felicki from './Felicki.jsx'
import NoPage from './NoPage.jsx'

const Rout = ({data}) => {
	return (
		<Routes>
			<Route index element={<Welcome />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/albums' element={<Albums />} />
			<Route path='/home' element={<Home />} />
			<Route path ='/kunicki' element={<Kunicki data = {data}/>} />
			<Route path='/kocur' element={<Kocur />} />
			<Route path='/hermann' element={<Hermann />} />
			<Route path='/frackowiak' element={<Frackowiak />} />
			<Route path='/felicki' element={<Felicki />} />
			<Route path='/dane' element={<GetData />} />

			<Route path= '*' element={<NoPage />} />
		</Routes>
	);
};

export default Rout;
