import { Routes, Route } from "react-router-dom";
// import GetData from "./GetData.jsx";
import Albums from "./Albums.jsx";
import Home from "./Home.jsx";
import Blogs from "./Blogs.jsx";
import Welcome from './Welcome.jsx'
import Kunicki from "./Kunicki.jsx";
import Kocur from "./Kocur.jsx";
import Knapik from "./Knapik.jsx";
import Malik from "./Malik.jsx";
import Hermann from "./Hermann.jsx";
import Frackowiak from './Frackowiak.jsx'
import Felicki from './Felicki.jsx'
import Stroka from './Stroka.jsx'
import Spaloniak from './Spaloniak.jsx'
import PersonsList from './PersonsList'
import Administration from './Administration'

import NoPage from './NoPage.jsx'

const Rout = ({data}) => {
	return (
		<Routes>
			<Route index element={<Welcome />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/albums' element={<Albums />} />
			<Route path='/home' element={<Home />} />
			<Route path ='/kunicki' element={<Kunicki data = {data}/>} />
			<Route path='/kocur' element={<Kocur data = {data}/>} />
			<Route path='/knapik' element={<Knapik data = {data}/>} />
			<Route path='/malik' element={<Malik data = {data}/>} />
			<Route path='/hermann' element={<Hermann data = {data}/>} />
			<Route path='/frackowiak' element={<Frackowiak data = {data}/>} />
			<Route path='/felicki' element={<Felicki data = {data}/>} />
			<Route path='/stroka' element={<Stroka data = {data}/>} />
			<Route path='/spaloniak' element={<Spaloniak data = {data}/>} />
			<Route path='/list' element={<PersonsList data = {data}/>} />
			<Route path='/admin' element={<Administration data = {data}/>} />

			<Route path= '*' element={<NoPage />} />
		</Routes>
	);
};

export default Rout;
