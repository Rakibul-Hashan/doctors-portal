import React from "react";
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      icon: clock,
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      icon: phone,
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {
        cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
    }
      
      {/* card  */}
      {/* <div className="card card-side items-center p-5 bg-accent shadow-xl">
        <div className="">
          <FaMapMarkerAlt className="text-7xl text-white"></FaMapMarkerAlt>
        </div>
        <div className="card-body">
          <h2 className="card-title text-white">Opening Hours</h2>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the pri
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div> */}
      {/* card  end */}
      {/* card  */}
      {/* <div className="card card-side items-center p-5 bg-gradient-to-r from-secondary to-primary shadow-xl">
        <div className="">
          <BiPhoneCall className="text-7xl text-white"></BiPhoneCall>
        </div>
        <div className="card-body">
          <h2 className="card-title text-white">Opening Hours</h2>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the pri
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div> */}
      {/* card  end */}
    </div>
  );
};

export default InfoCards;
