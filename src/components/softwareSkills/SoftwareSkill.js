import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills_web.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            
            );
          })}
        </ul>
        {/* <span style={{ fontSize: 19, textAlign: 'left', color: "#868E96",display: 'inline-block', marginBottom: 20 }}>Web Development</span> */}

        <ul className="dev-icons">
          {skillsSection.softwareSkills_app.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            
            );
          })}
        </ul>
      </div>
    </div>
  );
}
