import {
  MapPin,
  Clock3,
  Navigation,
  Star,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import React, {
  useContext,
  useEffect,
  useRef,
} from "react";

import {
  motion,
} from "framer-motion";

import { gsap } from "gsap";

import socket from "../services/socket";

import { UserDataContext } from "../context/UserContext";

const Home = () => {

  const { user } = useContext(
    UserDataContext
  );

  const cardRef = useRef(null);

  /* SOCKET CONNECTION */
  useEffect(() => {

    socket.on("connect", () => {

      console.log("Socket Connected");

    });

    return () => {

      socket.disconnect();

    };

  }, []);

  /* GSAP ANIMATION */
  useEffect(() => {

    gsap.from(cardRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

  }, []);

  return (

    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      transition={{ duration: 0.8 }}

      className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-6 overflow-hidden relative"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-green-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-white/10 blur-[120px] rounded-full"></div>

      {/* PHONE UI */}
      <motion.div

        ref={cardRef}

        initial={{ scale: 0.9 }}

        animate={{ scale: 1 }}

        transition={{
          duration: 0.6,
          type: "spring",
        }}

        className="relative w-[360px] h-[760px] rounded-[40px] overflow-hidden border border-white/10 bg-black shadow-2xl"
      >

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
          alt="car"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black"></div>

        {/* EXTRA GLOW */}
        <motion.div

          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
          }}

          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-green-500/20 blur-[140px] rounded-full"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between h-full p-5">

          {/* TOP SECTION */}
          <div>

            {/* HEADER */}
            <div className="flex items-center justify-between">

              <motion.h1

                initial={{ x: -40, opacity: 0 }}

                animate={{ x: 0, opacity: 1 }}

                transition={{ delay: 0.2 }}

                className="text-3xl font-bold text-white"
              >

                Uber
                <span className="text-green-400">
                  X
                </span>

              </motion.h1>

              <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">

                <p className="text-xs text-white">
                  Delhi
                </p>

              </div>

            </div>

            {/* HERO */}
            <div className="mt-10">

              <motion.h2

                initial={{ y: 30, opacity: 0 }}

                animate={{ y: 0, opacity: 1 }}

                transition={{ delay: 0.4 }}

                className="text-5xl font-bold text-white leading-tight"
              >

                Your Ride, <br />
                Your Control

              </motion.h2>

              <motion.p

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: 0.6 }}

                className="text-gray-300 mt-4 text-sm leading-relaxed"
              >

                Experience premium travel with realtime
                tracking, comfort and smart mobility.

              </motion.p>

            </div>

            {/* USER INFO */}
            <motion.div

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              transition={{ delay: 0.7 }}

              className="mt-5 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-xl"
            >

              <h2 className="text-white font-semibold">
                Welcome back 👋
              </h2>

              <p className="text-gray-300 text-sm mt-1">
                {user?.fullname?.firstname}{" "}
                {user?.fullname?.lastname}
              </p>

              <p className="text-gray-400 text-xs mt-1">
                {user?.email}
              </p>

            </motion.div>

            {/* LOCATION CARD */}
            <motion.div

              initial={{ y: 50, opacity: 0 }}

              animate={{ y: 0, opacity: 1 }}

              transition={{ delay: 0.8 }}

              className="mt-8 bg-white rounded-[28px] p-4 shadow-xl"
            >

              {/* PICKUP */}
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4">

                <MapPin
                  className="text-black"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="w-full outline-none text-sm text-black bg-transparent"
                />

              </div>

              {/* DESTINATION */}
              <div className="flex items-center gap-3 pt-4">

                <Navigation
                  className="text-black"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full outline-none text-sm text-black bg-transparent"
                />

              </div>

              {/* CTA */}
              <motion.button

                whileTap={{
                  scale: 0.95,
                }}

                whileHover={{
                  scale: 1.02,
                }}

                className="w-full mt-5 bg-black text-white py-3 rounded-2xl text-sm font-semibold"
              >

                Let's Go

              </motion.button>

            </motion.div>

            {/* RIDE OPTIONS */}
            <div className="flex gap-3 mt-6 overflow-x-auto no-scrollbar">

              {["Uber Go", "Premier"].map(
                (ride, index) => (

                  <motion.div

                    key={index}

                    initial={{
                      opacity: 0,
                      x: 50,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      delay: index * 0.2 + 1,
                    }}

                    whileHover={{
                      y: -5,
                    }}

                    className="min-w-[150px] bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-4"
                  >

                    <div className="flex items-center justify-between">

                      <h3 className="text-white font-semibold">
                        {ride}
                      </h3>

                      <Star
                        className="text-yellow-400 fill-yellow-400"
                        size={15}
                      />

                    </div>

                    <p className="text-gray-300 text-xs mt-2">
                      Affordable rides
                    </p>

                    <div className="flex items-center justify-between mt-4">

                      <span className="text-white font-bold">
                        ₹149
                      </span>

                      <div className="flex items-center gap-1 text-gray-300 text-xs">

                        <Clock3 size={12} />

                        4 min

                      </div>

                    </div>

                  </motion.div>

                )
              )}

            </div>

          </div>

          {/* BOTTOM BUTTON */}
          <Link to="/location-search">

            <motion.button

              whileTap={{
                scale: 0.96,
              }}

              whileHover={{
                scale: 1.02,
              }}

              className="w-full bg-green-500 hover:bg-green-600 transition py-4 rounded-2xl text-white font-bold shadow-lg shadow-green-500/30"
            >

              Book Your Ride

            </motion.button>

          </Link>

        </div>

      </motion.div>

    </motion.div>

  );
};

export default Home;