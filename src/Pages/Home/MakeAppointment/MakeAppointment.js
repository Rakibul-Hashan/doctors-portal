import React from "react";
import doctor from '../../../assets/images/doctor-small.png';
import PrimaryButton from "../../../components/PrimaryButton";
import './MakeAppointment.css';
const MakeAppointment = () => {
  return (
    <section className="appointment-section py-16 px-7 lg:p-0">
      <div className="hero ">
        <div className="hero-content p-0 flex-col lg:flex-row">
          <img
            src={doctor}
            className="hidden lg:block lg:w-1/2 -mt-28 "
            alt="doctor"
          />
          <div>
            <h3 className="text-xl font-bold text-secondary">Appointment</h3>
            <h1 className="text-4xl text-white font-semi-bold">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
