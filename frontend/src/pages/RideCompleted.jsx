import React from "react";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

const RideCompleted = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">

      <div className="w-[360px] h-[760px] bg-[#111] rounded-[40px] p-5 flex flex-col justify-center items-center">

        <CircleCheckBig
          size={100}
          className="text-green-500"
        />

        <h1 className="text-white text-4xl font-bold mt-8">
          Ride Completed
        </h1>

        <p className="text-gray-400 mt-4 text-center">
          Thank you for riding with Uber 🚖
        </p>

        <Link to="/rate-captain">

          <button className="w-full mt-10 bg-green-500 px-10 py-4 rounded-2xl text-white font-bold">
            Rate Captain
          </button>

        </Link>

      </div>
    </div>
  );
};

export default RideCompleted;