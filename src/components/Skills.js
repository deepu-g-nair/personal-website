import React from "react";
// import { Parallax } from "react-parallax";
// import bgImage from "../assets/skills-bg.jpg";

import "../styles/skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <p>SKILLS</p>
      </div>
      <div className="skills-body">
        <div className="skills-body-left">
          <p>
            I have pretty good knowledge about the popular front-end languages
            like Html, Css, Javascript. I can work using the most popular css
            framework called Bootstrap. Most of my works that I am doing
            nowadays are based on Reactjs, which is a popular front-end
            javascript library. Also I am good at React-Hooks and Jsx <br />
            <br />A version control system is neccessary for every projects. It
            helps to track changes of files. I am using Git which is free and
            open source. I also have the fundamentals of Python programming
            language. I can handle popular softwares like Figma which makes my
            day much easier.
          </p>
        </div>
        <div className="skills-body-right">
          <div className="skills-percent" style={{ marginTop: "50px" }}>
            <div className="percent-name">
              <p>Html</p>
              <p>90%</p>
            </div>
            <div className="percent-level">
              <div className="level-value" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skills-percent">
            <div className="percent-name">
              <p>Css</p>
              <p>90%</p>
            </div>
            <div className="percent-level">
              <div className="level-value" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skills-percent">
            <div className="percent-name">
              <p>Bootstrap</p>
              <p>80%</p>
            </div>
            <div className="percent-level">
              <div className="level-value" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skills-percent">
            <div className="percent-name">
              <p>Javascript</p>
              <p>75%</p>
            </div>
            <div className="percent-level">
              <div className="level-value" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="skills-percent">
            <div className="percent-name">
              <p>React</p>
              <p>75%</p>
            </div>
            <div className="percent-level">
              <div className="level-value" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
