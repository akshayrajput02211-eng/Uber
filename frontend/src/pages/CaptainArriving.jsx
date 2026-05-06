import React from "react";
import { MapPinned, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CaptainArriving = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center px-4">

      <div className="w-[360px] h-[760px] bg-[#111] rounded-[40px] overflow-hidden">

        
        <div className="h-[55%] bg-zinc-800 flex items-center justify-center">

          <MapPinned size={70} className="text-green-400" />

        </div>

        
        <div className="p-5">

          <h1 className="text-white text-3xl font-bold">
            Captain Arriving
          </h1>

          <p className="text-gray-400 mt-2">
            Arriving in 3 minutes
          </p>

          
          <div className="bg-white/10 rounded-3xl p-5 mt-6">

            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-white font-bold text-xl">
                  Rajveer Singh
                </h2>

                <p className="text-gray-400">
                  Hyundai Verna
                </p>
              </div>

              <button className="bg-green-500 p-3 rounded-full">
                <Phone className="text-white" />
              </button>

            </div>

          </div>

          <Link to="/ride-started">

            <button className="w-full mt-8 bg-green-500 py-4 rounded-2xl text-white font-bold">
              Start Ride
            </button>

          </Link>

        </div>

      </div>
    </div>
  );
};

export default CaptainArriving;