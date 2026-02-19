"use client";

import { useEffect } from "react";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full h-full overflow-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-xl z-50"
        >
          ✕
        </button>

        <div className="min-h-screen flex">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-black p-8">
            <div className="w-full max-w-md text-white space-y-4">
              <h1 className="text-3xl font-bold">Sign Up</h1>

              <button className="w-full bg-white text-black py-3 rounded">
                Sign up with Facebook
              </button>

              <div className="text-center text-gray-400">OR</div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded bg-gray-800"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded bg-gray-800"
                />

                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 rounded bg-gray-800"
                />

                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full p-3 rounded bg-gray-800"
                />

                <button className="w-full bg-blue-600 py-3 rounded">
                  Create Account
                </button>
              </form>
            </div>
          </div>

          {/* Right Background */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <img
              src="/auth-bg.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
