import { Container } from "@mui/system";
import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import PortfolioMain from "./PortfolioMain";
import Projects from "./Projects";

function Portfolio() {
	return (
		<div>
			<Navbar />
			<Container fixed>
				<PortfolioMain />
				<About />
				<Projects />
			</Container>
		</div>
	);
}

export default Portfolio;
