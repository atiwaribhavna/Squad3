import { Button, Grid } from "@mui/material";
import React from "react";
import "./PortfolioMain.css";
import emp910 from "./../assets/emp910/910.png";

function PortfolioMain() {
	return (
		<div name="Home">
			<Grid container spacing={2} className="aboutGrid">
				<Grid item xs={8} className="leftAbout">
					<h1>Hi, I am Devesh Kumar Singh!</h1>
					<p>
						I'm a full stack web developer with about 2 years of
						experience building and designing websites and
						softwares. I love to work on web application using
						technologies like React, Node, HTML, CSS, JavaScript,
						Bootstrap.
					</p>
					<Button variant="contained">Projects</Button>
				</Grid>
				<Grid item xs={4} className="rightAbout">
					<img src={emp910} alt="Employee" className="empImg" />
				</Grid>
			</Grid>
		</div>
	);
}

export default PortfolioMain;
