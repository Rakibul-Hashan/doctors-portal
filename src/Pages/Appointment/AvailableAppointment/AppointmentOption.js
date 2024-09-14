import React from "react";

function AppointmentOption({ appointmentOption, setTreatment }) {
  const { name, slots, price } = appointmentOption;
  return (
    <div>
      <div className="card w-full  bg-base-100 shadow-xl">
        <div className="card-body items-center">
          <h2 className="card-title text-secondary text-center">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available{" "}
          </p>
          <small>Price: ${price}</small>

          <div className="card-actions self-stretch lg:mt-10">
            {/* The button to open modal */}
            <label
              disabled={slots?.length === 0}
              onClick={() => setTreatment(appointmentOption)}
              htmlFor="booking-modal"
              className={`${
                slots?.length === 0 && "cursor-not-allowed"
              }  btn btn-primary mx-auto text-white px-5 bg-gradient-to-r from-primary to-secondary w-1/2`}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentOption;
