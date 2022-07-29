import { Button, Card, CardActions, CardMedia, Grid } from "@mui/material";
import React from "react";
import project1 from "./../assets/emp910/project1.png";
import project2 from "./../assets/emp910/project2.png";
import project3 from "./../assets/emp910/project3.png";
import "./Projects.css";

const Projects = () => {
	const projects = [
		{
			id: 1,
			project: project1,
		},
		{
			id: 2,
			project: project2,
		},
		{
			id: 3,
			project: project3,
		},
	];
	return (
		<div>
			<h2>PROJECTS</h2>
			<p>Check out some of my work right here</p>
			<div>
				<Grid
					container
					rowSpacing={3}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				>
					{projects.map(({ id, project }) => (
						<Grid key={id} item xs={12} sm={6} md={4}>
							<Card className="projectCards">
								<CardMedia
									component="img"
									image={project}
									alt={`project${id}`}
								/>
								<CardActions>
									<Button size="small">Share</Button>
									<Button size="small">Learn More</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default Projects;
