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
    subCategories.find(([sub]) => sub === selectedSubCategory)?.[1] || [];

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

      {/* Modal */}
      <div className="relative z-100 w-full max-w-md rounded-2xl bg-[#111111] border border-[#2a2a2a] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* <p className="text-gray-600">{description}</p> */}
          {/* filteredGames.map((game: any) => (
            <div key={game.label} className="p-2 border-b border-[#2a2a2a]">
              <h3 className="font-medium">{game.label}</h3>
                <img src={game.image} alt={game.label} className="w-full h-40 object-cover rounded-lg mt-2"/>
            </div>
          )) */}
          <ul>
            {filteredGames.map((game, index) => (
              <li key={index}>
                <img src={game.image} alt={game.image} />
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-4">
          <button onClick={onClose} className="rounded-lg border px-4 py-2">
            {cancelText}
          </button>

          {onConfirm && (
            <button
              onClick={onConfirm}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
