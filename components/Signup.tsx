"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";
import facebook from "@/public/icons/Facebook.gif";
import Image from "next/image";
import Lottie from "lottie-react";
import telegramIcon from "@/public/animations/telegram.json";
import whatsappIcon from "@/public/animations/whatsapp.json";
import messengerIcon from "@/public/animations/messenger.json";
import facebookIcon from "@/public/animations/facebook.json";
type SignupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Signup({ isOpen, onClose }: any) {
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
    <div className="signupBG fixed inset-0 z-[130] flex items-center md:justify-start justify-center p-4">
      {/* Overlay */}
      {/* <div className="absolute inset-0" onClick={onClose} /> */}
      <div
        className="absolute inset-0 bg-gradient-to-r 
      from-black/100 via-black/5 to-black/0
      "
        onClick={onClose}
      />
      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-md bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 shadow-2xl animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-xl font-semibold">Create Account</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#bc13fe]"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            maxLength={10}
            onChange={handleChange}
            className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#bc13fe]"
          />

          {/* First / Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#bc13fe]"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#bc13fe]"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={3}
            onChange={handleChange}
            className="w-full bg-[#2c2c2c] resize-none rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#bc13fe]"
          />

          <div className="">
            <ul className="flex justify-center items-center">
              <li>
                <Link
                  target="_blank"
                  href={"http://t.me/onlineslotsofficial"}
                  className="w-[75px] h-[75px] overflow-hidden flex items-center justify-center"
                >
                  <Lottie
                    animationData={telegramIcon}
                    loop={true}
                    autoplay={true}
                    className="scale-130"
                  />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://wa.me/qr/OG5BNF6LOMCNP1"}
                  className="w-[75px] h-[75px] overflow-hidden flex items-center justify-center"
                >
                  <Lottie
                    animationData={whatsappIcon}
                    loop={true}
                    autoplay={true}
                    className="scale-130"
                  />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://www.messenger.com/"}
                  className="w-[75px] h-[75px] overflow-hidden flex items-center justify-center"
                >
                  <Lottie
                    animationData={messengerIcon}
                    loop={true}
                    autoplay={true}
                    className="scale-130"
                  />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/"}
                  className="w-[75px] h-[75px] overflow-hidden flex items-center justify-center"
                >
                  <Lottie
                    animationData={facebookIcon}
                    loop={true}
                    autoplay={true}
                    className="scale-130"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Continue */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-[#64008b] border-2 border-[#bc13fe] text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
