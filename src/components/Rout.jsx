import { Routes, Route } from "react-router-dom";
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
import Albums from "./AlbumsMenu.jsx";

// import SinglePhoto from './SinglePhoto.jsx'
import NoPage from "./NoPage.jsx";

const Rout = ({ data, images }) => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/home' element={<Home />} />
			<Route path='/blogs' element={<Blogs />} />
			<Route path='/welcome' element={<Welcome />} />
			<Route
				path='/kunicki'
				element={<Kunicki data={data} />}
			/>
			<Route path='/kocur' element={<Kocur data={data}/>} />
			<Route path='/knapik' element={<Knapik data={data}/>} />
			<Route path='/malik' element={<Malik data={data}/>} />
			<Route path='/hermann' element={<Hermann data={data}/>} />
			<Route path='/frackowiak' element={<Frackowiak data={data}/>} />
			<Route path='/felicki' element={<Felicki data={data}/>} />
			<Route path='/stroka' element={<Stroka data={data}/>} />
			<Route path='/spaloniak' element={<Spaloniak data={data}/>} />
			<Route path='/list' element={<PersonsList data={data}/>} />
			<Route path='/marszewo' element={<AlbumMarszewo images = {images}/>} />
			<Route path='/promnice' element={<AlbumPromnice images = {images}/>} />
			<Route path='/powiazyn' element={<AlbumPowiazyn images = {images}/>} />
			<Route path='/panel' element={<Administration />} />
			<Route path='/albums' element={<Albums />} />

			<Route path='*' element={<NoPage />} />
		</Routes>
	);
};
export default Rout;
