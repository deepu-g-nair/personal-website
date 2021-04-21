import React from "react";
import Particles from "react-particles-js";
import Typewriter from "typewriter-effect";
//import Bgimage from "../assets/bgImage.jpg";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
        className="particle"
      />
      <div className="home-content">
        <h1>
          <Typewriter
            options={{
              strings: ["HELLO I'M DEEPU G NAIR", "I'M A WEB DEVELOPER"],
              autoStart: true,
              loop: true,
              delay: 25,
              deleteSpeed: 25,
              pauseFor: 2000,
            }}
          />
        </h1>
        <br></br>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/deepu.rockzz.1675"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/DeepuGNair1"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a href="mailto:deepukrishna811@gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.instagram.com/deepu.g.nair/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/deepu-g-nair-4a80181b2/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/deepu-g-nair"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div className="indicator"></div>
      </div>
    </div>
  );
};

export default Home;
