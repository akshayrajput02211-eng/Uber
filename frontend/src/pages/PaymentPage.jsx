import React from "react";
import { CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">

      <div className="w-[360px] h-[760px] bg-[#111] rounded-[40px] p-5">

        <h1 className="text-white text-3xl font-bold">
          Payment
        </h1>

        <div className="bg-white/10 rounded-3xl p-5 mt-10">

          <div className="flex items-center gap-4">

            <div className="bg-green-500 p-4 rounded-full">
              <CreditCard className="text-white" />
            </div>

            <div>
              <h2 className="text-white font-bold">
                Cash Payment
              </h2>

              <p className="text-gray-400">
                Pay after ride completion
              </p>
            </div>

          </div>

        </div>

        <div className="bg-white/10 rounded-3xl p-5 mt-5">

          <div className="flex justify-between text-white">
            <span>Total Fare</span>
            <span>₹149</span>
          </div>

        </div>

        <Link to="/ride-completed">

          <button className="w-full mt-10 bg-green-500 py-4 rounded-2xl text-white font-bold">
            Confirm Payment
          </button>

        </Link>

      </div>
    </div>
  );
};

export default PaymentPage;