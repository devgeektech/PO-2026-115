"use client";
import Image from "next/image";

type Props = {
  slide: {
    // id?: number;
    video?: string;
    image?: string;
    title?: string;
    provider?: string;
    isNew?: boolean;
    isExclusive?: boolean;
    imageWidth?: number;
    imageHeight?: number;
  };
};

export default function SlideCard({ slide }: Props) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-black">
      <div className="h-full w-full relative">
        {/* Badges */}
        {(slide.isNew || slide.isExclusive) && (
          <div className="absolute md:top-3 md:left-3 top-1 left-1 z-10 flex gap-2">
            {slide.isNew && (
              <span className="bg-[#2A9CFF] border-2 border-[#006ECD] text-white text-[10px] px-2 py-0 sm:text-sm sm:px-4 sm:py-1 rounded-full">
                NEW
              </span>
            )}

            {/* {slide.isExclusive && (
              <span className="bg-[#7A03AE] border-2 border-[#460065] text-white text-sm px-4 py-1 rounded-full">
                EXCLUSIVE
              </span>
            )} */}
          </div>
        )}

        {/* Media (Video OR Image) */}
        {(slide.video || slide.image) && (
          <>
            {slide.video && (
              <video
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[100px] sm:h-[250px] md:h-[350px] object-cover rounded-[5px]"
              />
            )}

            {!slide.video && slide.image && (
              <Image
                src={slide.image}
                alt={slide.title ?? "slide image"}
                width={slide.imageWidth ?? 300}
                height={slide.imageHeight ?? 400}
                className="w-full object-cover rounded-[5px]"
              />
            )}
          </>
        )}

        {/* Content */}
        {(slide.title || slide.provider) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {slide.title && (
              <h3 className="text-white font-bold text-sm">{slide.title}</h3>
            )}
            {slide.provider && (
              <p className="text-gray-300 text-xs uppercase">
                {slide.provider}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
