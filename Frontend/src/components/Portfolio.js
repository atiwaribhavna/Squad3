import { Container } from "@mui/system";
import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import PortfolioMain from "./PortfolioMain";

function Portfolio() {
	return (
		<div>
			<Navbar />
			<Container fixed>
				<PortfolioMain />
				<About />
			</Container>
		</div>
	);
}

export default Portfolio;
