import React, { useEffect } from "react";

import {
  Phone,
  Star,
  ShieldCheck,
  Clock3,
  Navigation,
} from "lucide-react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { gsap } from "gsap";


import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CaptainArriving = () => {

  useEffect(() => {

    gsap.from(".fade-item", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
    });

  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-[#050505] flex justify-center items-center px-4 overflow-hidden"
    >

      
      <div className="relative w-[360px] h-[740px] bg-[#0d0d0d] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl flex flex-col">

        
        <div className="relative h-[42%]">

          <MapContainer
            center={[28.6139, 77.209]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full z-0"
          >

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            
            <Marker position={[28.6139, 77.209]}>
              <Popup>Pickup Point</Popup>
            </Marker>

            
            <Marker position={[28.621, 77.215]}>
              <Popup>Captain Nearby</Popup>
            </Marker>

          </MapContainer>

          
          <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>

          
          <motion.div

            initial={{ y: -30, opacity: 0 }}

            animate={{ y: 0, opacity: 1 }}

            className="absolute top-4 left-4 right-4 z-[999] bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-4"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-300 text-sm">
                  Captain arriving in
                </p>

                <h1 className="text-white text-2xl font-bold mt-1">
                  3 mins
                </h1>

              </div>

              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-2 rounded-full">

                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

                <span className="text-green-300 text-sm">
                  Live
                </span>

              </div>

            </div>

          </motion.div>

        </div>

        
        <div className="flex-1 p-5 flex flex-col justify-between overflow-y-auto no-scrollbar">

          <div>

            
            <div className="fade-item">

              <h1 className="text-white text-3xl font-bold leading-tight">
                Your Driver <br />
                Is Nearby
              </h1>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Live tracking enabled. Your captain is reaching your pickup point.
              </p>

            </div>

            
            <motion.div

              whileHover={{
                scale: 1.02,
              }}

              className="fade-item mt-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] p-4"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="captain"
                    className="w-14 h-14 rounded-2xl object-cover"
                  />

                  <div>

                    <div className="flex items-center gap-2">

                      <h2 className="text-white font-bold">
                        Rajveer Singh
                      </h2>

                      <Star
                        size={13}
                        className="text-yellow-400 fill-yellow-400"
                      />

                    </div>

                    <p className="text-gray-400 text-sm mt-1">
                      Hyundai Verna
                    </p>

                    <p className="text-green-300 text-sm">
                      DL 01 AB 4589
                    </p>

                  </div>

                </div>

                
                <motion.button

                  whileTap={{
                    scale: 0.9,
                  }}

                  whileHover={{
                    scale: 1.08,
                  }}

                  className="bg-green-500 p-3 rounded-full shadow-lg shadow-green-500/30"
                >

                  <Phone
                    size={18}
                    className="text-white"
                  />

                </motion.button>

              </div>

            </motion.div>

           
            <div className="fade-item mt-4 bg-white/5 border border-white/10 rounded-3xl p-4">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="bg-green-500/10 p-3 rounded-full">
                    <Navigation
                      size={18}
                      className="text-green-400"
                    />
                  </div>

                  <div>

                    <p className="text-gray-400 text-sm">
                      Destination
                    </p>

                    <h2 className="text-white font-semibold">
                      Noida Sector 18
                    </h2>

                  </div>

                </div>

                <div className="flex items-center gap-1 text-green-300">

                  <Clock3 size={14} />

                  <span className="text-sm">
                    18 mins
                  </span>

                </div>

              </div>

            </div>

            
            <div className="fade-item mt-4 flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-2xl p-4">

              <ShieldCheck
                size={18}
                className="text-green-400"
              />

              <p className="text-green-200 text-sm">
                Your trip is monitored for safety.
              </p>

            </div>

          </div>

          
          <div className="fade-item mt-5 pb-1">

            <Link to="/ride-started">

              <motion.button

                whileHover={{
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.96,
                }}

                className="w-full bg-green-500 hover:bg-green-600 transition-all py-4 rounded-2xl text-white font-bold shadow-lg shadow-green-500/30"
              >
                Start Ride
              </motion.button>

            </Link>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default CaptainArriving;