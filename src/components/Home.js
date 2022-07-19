import React from "react";
import Art from "../components/Art";

function Home() {
	return (
		<div className="hero">
			<div className="home-info">
				<h3 className="home-info__intro">Hi, my name is</h3>
				<h1 className="home-info__name">JAMES KAHORO.</h1>
				<h2 className="home-info__about-intro">
					I am a full-stack web developer, well equipped with the right
					necessary tools to build custom web applications, I deliver fast,
					resilient solutions optimized for performance and scalability.{" "}
				</h2>
				<button className="btn btn-secondary">View Resume</button>
			</div>
			<div className="art">
				<Art />
			</div>
		</div>
	);
}

export default Home;
