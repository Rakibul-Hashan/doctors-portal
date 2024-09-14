import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

function DisplayError() {
  const error = useRouteError();
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate()
  
  const handleSignout = () => {
    return logout()
      .then((res) => {
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(error);
  return (
    <div>
      <p className=" min-h-screen text-error">Somethig Went Wrong!!</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4 class="text-4xl">
        Please <button onClick={handleSignout}>Sign Out</button> and login
        again.
      </h4>
    </div>
  );
}

export default DisplayError;
