import React from "react";

const ReviewCard = ({ review }) => {
  const { id, name, address, reviewDetail, img } = review;
  return (
    <div className="card w-ful  bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{reviewDetail}</p>
        <div className="card-actions gap-3 mt-6  ">
          <div className=" border border-secondary rounded-full">
            <img src={img} alt={name} className="w-16 p-1" />
          </div>
          <div className="">
            <h2 className="card-title">{name}</h2>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
