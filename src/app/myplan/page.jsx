"use client";
import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodaysContext";
import { SavedItemContext } from "../Context/SavedContext";
import Myplancard from "@/Component/Myplancard";

const page = () => {
  const { todaysitem } = useContext(TodoContext);
  const { saveditem } = useContext(SavedItemContext);
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="pb-10">
        <h2 className="text-5xl text-white font-bold pb-3">MY PLAN</h2>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <div>
        <div className="min-h-screenp-4 ">
          <div className="grid grid-cols-3 rounded-2xl border border-white/[0.06] bg-[#12151c] px-5 py-6 sm:px-9">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs text-slate-400">Exercises</span>
              <span className=" text-4xl font-bold leading-none tracking-wide text-[#d4ff00]">
                {activeTab === "today" ? todaysitem.length : saveditem.length}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-white/[0.06] pl-5 sm:pl-8">
              <span className="text-xs text-slate-400">Minutes</span>
              <span className=" text-4xl font-bold leading-none tracking-wide text-white">
                {activeTab === "today"
                  ? todaysitem.reduce((total, item) => total + item.duration, 0)
                  : saveditem.reduce((total, item) => total + item.duration, 0)}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 border-l border-white/[0.06] pl-5 sm:pl-8">
              <span className="text-xs text-slate-400">Calories</span>
              <span className=" text-4xl font-bold leading-none tracking-wide text-white">
                {activeTab === "today"
                  ? todaysitem.reduce(
                      (total, item) => total + item.caloriesBurned,
                      0,
                    )
                  : saveditem.reduce(
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
          className="tab border-0 checked:bg-[#CCFF00] checked:text-black"
          aria-label="Today’s Plan"
          defaultChecked
          onChange={() => setActiveTab("today")}
        />
        <div className="tab-content py-6">
          {todaysitem.map((item) => {
            return <Myplancard props={item} tab="today" key={item.id} />;
          })}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab border-0 checked:bg-[#CCFF00] checked:text-black"
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content  py-6">
          {saveditem.map((item) => {
            return <Myplancard props={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
