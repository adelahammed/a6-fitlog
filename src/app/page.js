import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import WorkoutCards from "@/Component/WorkoutCards";

const page = () => {
  return (
    <div>
      <section className="hero bg-base-200 py-24">
        <div className="hero-content grid grid-cols-2 gap-5 container mx-auto p-20 bg-[#15171D] rounded-lg">
          <div>
            <p className="text-[#ccff00] pb-3">WORKOUT LIBRARY</p>
            <h1 className="text-5xl font-bold">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="py-6">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>
            <button className="btn font-bold bg-[#ccff00] text-[#1A2312]">
              BROWSE WORKOUTS
            </button>
          </div>
          <div className="flex justify-end">
            <Image alt="Hero-Banner" className="" src={banner} />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 px-5">
        <div className="pb-10">
          <h2 className="text-5xl text-white font-bold pb-3">THE LIBRARY</h2>
          <p>Twelve lifts covering every major muscle group.</p>
        </div>
        <WorkoutCards />
      </section>
    </div>
  );
};

export default page;
