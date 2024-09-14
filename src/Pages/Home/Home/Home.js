import React from "react";
import Banner from "../Banner/Banner";
import ContactSection from "../ContactSection/ContactSection";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import YourTerm from "../YourTerm/YourTerm";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <YourTerm></YourTerm>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
