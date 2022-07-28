import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

function App() {
	let emp = 909;
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route
						path={`/portfolios/${emp}`}
						element={<Portfolio />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
