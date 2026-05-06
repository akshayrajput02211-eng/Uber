import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import GetStarted from "./pages/getStart";
import Start from "./pages/Start";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import LocationSearch from "./pages/LocationSearch";
import RideSelection from "./pages/RideSelection";
import LookingDriver from "./pages/LookingDriver";
import CaptainFound from "./pages/CaptainFound";
import CaptainArriving from "./pages/CaptainArriving";
import RideStarted from "./pages/RideStarted";
import PaymentPage from "./pages/PaymentPage";
import RideCompleted from "./pages/RideCompleted";
import RateCaptain from "./pages/RateCaptain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/start" element={<Start />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignUp />} />
      <Route path="/location-search" element={<LocationSearch />} />
      <Route path="/ride-selection" element={<RideSelection />} />
      <Route path="/looking-driver" element={<LookingDriver />} />
      <Route path="/captain-found" element={<CaptainFound />} />
      <Route path="/captain-arriving" element={<CaptainArriving />} />
      <Route path="/ride-started" element={<RideStarted />} />
      <Route path="/ride-completed" element={<RideCompleted />} />
      <Route path="/rate-captain" element={<RateCaptain />} />
      <Route path="/payment" element={<PaymentPage />} />
      
    </Routes>
  );
}

export default App;