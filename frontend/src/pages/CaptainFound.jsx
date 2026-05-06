import React from "react";
import { CarFront, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CaptainFound = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center px-4">

      <div className="w-[360px] h-[760px] bg-[#111] rounded-[40px] p-5 flex flex-col justify-center">

        <div className="flex justify-center">
          <div className="bg-green-500 p-6 rounded-full">
            <CarFront size={50} className="text-white" />
          </div>
        </div>

        <h1 className="text-white text-3xl font-bold text-center mt-8">
          Captain Found
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Your ride has been confirmed 🚖
        </p>

        
        <div className="bg-white/10 rounded-3xl p-5 mt-10">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-white text-xl font-bold">
                Rajveer Singh
              </h2>

              <p className="text-gray-400 mt-1">
                Hyundai Verna
              </p>
            </div>

            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={18} fill="yellow" />
              4.9
            </div>

          </div>

          <div className="mt-6 flex justify-between text-white">
            <span>Vehicle No</span>
            <span>DL 8C AX 4587</span>
          </div>

          <div className="mt-4 flex justify-between text-green-400 font-bold">
            <span>OTP</span>
            <span>2244</span>
          </div>

        </div>

        <Link to="/captain-arriving">

          <button className="w-full mt-10 bg-green-500 py-4 rounded-2xl text-white font-bold">
            Track Captain
          </button>

        </Link>

      </div>
    </div>
  );
};

export default CaptainFound;