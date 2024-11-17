import React from "react";

const FeedbackCard = ({ feedback }) => {
  const { name, review, userImg } = feedback;

  return (
    <div className="">
      <div className="card bg-base-200  ">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
              <h2 className="card-title">{name}</h2>
            </div>
            <p className="text-end">{new Date().toLocaleDateString()}</p>
          </div>
          <p>{review}</p>
          <div className="card-actions justify-end items-center">
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                defaultChecked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            <button className="btn bg-purple-600 text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
