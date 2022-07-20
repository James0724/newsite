import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Image from "../images/dev.png";
import Advert from "../images/pexels-cottonbro.jpg";

function Art() {
	return (
		<div className="main">
			<div className="squaregrid">
				<div className="item">
					<div className="item-1 full-width-height"></div>
				</div>
				<div className="item">
					<div className="item-2 full-width-height"></div>
				</div>
				<div className="item">
					<div className="item-3 full-width-height"></div>
				</div>

				<div className="item">
					<div className="item-4 full-width-height"></div>
				</div>
				<div className="item">
					<div className="item-5 full-width-height"></div>
				</div>
				<div className="item">
					<div className="item-6 full-width-height"></div>
				</div>
				<div className="item image-circle d-none">
					<div className="item-7  full-width-height">
						<div className="overlay"></div>
						<img className="img" src={Image} alt="James Kahoro" />
					</div>
				</div>
				{/* <div className="item">
					<div className="item-8 full-width-height"></div>
				</div> */}
				<div className="item d-none">
					<div className="item-9 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-10 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-11 full-width-height"></div>
				</div>
				{/* <div className="item">
					<div className="item-12 full-width-height"></div>
				</div>
				<div className="item">
					<div className="item-13 full-width-height"></div>
				</div> */}
				<div className="item d-none">
					<div className="item-14 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-15 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-16 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-17 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-18 full-width-height"></div>
				</div>
				<div className="item d-none sub-image-circle">
					<div className="item-7  full-width-height">
						<div className="overlay"></div>
						<img className="sub-img" src={Advert} alt="James Kahoro" />
					</div>
				</div>
				{/* <div className="item">
					<div className="item-20 full-width-height"></div>
				</div>
				<div className="item">
					<div className="item-21 full-width-height"></div>
				</div>
				<div className="item">
					<div className="item-22 full-width-height"></div>
				</div> */}
				<div className="item d-none">
					<div className="item-23 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-22 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-21 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-24 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-28 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-26 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-27 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-25 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-29 full-width-height"></div>
				</div>
				<div className="item d-none">
					<div className="item-30 full-width-height"></div>
				</div>
			</div>
		</div>
	);
}

export default Art;
