import React from "react";
import banner from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className="hero w-11/12 mx-auto my-14">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, animi perspiciatis, nihil natus excepturi ad voluptatum veritatis soluta aperiam labore harum assumenda omnis minima! Molestiae illum quam corrupti temporibus esse.
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-purple-600 text-white font-bold">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
