import * as React from "react";

import Home from "../components/Home";

import background from "../images/background.jpg";

import "../dist/css/main.css";
// import AboutPage from "./about";

const backgroundStyles = {
	backgroundImage: "url(" + background + " )",
};

const IndexPage = () => {
	return (
		<main>
			<title>James Kahoro</title>

			<section id="home">
				<Home />
			</section>

			{/* <section id="about">
				<AboutPage />
			</section>

			<section id="projects"></section> */}
		</main>
	);
};

export default IndexPage;
