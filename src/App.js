import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	let emp = 909;
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path={`/portfolios/${emp}`} element={<Navbar />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
