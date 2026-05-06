import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  LockKeyhole,
  Phone,
  ArrowRight,
} from "lucide-react";

const SignUp = () => {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4 overflow-hidden">
      
      
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-green-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full"></div>

      
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 shadow-2xl">
        
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white tracking-wide">
            Uber<span className="text-green-400">X</span>
          </h1>

          <p className="text-gray-300 mt-2">
            Create your account & start your ride 🚖
          </p>
        </div>

        
        <form className="space-y-5">

          
          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">
            <User className="text-gray-300" size={20} />

            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

        
          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">
            <Mail className="text-gray-300" size={20} />

            <input
              type="email"
              placeholder="Email Address"
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
            <LockKeyhole className="text-gray-300" size={20} />

            <input
              type="password"
              placeholder="Create Password"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
          >
            Create Account
            <ArrowRight size={20} />
          </button>
        </form>

        
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-white/10"></div>
          <p className="text-gray-400 text-sm">OR</p>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        
        <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
          Continue with Google
        </button>

        
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-green-400 hover:text-green-300 cursor-pointer">
              Login
            </span>
          </Link>
        </p>
        
      </div>
    </div>
  );
};

export default SignUp;