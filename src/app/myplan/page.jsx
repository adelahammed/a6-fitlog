"use client";
import React, { useContext } from "react";
import { TodoContext } from "../Context/TodaysContext";
import { SavedItemContext } from "../Context/SavedContext";
import Image from "next/image";
import { Bounce, toast } from "react-toastify";
import Myplancard from "@/Component/Myplancard";

const page = () => {
  const { todaysitem } = useContext(TodoContext);
  const { saveditem } = useContext(SavedItemContext);

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="pb-10">
        <h2 className="text-5xl text-white font-bold pb-3">MY PLAN</h2>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <div>
        <div className="min-h-screenp-4 font-['Inter',sans-serif]">
          <div className="grid grid-cols-3 rounded-2xl border border-white/[0.06] bg-[#12151c] px-5 py-6 sm:px-9">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs text-slate-400">Exercises</span>
              <span className="font-['Oswald',sans-serif] text-4xl font-bold leading-none tracking-wide text-[#d4ff00]">
                {todaysitem.length}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-white/[0.06] pl-5 sm:pl-8">
              <span className="text-xs text-slate-400">Minutes</span>
              <span className="font-['Oswald',sans-serif] text-4xl font-bold leading-none tracking-wide text-white">
                {todaysitem.reduce((total, item) => total + item.duration, 0)}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-white/[0.06] pl-5 sm:pl-8">
              <span className="text-xs text-slate-400">Calories</span>
              <span className="font-['Oswald',sans-serif] text-4xl font-bold leading-none tracking-wide text-white">
                {todaysitem.reduce(
                  (total, item) => total + item.caloriesBurned,
                  0,
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs tabs-lift py-8">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab border-0"
          aria-label="Today’s Plan"
          defaultChecked
        />
        <div className="tab-content py-6">
          {todaysitem.map((item) => {
            return <Myplancard props={item} tab="today" key={item.id} />;
          })}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {saveditem.map((item) => {
            return <Myplancard props={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
