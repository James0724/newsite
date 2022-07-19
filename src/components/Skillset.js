import React from "react";
import SkillCard from "./SkillCard";

function Skillset({ skills }) {
	return (
		<div className="skill-items">
			{skills.map((skill, i) => {
				return <SkillCard key={i} setSkill={skill} />;
			})}
		</div>
	);
}

export default Skillset;
