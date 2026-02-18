"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
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
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, phone } = formData;

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

          {/* Message */}
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={3}
            onChange={handleChange}
            className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
          />

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
