import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-purple-600">
      <div className="w-11/12 mx-auto flex justify-between items-center py-5">
        <div>
          <h2 className="text-3xl font-bold text-white shadow-xl">
            TEETH WIZERD
          </h2>
        </div>
        <div>
          <NavLink to="/" className="text-white twxt-lg font-bold ml-5">
            Home
          </NavLink>
          <NavLink
            to="/allTreatments"
            className="text-white twxt-lg font-bold ml-5"
          >
            All Treatments
          </NavLink>
          <NavLink
            to="/myAppoinments"
            className="text-white twxt-lg font-bold ml-5"
          >
            My Appoinments
          </NavLink>
          <NavLink to="/profile" className="text-white twxt-lg font-bold ml-5">
            Profile
          </NavLink>
        </div>
        <div>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
