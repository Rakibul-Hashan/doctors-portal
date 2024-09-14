import React from "react";

const InfoCard = ({ card }) => {
  const { id, name, description, icon, bgClass } = card;
  //   const Icon =  card.icon
  return (
    <div className={`card card-side items-center p-5 ${bgClass} shadow-xl flex-col lg:flex-row`}>
      {/* card  */}
      <div className="">
        <img src={icon} alt="" />
      </div>
      <div className="card-body justify-center items-center lg:items-start">
        <h2 className="card-title text-white text-center md:text-left">{name}</h2>
        <p className="text-white text-center md:text-left">{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
      {/* card  end */}
    </div>
  );
};

export default InfoCard;
