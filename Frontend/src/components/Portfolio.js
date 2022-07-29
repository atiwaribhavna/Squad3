
import { Container } from "@mui/system";
import React from "react";
import About from "./About";
import Navbar from "./Navbar";

function Portfolio() {
	return (
		<div>
			<Navbar />
			<Container fixed>
				<About />
			</Container>
		</div>
	);
}

export default Portfolio;
