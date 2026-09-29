import Image from "next/image";
import Link from "next/link";
import React from "react";

const getWorkout = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workoutRes = await res.json();
  return workoutRes;
};
const WorkoutCards = async () => {
  const Wdata = await getWorkout();

  return (
    <div className="grid grid-cols-3 gap-8">
      {Wdata.map((workoutinfo, ind) => {
        return (
          <Link
            key={ind}
            href={`/exercise/${workoutinfo.id}`}
            className="group block w-full overflow-hidden rounded-xl border border-base-300 bg-[#15171d] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="h-[145px] w-full overflow-hidden">
              <Image
                src={workoutinfo.image}
                alt={workoutinfo.name}
                width={300}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <div className="mb-3 flex gap-2">
                {workoutinfo.muscleGroups.map((mgroup, key) => {
                  return (
                    <div
                      key={key}
                      className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
                    >
                      {mgroup}
                    </div>
                  );
                })}
              </div>

              <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-white">
                {workoutinfo.name}
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                {workoutinfo.equipment}
              </p>

              <div className="divider my-2"></div>

              <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <span>◷</span>
                  {workoutinfo.duration}
                </span>

                <span className="flex items-center gap-1">
                  <span>♥</span>
                  {workoutinfo.caloriesBurned}
                </span>

                <span className="flex items-center gap-1">
                  <span>☆</span>
                  {workoutinfo.rating}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default WorkoutCards;
