"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
type Props = {
  slide: {
    // id?: number;
    type?: string;
    video?: string;
    image?: string;
    title?: string;
    provider?: string;
    isNew?: boolean;
    isExclusive?: boolean;
    imageWidth?: number;
    imageHeight?: number;
    detailImage?: string;
    cat?: string;
    sub?: string;
    key?: string;
  };
  selectedCategory: string;
  fromSearchComponent?: boolean;
};

export default function SlideCard({
  selectedCategory = "",
  slide,
  fromSearchComponent = false,
}: Props) {
  const router = useRouter();
  const goToGames = () => {
    if (slide.type == "sub-cat" && slide.detailImage) {
      // console.log(slide)
      router.push(`/${slide.cat}/${slide.sub}/${slide.key}`);
    }
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-black">
      <div className="h-full w-full relative cursor-pointer">
        {/* Badges */}
        {(slide.isNew || slide.isExclusive) && (
          <div
            className={`${fromSearchComponent ? "top-[5px] left-[5px]  " : " md:top-3 md:left-3 top-1 left-1  "}   z-10 absolute gap-2 flex`}
          >
            {slide.isNew && (
              <span
                className={`${fromSearchComponent ? "text-[10px] sm:px-2 sm:py-0" : "text-[14px] sm:px-4 sm:py-1"} bg-[#2A9CFF] border-2 border-[#006ECD] text-white  sm:text-sm rounded-full`}
              >
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
                // autoPlay
                muted
                preload="none"
                loop
                playsInline
                className={`w-full h-[100px] sm:h-[250px] md:h-[350px] object-cover rounded-[10px] ${selectedCategory == slide.key ? "border-6 border-solid border-[#bc13fe]" : ""} `}
              />
            )}

            {!slide.video && slide.image && (
              <img
                src={slide.image}
                alt={slide.title ?? "slide image"}
                // width={slide.imageWidth ?? 300}
                // height={slide.imageHeight ?? 400}
                className="w-full object-cover rounded-[5px]"
                onClick={() => {
                  goToGames();
                }}
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
