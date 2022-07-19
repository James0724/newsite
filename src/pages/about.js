import React from "react";
import Image from "../images/dev.png";

function AboutPage() {
	return (
		<div className="about-container">
			<div className="title-wrapper">
				<div className="numbered-title">
					<h3>About me</h3>
				</div>
			</div>
			<div className="static-back-ground"></div>

			<div className="contain-img">
				<div className="overlay"></div>
				<div className="img-wrapper">
					<div className="profile-img">
						<img className="img-main" src={Image} alt="James Kahoro" />
					</div>
				</div>
			</div>
			<div className="contact-wrapper">
				<h3>jameskahoro07@gmail.com</h3>
			</div>

			<div className="profile-wrapper">
				<div className="profile">
					<p>
						Hello, I am a self-taught programmer. My interest in programming
						started in 2018 after completing my undergraduate course in
						environmental studies resources conservation. I learned the
						foundations of programming and all the concepts needed to work as a
						full-stack web developer. I further enhanced my coding experience
						with Udacity full-stack web development Nanodegree program and got
						certified as a full-stack web developer. Over the years, I have
						developed and accomplished different projects involving user
						interface and experience, identity access management, data storage
						and modeling, API development and documentation, server deployment
						and containerization. My goal has always been not to build just a
						website but to help you develop your online business empire.
					</p>
					<p>
						In addition to my software development career, I am a professional
						in environmental matters such as environmental impact assessments,
						ecological research studies and consultancy.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
