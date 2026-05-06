import { MapPin, Clock3, Navigation, Star } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { motion } from "framer-motion";

import { UserDataContext } from "../context/UserContext";

const Home = () => {
  const { user } = useContext(UserDataContext);

  return (
    <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-6"
>
      <div>
        <h1>{user.fullname.firstname}</h1>
        <h2>{user.email}</h2>
      </div>

      <div className="relative w-[360px] h-[760px] rounded-[40px] overflow-hidden border border-white/10 bg-black shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
          alt="car"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black"></div>

        <div className="relative z-10 flex flex-col justify-between h-full p-5">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">
                Uber<span className="text-green-400">X</span>
              </h1>

              <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <p className="text-xs text-white">Delhi</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-4xl font-bold text-white leading-tight">
                Ride <br />
                Smarter
              </h2>

              <p className="text-gray-300 mt-3 text-sm">
                Book rides instantly with comfort & safety.
              </p>
            </div>

            <div className="mt-8 bg-white rounded-[28px] p-4">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                <MapPin className="text-black" size={18} />

                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="w-full outline-none text-sm text-black"
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <Navigation className="text-black" size={18} />

                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full outline-none text-sm text-black"
                />
              </div>

              <Link to="/location-search">
                <button className="w-full mt-5 bg-black text-white py-3 rounded-2xl text-sm font-semibold">
                  Find Ride
                </button>
              </Link>
            </div>

            <div className="flex gap-3 mt-6 overflow-x-auto no-scrollbar">
              <div className="min-w-[150px] bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Uber Go</h3>

                  <Star className="text-yellow-400 fill-yellow-400" size={15} />
                </div>

                <p className="text-gray-300 text-xs mt-2">Affordable rides</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-white font-bold">₹149</span>

                  <div className="flex items-center gap-1 text-gray-300 text-xs">
                    <Clock3 size={12} />4 min
                  </div>
                </div>
              </div>

              <div className="min-w-[150px] bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Premier</h3>

                  <Star className="text-yellow-400 fill-yellow-400" size={15} />
                </div>

                <p className="text-gray-300 text-xs mt-2">Luxury comfort</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-white font-bold">₹299</span>

                  <div className="flex items-center gap-1 text-gray-300 text-xs">
                    <Clock3 size={12} />2 min
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 transition py-4 rounded-2xl text-white font-bold">
            Book Your Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
