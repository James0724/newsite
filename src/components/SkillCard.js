import React from "react";
import Javascript from "../svg/js-full.svg";
import Html from "../svg/html-5-colored.svg";
import Design from "../svg/graphic-design.svg";
import Database from "../svg/database.svg";
import Logo from "../svg/logo.svg";
import Iconreact from "../svg/react-colored.svg";
import Gatsbyjs from "../svg/gatsby-colored.svg";
import Nodejs from "../svg/node-colored.svg";
import Figma from "../svg/figma-colored.svg";
import Adobe from "../svg/adobe-colored.svg";
import Mongodb from "../svg/mongodb-full-colored.svg";
import Pgsql from "../svg/pgsql-colored.svg";
import Saas from "../svg/sass-colored.svg";
import Xd from "../svg/adobe-xd-colored.svg";
import Bootstrap from "../svg/bootstrap-4-colored.svg";
import Firebase from "../svg/Firebase-colored.svg";

function SkillCard({ setSkill }) {
	const { name, technologies } = setSkill;
	const displaysvg = () => {
		switch (name) {
			case "Javascript":
				return <Javascript />;
			case "HTML/CSS":
				return <Html />;
			case "UI Design":
				return <Design />;
			case "Database":
				return <Database />;

			default:
				return <Logo />;
		}
	};

	return (
		<div className="card">
			<article className="skillboard">
				<div className="header">
					<div className="skillboard__svg">{displaysvg()}</div>
					<h1 className="skillboard__title">
						<span className="skillboard__title--top">{name}</span>
					</h1>
				</div>
			</article>
			<div className="skillboard__profiles">
				{technologies.map((tech, i) => {
					const displaytechsvg = () => {
						switch (tech.name) {
							case "React js":
								return <Iconreact />;
							case "Gatsby js":
								return <Gatsbyjs />;
							case "Node js":
								return <Nodejs />;
							case "SCSS":
								return <Saas />;
							case "HTML/CSS":
								return <Html />;
							case "Illustrator":
								return <Adobe />;
							case "Xd":
								return <Xd />;
							case "Bootstrap":
								return <Bootstrap />;
							case "Firebase":
								return <Firebase />;
							case "MongoDb":
								return <Mongodb />;
							case "Pgsql":
								return <Pgsql />;
							case "Figma":
								return <Figma />;

							default:
								return <Logo />;
						}
					};

					return (
						<article key={i} className="skillboard__profile">
							<>{displaytechsvg()}</>
							<span className="skillboard__name">{tech.name}</span>
						</article>
					);
				})}
			</div>
		</div>
	);
}

export default SkillCard;
