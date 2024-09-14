import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, useNavigation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `https://doctors-portal-server-iota-plum.vercel.app/bookings?email=${user?.email}`;
  console.log(user?.email, url);
  const { data: bookings = [], isLoading,refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      refetch();
      return data;
      
    },
  });
  const navigation = useNavigation()
  if(navigation.state === 'loading'){
    return <Loading></Loading>
  }

  if(isLoading){
    return 
  }
  

  return (
    <div>
      <h3 className="text-3xl mb-5">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              bookings && 
            bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.name}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>{ 
                booking.price && !booking.paid &&
                <Link to={`/dashboard/payment/${booking._id}`}><button className="btn-primary btn-sm">Pay</button></Link>
                }
                {
                  booking.price && booking.paid && <span className="text-primary">Paid</span>
                }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
