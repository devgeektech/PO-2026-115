"use client";

import { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";

type SignupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Signup({ isOpen, onClose }: SignupProps) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, phone, month, day, year } = formData;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    // Phone validation (exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be exactly 10 digits");
      return false;
    }

    // Date validation
    if (!month || !day || !year) {
      toast.error("Please enter complete date of birth");
      return false;
    }

    const date = new Date(`${month} ${day}, ${year}`);
    if (isNaN(date.getTime())) {
      toast.error("Invalid date of birth");
      return false;
    }

    const today = new Date();
    if (date > today) {
      toast.error("Date of birth cannot be in future");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const loadingToast = toast.loading("Creating account...");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      toast.dismiss(loadingToast);

      if (res.ok) {
        toast.success("Account created successfully");
        onClose();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong");
    }
  };

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
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            maxLength={10}
            onChange={handleChange}
            className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
          />

          {/* First / Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Date of birth</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <select
                  name="month"
                  onChange={handleChange}
                  className="w-full appearance-none bg-[#2c2c2c] border border-[#444] px-4 py-3 rounded-md text-white focus:outline-none focus:border-[#bc13fe]"
                >
                  <option value="">Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>

              <input
                type="text"
                name="day"
                placeholder="Day"
                onChange={handleChange}
                className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
              />

              <input
                type="text"
                name="year"
                placeholder="Year"
                onChange={handleChange}
                className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
              />
            </div>
          </div>

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
