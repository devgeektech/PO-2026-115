"use client";

import { useEffect, useState } from "react";
import { X, Eye, EyeOff, ChevronDown } from "lucide-react";

type SignupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Signup({ isOpen, onClose }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showReferral, setShowReferral] = useState(false);

  // ESC close + prevent body scroll
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-md bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 shadow-2xl animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-semibold">Sign Up</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="space-y-5"
        >
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <p className="text-xs text-gray-400">
            8–20 characters. At least one number & one uppercase letter.
          </p>

          {/* First / Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Date of birth</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <select className="w-full appearance-none bg-[#2c2c2c] border border-[#444] px-4 py-3 rounded-md text-white focus:outline-none focus:border-[#bc13fe]">
                  <option>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>

              <input
                type="text"
                placeholder="Day"
                className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
              />

              <input
                type="text"
                placeholder="Year"
                className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
              />
            </div>
          </div>

          {/* Referral Toggle */}
          <button
            type="button"
            onClick={() => setShowReferral(!showReferral)}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${
                showReferral ? "rotate-90" : ""
              }`}
            />
            Referral code (optional)
          </button>

          {showReferral && (
            <input
              type="text"
              placeholder="Enter referral code"
              className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
            />
          )}

          {/* Continue */}
          <button
            type="submit"
            className="w-full bg-[#64008b] border-2 border-[#bc13fe] text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
