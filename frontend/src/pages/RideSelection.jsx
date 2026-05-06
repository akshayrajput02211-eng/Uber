import React from "react";
import { Car, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const RideSelection = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center px-4">
      <div className="w-[360px] h-[760px] bg-[#111] rounded-[40px] p-5">
        <h1 className="text-3xl font-bold text-white">Choose Ride</h1>

        <div className="mt-8 space-y-4">
          <div className="bg-white rounded-3xl p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Car size={40} />
<Link to="/looking-driver">
              <div>
                <h2 className="font-bold">Uber Go</h2>

                <p className="text-sm text-gray-500">Affordable ride</p>

                <div className="flex items-center gap-1 text-sm mt-1">
                  <Clock3 size={14} />4 min away
                </div>
              </div></Link>
            </div>

            <h1 className="font-bold text-xl">₹149</h1>
          </div>


          <div className="bg-white rounded-3xl p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Car size={40} />
<Link to="/looking-driver">
              <div>
                <h2 className="font-bold">Premier</h2>

                <p className="text-sm text-gray-500">Luxury comfort</p>

                <div className="flex items-center gap-1 text-sm mt-1">
                  <Clock3 size={14} />2 min away
                </div>
              </div></Link>
            </div>

            <h1 className="font-bold text-xl">₹299</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideSelection;
