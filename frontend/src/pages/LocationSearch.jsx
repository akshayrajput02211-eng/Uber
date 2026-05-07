import React, { useEffect } from "react";

import {
  Search,
  MapPin,
  Navigation,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { gsap } from "gsap";

const locations = [
  {
    title: "Connaught Place",
    subtitle: "Central Delhi",
    time: "4 min away",
  },
  {
    title: "Cyber Hub",
    subtitle: "Gurgaon",
    time: "8 min away",
  },
  {
    title: "IGI Airport T3",
    subtitle: "New Delhi",
    time: "12 min away",
  },
];

const LocationSearch = () => {

  useEffect(() => {
    gsap.from(".location-card", {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(".search-box", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full min-h-screen bg-black flex justify-center items-center px-4 overflow-hidden relative"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-green-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-0 w-[200px] h-[200px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* PHONE UI */}
      <div className="relative w-[360px] h-[760px] bg-[#0d0d0d] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">

        {/* MAP BACKGROUND */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1974&auto=format&fit=crop"
          alt="map"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 p-5">

          {/* HEADER */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-4xl font-bold text-white leading-tight">
              Find Your <br />
              Destination
            </h1>

            <p className="text-gray-400 mt-3 text-sm">
              Search realtime pickup points and smart ride routes.
            </p>
          </motion.div>

          {/* SEARCH BOX */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="search-box mt-8 bg-white/95 backdrop-blur-xl rounded-[30px] p-5 shadow-2xl"
          >

            <div className="flex items-center gap-3 border-b border-gray-300 pb-4">
              <Search size={18} className="text-black" />

              <input
                type="text"
                placeholder="Search pickup point"
                className="w-full outline-none bg-transparent text-black"
              />
            </div>

            <div className="flex items-center gap-3 pt-4">
              <MapPin size={18} className="text-black" />

              <input
                type="text"
                placeholder="Enter destination"
                className="w-full outline-none bg-transparent text-black"
              />
            </div>
          </motion.div>

          {/* LIVE STATUS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-2xl p-4"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <p className="text-green-300 text-sm">
              12 drivers nearby your location
            </p>
          </motion.div>

          {/* LOCATION LIST */}
          <div className="mt-6">

            {locations.map((item, index) => (
              <Link
                key={index}
                to="/ride-selection"
              >
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    x: 6,
                  }}

                  whileTap={{
                    scale: 0.97,
                  }}

                  className="location-card bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-3xl mb-4 cursor-pointer"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="bg-green-500/20 p-3 rounded-full">
                        <Navigation className="text-green-400" />
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 text-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-gray-300 text-sm">
                      <Clock3 size={14} />
                      {item.time}
                    </div>

                  </div>
                </motion.div>
              </Link>
            ))}

          </div>

          {/* BOTTOM BUTTON */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 transition-all py-4 rounded-2xl text-white font-bold shadow-lg shadow-green-500/30"
          >
            Confirm Destination
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
};

export default LocationSearch;