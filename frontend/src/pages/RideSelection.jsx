import React, { useEffect } from "react";

import {
  Car,
  Clock3,
  Users,
  Zap,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { gsap } from "gsap";

import api from "../services/api";

const rides = [
  {
    name: "Uber Go",
    desc: "Affordable everyday rides",
    time: "4 min away",
    price: 149,
    icon: <Car size={34} />,
    glow: "from-green-500/20 to-transparent",
  },

  {
    name: "Premier",
    desc: "Luxury comfort experience",
    time: "2 min away",
    price: 299,
    icon: <Zap size={34} />,
    glow: "from-yellow-500/20 to-transparent",
  },

  {
    name: "Uber XL",
    desc: "Perfect for groups & luggage",
    time: "6 min away",
    price: 399,
    icon: <Users size={34} />,
    glow: "from-blue-500/20 to-transparent",
  },
];

const RideSelection = () => {

  useEffect(() => {

    gsap.from(".ride-card", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

  }, []);

  /* CREATE RIDE FUNCTION */
  const createRide = async (ride) => {

    try {

      const response = await api.post(

        "/rides/create",

        {
          pickup: "Connaught Place",
          destination: "Noida Sector 18",
          fare: ride.price,
          vehicleType: ride.name,
        },

        {
          headers: {
            Authorization:
              `Bearer ${localStorage.getItem("token")}`,
          },
        }

      );

      console.log(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      transition={{ duration: 0.7 }}

      className="w-full min-h-screen bg-black flex justify-center items-center px-4 overflow-hidden relative"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-[260px] h-[260px] bg-green-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-0 w-[220px] h-[220px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

      {/* PHONE UI */}
      <div className="relative w-[360px] min-h-[760px] bg-[#0c0c0c] rounded-[40px] overflow-y-auto no-scrollbar border border-white/10 shadow-2xl pb-6">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop"
          alt="car"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 p-5 flex flex-col h-full justify-between">

          {/* TOP CONTENT */}
          <div>

            {/* HEADER */}
            <motion.div

              initial={{ y: -30, opacity: 0 }}

              animate={{ y: 0, opacity: 1 }}
            >

              <h1 className="text-4xl font-bold text-white leading-tight">
                Select Your <br />
                Ride Experience
              </h1>

              <p className="text-gray-400 mt-3 text-sm">
                Compare comfort, pricing and realtime arrival instantly.
              </p>

            </motion.div>

            {/* LIVE STATUS */}
            <motion.div

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              transition={{ delay: 0.4 }}

              className="mt-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between"
            >

              <div>

                <p className="text-gray-400 text-xs">
                  Nearby Drivers
                </p>

                <h2 className="text-white font-bold text-xl">
                  18 Available
                </h2>

              </div>

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            </motion.div>

            {/* RIDE CARDS */}
            <div className="mt-8 space-y-5">

              {rides.map((ride, index) => (

                <Link
                  key={index}
                  to="/looking-driver"
                  onClick={() => createRide(ride)}
                >

                  <motion.div

                    whileHover={{
                      scale: 1.03,
                      y: -4,
                    }}

                    whileTap={{
                      scale: 0.97,
                    }}

                    className={`ride-card relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-5 cursor-pointer`}
                  >

                    {/* CARD GLOW */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${ride.glow}`}
                    ></div>

                    <div className="relative z-10 flex justify-between items-center">

                      <div className="flex items-center gap-4">

                        <div className="bg-white/10 p-4 rounded-2xl text-white">
                          {ride.icon}
                        </div>

                        <div>

                          <div className="flex items-center gap-2">

                            <h2 className="font-bold text-white text-lg">
                              {ride.name}
                            </h2>

                            <Star
                              size={14}
                              className="text-yellow-400 fill-yellow-400"
                            />

                          </div>

                          <p className="text-sm text-gray-400 mt-1">
                            {ride.desc}
                          </p>

                          <div className="flex items-center gap-1 text-sm mt-2 text-green-300">

                            <Clock3 size={14} />

                            {ride.time}

                          </div>

                        </div>
                      </div>

                      <div className="text-right">

                        <h1 className="font-bold text-2xl text-white">
                          ₹{ride.price}
                        </h1>

                        <p className="text-xs text-gray-400 mt-1">
                          estimated
                        </p>

                      </div>

                    </div>

                  </motion.div>

                </Link>

              ))}

            </div>
          </div>

          {/* BOTTOM BUTTON */}
          <div className="mt-6 pb-2">

            <motion.button

              whileHover={{
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.96,
              }}

              className="w-full bg-green-500 hover:bg-green-600 transition-all py-4 rounded-2xl text-white font-bold shadow-lg shadow-green-500/30"
            >

              Continue Booking

            </motion.button>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default RideSelection;