import React from "react";
import { useLoaderData } from "react-router-dom";
import SurvicesCard from "../Survices Card/SurvicesCard";

const AllTreatments = () => {
  const survices = useLoaderData();
  console.log(survices);

  return (
    <div className="grid my-16 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-4">
      {survices.map((survice) => (
        <SurvicesCard key={survice.id} survice={survice}></SurvicesCard>
      ))}
    </div>
  );
};

export default AllTreatments;
