import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
	const links = [
		{
			id: 1,
			link: "Home",
		},
		{
			id: 2,
			link: "About",
		},
		{
			id: 3,
			link: "Projects",
		},
		{
			id: 4,
			link: "Skills",
		},
		{
			id: 5,
			link: "Contact",
		},
	];
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						Naina
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}></Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						Naina
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							ml: 3,
						}}>
						{links.map(({ id, link }) => (
							<Link
								className="nav-links"
								to={link}
								smooth
								duration={500}
								key={id}>
								{link}
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
