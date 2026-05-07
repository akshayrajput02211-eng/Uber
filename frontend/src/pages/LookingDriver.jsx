import React, { useEffect } from "react";

import {
  MapPin,
  Navigation,
  Clock3,
  Sparkles,
  CarFront,
} from "lucide-react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { gsap } from "gsap";

const LookingDriver = () => {

  useEffect(() => {

    gsap.from(".fade-item", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
    });

  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen bg-black flex justify-center items-center px-4 overflow-hidden relative"
    >

      
      <div className="absolute top-10 left-0 w-[280px] h-[280px] bg-green-500/10 blur-[130px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500/10 blur-[130px] rounded-full"></div>

     
      <div className="relative w-[360px] h-[760px] rounded-[42px] overflow-hidden border border-white/10 shadow-2xl bg-[#0b0b0b]">

        
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1974&auto=format&fit=crop"
          alt="map"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/70"></div>

       
        <div className="absolute top-40 left-16 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>

        <div className="absolute top-60 right-20 w-3 h-3 bg-green-400 rounded-full animate-ping delay-300"></div>

        <div className="absolute bottom-5 left-24 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-5 left-24 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-6 left-44 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-22 left-14 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-52 left-88 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-66 left-66 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-88 left-55 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-3 left-1 w-3 h-3 bg-green-400 rounded-full animate-ping delay-700"></div>


        <div className="relative z-10 flex flex-col justify-between h-full p-5">

          
          <div>

            
            <div className="fade-item flex items-center justify-between">

              <div>

                <h1 className="text-4xl font-bold text-white leading-tight">
                  Finding <br />
                  Your Driver
                </h1>

                <p className="text-gray-400 text-sm mt-3">
                  Connecting you with the nearest captain.
                </p>

              </div>

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                className="bg-green-500/10 border border-green-500/20 p-4 rounded-full"
              >
                <Sparkles className="text-green-400" />
              </motion.div>

            </div>

            
            <motion.div

              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 2,
              }}

              className="fade-item mt-8 bg-gradient-to-br from-green-500/20 to-white/5 border border-white/10 rounded-[32px] p-5 backdrop-blur-xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="bg-white/10 p-4 rounded-2xl">
                    <CarFront
                      size={34}
                      className="text-white"
                    />
                  </div>

                  <div>

                    <h2 className="text-white text-xl font-bold">
                      Uber Go
                    </h2>

                    <p className="text-gray-300 text-sm mt-1">
                      Driver arriving shortly
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-1 text-green-300 text-sm">
                  <Clock3 size={14} />
                  2 min
                </div>

              </div>

              
              <div className="mt-5 h-2 bg-white/10 rounded-full overflow-hidden">

                <motion.div

                  initial={{
                    width: "10%",
                  }}

                  animate={{
                    width: "100%",
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}

                  className="h-full bg-green-400 rounded-full"
                ></motion.div>

              </div>

            </motion.div>

            
            <div className="mt-8 space-y-4">

              
              <motion.div

                whileHover={{
                  scale: 1.03,
                }}

                className="fade-item bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5"
              >

                <div className="flex items-center gap-4">

                  <div className="bg-green-500/20 p-3 rounded-full">
                    <MapPin className="text-green-400" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Pickup Point
                    </p>

                    <h2 className="text-white font-semibold text-lg">
                      Connaught Place
                    </h2>
                  </div>

                </div>

              </motion.div>

              
              <motion.div

                whileHover={{
                  scale: 1.03,
                }}

                className="fade-item bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5"
              >

                <div className="flex items-center gap-4">

                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Navigation className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Destination
                    </p>

                    <h2 className="text-white font-semibold text-lg">
                      Noida Sector 18
                    </h2>
                  </div>

                </div>

              </motion.div>

            </div>

          </div>

          
          <div className="fade-item">

            <Link to="/captain-found">

              <motion.button

                whileHover={{
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.96,
                }}

                className="w-full bg-green-500 hover:bg-green-600 transition-all py-4 rounded-2xl text-white font-bold shadow-lg shadow-green-500/30"
              >
                View Assigned Captain
              </motion.button>

            </Link>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default LookingDriver;