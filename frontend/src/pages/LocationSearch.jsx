import React from "react";
import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const LocationSearch = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center px-4">

      <div className="w-[360px] h-[760px] bg-[#111] rounded-[40px] overflow-hidden border border-white/10 p-5">

        <h1 className="text-3xl font-bold text-white">
          Choose Location
        </h1>

        
        <div className="mt-8 bg-white rounded-3xl p-4">

          <div className="flex items-center gap-3 border-b pb-4">
            <Search className="text-black" />

            <input
              type="text"
              placeholder="Search pickup"
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center gap-3 pt-4">
            <MapPin className="text-black" />

            <input
              type="text"
              placeholder="Where to?"
              className="w-full outline-none"
            />
          </div>
        </div>

        
        <div className="mt-8 space-y-4">

          <Link to="/ride-selection">

  <div className="bg-white/10 p-4 mt-8 space-y-4 rounded-2xl gap-5 text-white">
    Connaught Place, Delhi
  </div>

</Link>

          <Link to="/ride-selection">

  <div className="bg-white/10 p-4 mt-8 space-y-4 rounded-2xl  gap-5 text-white">
    Noida Sector 18
  </div>

</Link>

          <Link to="/ride-selection">

  <div className="bg-white/10 p-4 mt-8 space-y-4 rounded-2xl  gap-5 text-white">
    IGI Airport Terminal 3
  </div>

</Link>

        </div>

      </div>
    </div>
  );
};

export default LocationSearch;