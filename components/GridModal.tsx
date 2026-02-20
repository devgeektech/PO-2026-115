"use client";

import { useEffect } from "react";

interface GridModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  subCategories: Record<string, any>;
  selectedSubCategory: string;
}

export default function GridModal({
  isOpen,
  onClose,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  subCategories = {},
  selectedSubCategory,
}: GridModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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

  const filteredGames =
    subCategories.find(([sub]:[string, any]) => sub === selectedSubCategory)?.[1] || [];

  console.log(filteredGames, "filterd games");

  type Game = {
    image: string;
    // add other properties if needed
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-100 w-full max-w-[800px] rounded-2xl bg-[#111111] border border-[#2a2a2a] shadow-2xl">
        <div className="flex items-center justify-between pt-4 ps-4 pe-4 pb-0">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <ul className="overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[450px] sm:max-h-[250px] lg:max-h-[450px] xl:max-h-[650px]">
            {filteredGames.map((game:any, index:any) => (
              <li key={index}>
                <img
                  src={game.image}
                  alt={game.image}
                  className="w-full h-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
