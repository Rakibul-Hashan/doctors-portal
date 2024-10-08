import React from "react";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="">
        <h3 className="text-xl  text-center font-bold text-primary ">
          Our Services
        </h3>
        <h2 className="text-2xl text-center font-bold ">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-9 lg:mt-20 ">
        {servicesData.map(service => <Service key={service.id} service={service}></Service>)}
      </div>
    </div>
  );
};

export default Services;
