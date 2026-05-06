import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const RateCaptain = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">

      <div className="w-[360px] h-[760px] bg-[#111] rounded-[40px] p-5 flex flex-col justify-center items-center">

        <h1 className="text-white text-3xl font-bold">
          Rate Captain
        </h1>

        <p className="text-gray-400 mt-4">
          How was your ride?
        </p>

        
        <div className="flex gap-4 mt-10">

          <Star className="text-yellow-400" size={40} />
          <Star className="text-yellow-400" size={40} />
          <Star className="text-yellow-400" size={40} />
          <Star className="text-yellow-400" size={40} />
          <Star className="text-yellow-400" size={40} />

        </div>

        <textarea
          placeholder="Write feedback..."
          className="w-full h-32 mt-10 rounded-3xl bg-white/10 text-white p-4 outline-none"
        />

        <Link to="/home">

          <button className="w-full mt-8 bg-green-500 py-4 rounded-2xl text-white font-bold">
            Submit Review
          </button>

        </Link>

      </div>
    </div>
  );
};

export default RateCaptain;