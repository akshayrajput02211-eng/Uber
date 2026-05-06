import React from "react";
import {
  User,
  Mail,
  Phone,
  Car,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const CaptainSignUp = () => {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">
      
      
      <div className="absolute w-[320px] h-[320px] bg-yellow-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      
      <div className="relative w-[360px] h-[760px] rounded-[40px] overflow-hidden border border-white/10 bg-[#111] shadow-2xl p-6 flex flex-col justify-center">
        
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Uber<span className="text-yellow-400">Captain</span>
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Drive & earn with Uber 🚘
          </p>
        </div>

        
        <form className="space-y-4">
          
          
          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">
            <User className="text-gray-300" size={20} />

            <input
              type="text"
              placeholder="Captain Name"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

          
          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">
            <Mail className="text-gray-300" size={20} />

            <input
              type="email"
              placeholder="Captain Email"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

         
          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">
            <Phone className="text-gray-300" size={20} />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

          
          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">
            <Car className="text-gray-300" size={20} />

            <input
              type="text"
              placeholder="Vehicle Name"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

          
          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">
            <LockKeyhole className="text-gray-300" size={20} />

            <input
              type="password"
              placeholder="Create Password"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

          
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 transition py-4 rounded-2xl text-black font-bold flex items-center justify-center gap-2">
            Register Captain
            <ArrowRight size={20} />
          </button>
        </form>

      
        <Link to="/captain-login">
          <button className="w-full mt-5 bg-white/10 text-white py-4 rounded-2xl font-semibold hover:bg-white/20 transition">
            Already Captain? Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignUp;