import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from"../Modal/modal"

const CardDetails = () => {
  const singleData = useLoaderData();
  const { id, treatment, image, cost, description } = singleData;

  return (
    <div className="w-10/12 mx-auto mt-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
            <p className="mb-5">{description}</p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Book Apoinment
            </button>
          </div>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default CardDetails;
