import { format } from "date-fns/esm";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, slots, price } = treatment; // treatment is appointmentOption; just a different name
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.fName.value;
    const email = form.email.value;
    const date = form.date.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: fName,
      slot,
      email,
      phone,
      price
    };
    fetch(`https://doctors-portal-server-iota-plum.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          setTreatment(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form onSubmit={handleBooking}>
            <input
              type="text"
              value={date}
              disabled
              name="date"
              className="input w-full my-2 input-bordered  bg-[#E6E6E6]"
            />

            <select name="slot" className="select select-bordered w-full">
              <option disabled>Select a time slot</option>
              {slots.map((slot, index) => (
                <option className="" value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              defaultValue={user?.displayName}
              disabled
              className="input w-full my-2 input-bordered "
              name="fName"
            />
            <input
              type="email"
              placeholder="Email Address"
              disabled
              defaultValue={user?.email}
              className="input w-full my-2 input-bordered "
              name="email"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="input w-full my-2 input-bordered "
              name="phone"
            />
            <button className="btn btn-accent w-full" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
