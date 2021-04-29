import React from "react";
import AboutImage from "../assets/about.png";
import "../styles/about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <p className="about-main-title">ABOUT</p>
        {/* <p className="about-sub-title">WHAT I AM</p> */}
      </div>
      <div className="about-body">
        <div className="about-body-left">
          <img src={AboutImage} alt="" />
        </div>
        <div className="about-body-right">
          <p>
            My name is Deepu G Nair. I am a passionate front-end web developer.
            For the past one year, I am focusing more on this domain. Building
            attractive and user-friendly interfaces are always my top priority.
            Learning new techs in web development always brings me happiness and
            actively looking for more. I have done couple of works and have
            participated in a hackathon named 'Reboot Kerala Hackathon 2020'.
            <br />
            <button>
              <a
                href="https://drive.google.com/file/d/1AYEaMQt9Lr11I-J6MUOQMmolEHcsyFq9/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                Get my resume
              </a>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
