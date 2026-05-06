import React from "react";
import { Link } from "react-router-dom";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import {
  Navigation,
  Phone,
  X,
} from "lucide-react";



// Leaflet Icon Fix
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});



const RideStarted = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center px-4 py-6">

      {/* Mobile Container */}
      <div className="w-[360px] h-[760px] bg-[#111] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl flex flex-col">

        {/* MAP */}
        <div className="h-[42%] relative">

          <MapContainer
            center={[28.6139, 77.209]}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full z-0"
          >

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[28.6139, 77.209]}>
              <Popup>
                Captain is here 🚖
              </Popup>
            </Marker>

          </MapContainer>



          {/* Floating Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-3 z-[1000]">

            <button className="bg-green-500 p-3 rounded-full shadow-lg">
              <Phone
                className="text-white"
                size={20}
              />
            </button>

            <button className="bg-red-500 p-3 rounded-full shadow-lg">
              <X
                className="text-white"
                size={20}
              />
            </button>

          </div>

        </div>



        {/* Bottom Section */}
        <div className="flex-1 p-5 flex flex-col justify-between overflow-y-auto">

          {/* Heading */}
          <div>

            <div className="flex items-center gap-3">

              <div className="bg-green-500 p-3 rounded-2xl">

                <Navigation
                  className="text-white"
                  size={24}
                />

              </div>

              <div>

                <h1 className="text-white text-3xl font-bold">
                  Ride Started
                </h1>

                <p className="text-gray-400 text-sm mt-1">
                  Enjoy your journey 🚖
                </p>

              </div>

            </div>



            {/* Ride Info */}
            <div className="bg-white/10 rounded-3xl p-5 mt-6">

              <div className="flex justify-between text-white">
                <span>Pickup</span>
                <span>Delhi</span>
              </div>

              <div className="flex justify-between text-white mt-4">
                <span>Destination</span>
                <span>Noida</span>
              </div>

              <div className="flex justify-between text-white mt-4">
                <span>Distance</span>
                <span>18 KM</span>
              </div>

              <div className="flex justify-between text-green-400 mt-4 font-bold text-lg">
                <span>Fare</span>
                <span>₹149</span>
              </div>

            </div>

          </div>



          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6 pb-2">

            {/* Cancel */}
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 py-4 rounded-2xl text-black font-bold shadow-lg">
              Cancel Ride
            </button>



            {/* End Ride */}
            <Link
              to="/payment"
              className="w-full"
            >

              <button className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-4 rounded-2xl text-white font-bold shadow-lg">
                End Ride
              </button>

            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default RideStarted;