import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";
import Home from "./Home.jsx";
import Blogs from "./Blogs.jsx";
import Welcome from "./Welcome.jsx";
import Kunicki from "./Kunicki.jsx";
// import FranciszekKunicki from "../PersonalInfo/FranciszekKunicki.jsx";
import Kocur from "./Kocur.jsx";
import Knapik from "./Knapik.jsx";
import Malik from "./Malik.jsx";
import Hermann from "./Hermann.jsx";
import Frackowiak from "./Frackowiak.jsx";
import Felicki from "./Felicki.jsx";
import Stroka from "./Stroka.jsx";
import Spaloniak from "./Spaloniak.jsx";
import PersonsList from "./PersonsList.jsx";
import AlbumMarszewo from "./AlbumMarszewo.jsx";
import AlbumPromnice from "./AlbumPromnice.jsx";
import AlbumPowiazyn from "./AlbumPowiazyn.jsx";
import Administration from "./Administration.jsx";
// import SinglePhoto from './SinglePhoto.jsx'
import NoPage from "./NoPage.jsx";

const Rout = ({ data, images }) => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/home' element={<Home />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/welcome' element={<Welcome />} />
			<Route path='/kunicki' element={<Kunicki data={data} images={images} />}/>
			<Route path='/kocur' element={<Kocur />} />
			<Route path='/knapik' element={<Knapik />} />
			<Route path='/malik' element={<Malik />} />
			<Route path='/hermann' element={<Hermann />} />
			<Route path='/frackowiak' element={<Frackowiak />} />
			<Route path='/felicki' element={<Felicki />} />
			<Route path='/stroka' element={<Stroka />} />
			<Route path='/spaloniak' element={<Spaloniak />} />
			<Route path='/list' element={<PersonsList />} />
			<Route path='/marszewo' element={<AlbumMarszewo />} />
			<Route path='/promnice' element={<AlbumPromnice />} />
			<Route path='/powiazyn' element={<AlbumPowiazyn />} />
			<Route path='panel' element={<Administration />} />
			<Route path='*' element={<NoPage />} />
			<Outlet />
		</Routes>
	);
};
export default Rout;
