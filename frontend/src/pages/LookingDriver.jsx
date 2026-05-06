import React from "react";
import { Link } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

const LookingDriver = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center px-4">
      <div className="w-[360px] h-[760px] bg-[#111] rounded-[40px] p-5 flex flex-col justify-center items-center">
        <LoaderCircle size={80} className="text-green-400 animate-spin" />

        <h1 className="text-white text-3xl font-bold mt-8">
          Looking for Driver
        </h1>

        <p className="text-gray-400 text-center mt-4">
          Searching nearby captains for your ride...
        </p>

        <div className="w-full mt-10 bg-white/10 rounded-3xl p-5">
          <div className="flex justify-between text-white">
            <span>Pickup</span>
            <span>Delhi</span>
          </div>

          <div className="flex justify-between text-white mt-4">
            <span>Destination</span>
            <span>Noida</span>
          </div>

          <div className="flex justify-between text-green-400 mt-4 font-bold">
            <span>Fare</span>
            <span>₹149</span>
          </div>
        </div>
        <Link to="/captain-found">

  <button className="w-full mt-8 bg-green-500 py-4 rounded-2xl text-white font-bold">
    Find Captain
  </button>

</Link>
      </div>
    </div>
  );
};

export default LookingDriver;
