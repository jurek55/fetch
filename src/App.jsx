import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Rout from './components/Rout.jsx'

// import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<div className='nav'>
					<Layout />
				</div>
				<div className='content'>
					<Rout />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
