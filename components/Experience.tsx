import React from "react";
import Image from 'next/image';
import { workExperience } from "@/data"; // Make sure this is typed correctly
import { Button } from "./ui/MovingBorders"; // Make sure Button is a properly typed component

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Professional Experiences <span className="text-purple">& Contributions</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000} // Random duration for moving borders
            borderRadius="1.75rem"
            style={{
              background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)", // Gradient background
              borderRadius: "1.68rem", // Adjusting border radius for realistic effect
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.title} // Better alt description
                className="lg:w-32 md:w-20 w-16"
                width={card.thumbnailWidth} // Ensure proper image sizing
                height={card.thumbnailHeight}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
