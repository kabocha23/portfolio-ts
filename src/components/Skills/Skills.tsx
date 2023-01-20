import React, { FC } from "react";
import "./Skills.css";

const Skills: FC = () => {
  return (
    <div className="skills-container">
      <ul>
        <li className="skills-item">
          <p>React</p>
        </li>
        <li className="skills-item">
          <p>Node.js</p>
        </li>
        <li className="skills-item">
          <p>JavaScript (ES6+)</p>
        </li>
        <li className="skills-item">
          <p>TypeScript</p>
        </li>
        <li className="skills-item">
          <p>MySQL</p>
        </li>
        <li className="skills-item">
          <p>MongoDB</p>
        </li>
        <li className="skills-item">
          <p>Tableau</p>
        </li>
        <li className="skills-item">
          <p>Google Data Studio</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
