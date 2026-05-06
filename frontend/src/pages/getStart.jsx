import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const Start = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-4 py-6">
      
      
      <div className="relative w-[360px] h-[760px] rounded-[40px] overflow-hidden border border-white/10 bg-black shadow-2xl">
        
        
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop"
          alt="uber"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black"></div>

        
        <div className="relative z-10 flex flex-col justify-between h-full p-5">
          
          
          <div>
            
            <h1 className="text-3xl font-bold text-white">
              Uber<span className="text-green-400">X</span>
            </h1>

            <div className="mt-16">
              <h2 className="text-4xl font-bold text-white leading-tight">
                Your Ride <br />
                Anytime
              </h2>

              <p className="text-gray-300 mt-4 text-sm leading-6">
                Fast, affordable and secure rides with premium comfort.
              </p>
            </div>

            
            <div className="mt-10 space-y-4">
              
              
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
                <div className="bg-green-500 p-3 rounded-xl">
                  <MapPin size={18} className="text-white" />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Live Tracking
                  </h3>

                  <p className="text-gray-300 text-xs mt-1">
                    Track your ride in real time
                  </p>
                </div>
              </div>

              
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
                <div className="bg-green-500 p-3 rounded-xl">
                  <ShieldCheck size={18} className="text-white" />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Safe Rides
                  </h3>

                  <p className="text-gray-300 text-xs mt-1">
                    Trusted drivers & secure travel
                  </p>
                </div>
              </div>

              
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4">
                <div className="bg-green-500 p-3 rounded-xl">
                  <Clock3 size={18} className="text-white" />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Quick Booking
                  </h3>

                  <p className="text-gray-300 text-xs mt-1">
                    Book rides in seconds
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-4">
            
            <Link to="/login">
            <button className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={20} />
              
            </button>
            </Link>

            <Link to="/signup">
            <button className="w-full bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-white/20 transition-all duration-300 py-4 rounded-2xl text-white font-semibold">
              I Already Have Account
              
    
  
            </button>
            </Link>
            

  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;