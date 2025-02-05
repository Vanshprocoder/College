import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Button from '../components/Button';

const ForgotPass = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      {/* Main Container */}
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section (Form) */}
          <div className="w-full md:w-1/2 p-8">
            <div className="max-w-md mx-auto">
              <Logo />
              <h1 className="text-3xl font-bold text-center my-8 text-gray-900">
                Forgot Password
              </h1>

              <form className="space-y-6">
              <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all text-black placeholder-gray-500"
                    placeholder="Enter your email"
                  />
                </div>

                <Link to="/forgotpass/otp"
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                <Button text="Send OTP" />
                </Link>
              </form>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="hidden md:block md:w-1/2 p-8">
            <img
              src="../src/assets/image.png"
              alt="Login Illustration"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default ForgotPass;