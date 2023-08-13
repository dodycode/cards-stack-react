import CardGroups from "./CardGroups";

import HeartCircle from "@/components/icon/HeartCircle";
import HeartCross from "@/components/icon/CrossCircle";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CardSwiper({ data }: { data: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1 === data.length ? 0 : prev + 1);
    setDirection("right");
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1 < 0 ? data.length - 1 : prev - 1);
    setDirection("left");
  }

  return (
    <>
      {/* card groups */}
      <div className="relative aspect-[5/6] w-[50vmin] mx-auto">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data.map((cardData: any, index: number) => {
          return (
            <CardGroups
              key={index}
              cardData={cardData}
              isActive={index === currentIndex}
              direction={direction} />
          );
        })}
      </div>

      {/* controls */}
      <div className="relative w-[50vmin] mt-14">
        <div className="absolute mx-auto flex gap-x-4 justify-between items-center w-[25vmin] transform -translate-x-[50%] -translate-y-10 left-[50%] top-0">
          <HeartCross fillColor="#FFFFFF" className="w-[25vmin]" onClick={handlePrev} />
          <HeartCircle fillColor="#E11D48" className="w-[25vmin]" onClick={handleNext} />
        </div>
      </div>
    </>
  )
}
