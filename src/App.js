import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/Layout/MainNavigation";
import AddMeetups from "./pages/AddMeetups";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainNavigation />}>
					<Route index element={<AllMeetups />} />
					<Route path='/new-meetup' element={<AddMeetups />} />
					<Route path='/favorites' element={<Favorites />} />
				</Route>
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
