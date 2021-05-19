import React from "react";

const WorksCard = ({ name, image, link }) => {
  return (
    <div className="works-card">
      <div className="card-image">
        <img src={image} alt="" />
        <div className="card-hover">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button>
              Learn more &nbsp;<i class="fab fa-github"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="card-content">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default WorksCard;
