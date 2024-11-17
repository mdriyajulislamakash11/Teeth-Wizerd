import React from "react";
import { NavLink } from "react-router-dom";

const SurvicesCard = ({ survice }) => {
  const { treatment, image, cost, description, id } = survice;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
          className="h-56 w-full"
          src={image}
          alt={treatment}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {treatment}
          <div className="badge badge-secondary">{cost}</div>
        </h2>
        <p title={description}>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
          <button className=" badge badge-outline bg-purple-600 p-3 text-white font-semibold">Checkout More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SurvicesCard;
