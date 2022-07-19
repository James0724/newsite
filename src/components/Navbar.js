import React from "react";
import Logo from "../svg/logo.svg";

function Navbar() {
	return (
		<div className="menu">
			<div className="logo-container">
				<Logo />
			</div>
			<div className="navbar">
				<ul className="nav-items">
					<li className="nav-item">Home</li>
					<li className="nav-item">About</li>
					<li className="nav-item">Projects</li>
				</ul>
				<button className="btn btn-primary">Contact</button>
			</div>
		</div>
	);
}

export default Navbar;
