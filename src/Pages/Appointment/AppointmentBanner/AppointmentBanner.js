import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


import chair from "../../../assets/images/chair.png";
import "./AppointmentBanner.css";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className={`hero appointment-banner lg:min-h-[700px] mt-20`}>
      <div className="hero-content flex-col lg:flex-row-reverse max-w-full">
        <img src={chair} className="rounded-lg lg:w-1/2" alt="chair" />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onDayClick={setSelectedDate}
          />
          <p>You picked .</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
