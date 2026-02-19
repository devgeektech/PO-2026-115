"use client";

import { useEffect, useState } from "react";

type TextTypeProps = {
  text?: string[];
  texts?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorBlinkDuration?: number;
  variableSpeedEnabled?: boolean;
  variableSpeedMin?: number;
  variableSpeedMax?: number;
};

export default function TextType({
  text,
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.7,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
}: TextTypeProps) {
  const words = texts || text || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const getTypingSpeed = () => {
    if (!variableSpeedEnabled) return typingSpeed;
    return Math.floor(
      Math.random() * (variableSpeedMax - variableSpeedMin) + variableSpeedMin
    );
  };

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, getTypingSpeed());
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    currentIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="inline-flex items-center typeText">
      {displayedText}
      {showCursor && (
        <span
          style={{
            animation: `blink ${cursorBlinkDuration}s infinite`,
            marginLeft: "2px",
          }}
        >
          {cursorCharacter}
        </span>
      )}

      <style jsx>{`
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}
