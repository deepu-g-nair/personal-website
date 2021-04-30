import React from "react";
import work1 from "../assets/works-1.png";
import work2 from "../assets/works-2.png";
import work3 from "../assets/works-3.png";
import "../styles/works.scss";

const Works = () => {
  return (
    <div className="works">
      <div className="works-title">
        <p>WORKS</p>
      </div>
      <div className="works-body">
        <div className="works-card">
          <div className="card-image">
            <img src={work1} alt="" />
            <div className="card-hover">
              <a
                href="https://github.com/deepu-g-nair/activity-point-management-software-for-ktu"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  Learn more &nbsp;<i class="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="card-content">
            <p>Activity Point Management Software</p>
          </div>
        </div>
        <div className="works-card">
          <div className="card-image">
            <img src={work2} alt="" />
            <div className="card-hover">
              <a
                href="https://github.com/deepu-g-nair/socio-demographic-data-collection-and-analysis-platform-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  Learn more &nbsp;<i class="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="card-content">
            <p>Socio-Demographic Data Collection and Analysis Platform</p>
          </div>
        </div>
        <div className="works-card">
          <div className="card-image">
            <img src={work3} alt="" />
            <div className="card-hover">
              <a
                href="https://github.com/deepu-g-nair/e-commerce-website"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  Learn more &nbsp;<i class="fab fa-github"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="card-content">
            <p>E-commerce website for Agricultural Crops</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
