import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "./../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  if(loading){
    return
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content"> 
            <li>
              <Link to={"/dashboard"}>My Appointments</Link>
            </li>

            {isAdmin && (
              <>
                <li>
                  <Link to={"/dashboard/allusers"}>All Users</Link>
                </li>
                <li>
                  <Link to={"/dashboard/adddoctor"}>Add A Doctor</Link>
                </li>
                <li>
                  <Link to={"/dashboard/managedoctors"}>Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
