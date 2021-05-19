import React from "react";
import work1 from "../assets/works-1.png";
import work2 from "../assets/works-2.png";
import work3 from "../assets/works-3.png";
import work4 from "../assets/works-4.png";
import work5 from "../assets/works-5.png";
import work6 from "../assets/works-6.png";
import "../styles/works.scss";
import WorksCard from "./WorksCard";

const Works = () => {
  return (
    <div className="works">
      <div className="works-title">
        <p>WORKS</p>
      </div>
      <div className="works-body">
        <div className="works-body-row">
          <WorksCard
            name="Activity Point Management Software"
            image={work1}
            link="https://github.com/deepu-g-nair/activity-point-management-software-for-ktu"
          />
          <WorksCard
            name="Socio-Demographic Data Collection and Analysis Platform"
            image={work2}
            link="https://github.com/deepu-g-nair/socio-demographic-data-collection-and-analysis-platform-frontend"
          />
          <WorksCard
            name="E-commerce website for Agricultural Crops"
            image={work3}
            link="https://github.com/deepu-g-nair/e-commerce-website"
          />
        </div>
        <div className="works-body-row">
          <WorksCard
            name="Chat application"
            image={work4}
            link="https://github.com/deepu-g-nair/chat-app"
          />
          <WorksCard
            name="Tic Tac Toe game"
            image={work5}
            link="https://github.com/deepu-g-nair/tic-tac-toe"
          />
          <WorksCard
            name="Box office app"
            image={work6}
            link="https://github.com/deepu-g-nair/box-office-app"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
