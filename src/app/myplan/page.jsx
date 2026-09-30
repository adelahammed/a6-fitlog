"use client";
import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodaysContext";
import { SavedItemContext } from "../Context/SavedContext";
import Myplancard from "@/Component/Myplancard";
import CardPlaceholder from "@/Component/CardPlaceholder";

const page = () => {
  const { todaysitem } = useContext(TodoContext);
  const { saveditem } = useContext(SavedItemContext);
  const [activeTab, setActiveTab] = useState("today");
  const [sortBy, setSortBy] = useState("duration");

  const sortItems = (items) => {
    const sortedItems = [...items];

    if (sortBy === "duration") {
      sortedItems.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "rating") {
      sortedItems.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "calories") {
      sortedItems.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    return sortedItems;
  };
  const sortedTodaysItem = sortItems(todaysitem);
  const sortedSavedItem = sortItems(saveditem);
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
      <div className="pt-6 flex gap-2 items-center justify-end">
        <div>
          <p className="text-gray-500">Sort By</p>
        </div>
        <select
          defaultValue={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select max-w-40"
        >
          <option value="duration">Duration</option>
          <option value="rating">Rating</option>
          <option value="calories">Calories</option>
        </select>
      </div>

      <div className="tabs tabs-lift py-8 mt-[-65px]">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab border-0 checked:bg-[#CCFF00] checked:text-black"
          aria-label="Today’s Plan"
          defaultChecked
          onChange={() => setActiveTab("today")}
        />
        <div className="tab-content py-6">
          {todaysitem.length > 0 ? (
            sortedTodaysItem.map((item) => {
              return <Myplancard props={item} tab="today" key={item.id} />;
            })
          ) : (
            <CardPlaceholder />
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab border-0 checked:bg-[#CCFF00] checked:text-black"
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content  py-6">
          {saveditem.length > 0 ? (
            sortedSavedItem.map((item) => {
              return <Myplancard props={item} tab="saved" key={item.id} />;
            })
          ) : (
            <CardPlaceholder />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
