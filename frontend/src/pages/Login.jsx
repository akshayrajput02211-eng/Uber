import React, {
  useContext,
  useState,
} from "react";

import {
  Mail,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import api from "../services/api";

import { UserDataContext } from "../context/UserContext";

const Login = () => {

  const navigate = useNavigate();

  const { setUser } = useContext(
    UserDataContext
  );

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await api.post(
        "/users/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      /* SAVE TOKEN */
      localStorage.setItem(
        "token",
        response.data.token
      );

      /* SAVE USER */
      setUser(response.data.user);

      /* CLEAR INPUTS */
      setEmail("");
      setPassword("");

      /* REDIRECT */
      navigate("/home");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-green-500/20 blur-[120px] rounded-full top-10 left-10"></div>

      <div className="absolute w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full bottom-10 right-10"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] p-8 shadow-2xl">

        {/* HEADER */}
        <div className="text-center mb-8">

          <h1 className="text-white text-4xl font-bold tracking-wide">
            Uber
            <span className="text-green-400">
              X
            </span>
          </h1>

          <p className="text-gray-300 mt-2">
            Welcome back, ride smarter 🚖
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">

            <Mail
              className="text-gray-300"
              size={20}
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </div>

          {/* PASSWORD */}
          <div className="bg-white/10 border border-white/10 rounded-2xl px-4 py-4 flex items-center gap-3">

            <LockKeyhole
              className="text-gray-300"
              size={20}
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </div>

          {/* FORGOT */}
          <div className="flex justify-end">

            <button
              type="button"
              className="text-sm text-green-400 hover:text-green-300 transition"
            >
              Forgot Password?
            </button>

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
          >

            {
              loading
                ? "Logging in..."
                : "Login"
            }

            <ArrowRight size={20} />

          </button>

        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">

          <div className="flex-1 h-[1px] bg-white/10"></div>

          <p className="text-gray-400 text-sm">
            OR
          </p>

          <div className="flex-1 h-[1px] bg-white/10"></div>

        </div>

        {/* GOOGLE */}
        <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">

          Continue with Google

        </button>

        {/* SIGNUP */}
        <p className="text-center text-gray-400 mt-6 text-sm">

          Don’t have an account?{" "}

          <Link to="/signup">

            <span className="text-green-400 hover:text-green-300">

              Sign Up

            </span>

          </Link>

        </p>

      </div>
    </div>
  );
};

export default Login;