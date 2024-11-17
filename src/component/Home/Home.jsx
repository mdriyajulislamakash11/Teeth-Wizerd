import React from "react";
import Banner from "../Banner/Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import SurvicesCard from "../Survices Card/SurvicesCard";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
  const survices = useLoaderData();
  const {survicesData, feedBackData} = survices;
  console.log(survices);
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-4">
        {survicesData.slice(0, 4).map((survice) => (
          <SurvicesCard key={survice.id} survice={survice}></SurvicesCard>
        ))}
      </div>
      <div className="flex justify-center ">
        <button className=" my-6 btn px-8 bg-purple-600 text-white font-bold rounded-full">
            <NavLink to="/allTreatments">Show More...!</NavLink>
        </button>
      </div>

        <section>
            <FeedBack feedBackData={feedBackData}></FeedBack>
        </section>
    </div>
  );
};

export default Home;
