import DetailsPageButtons from "@/Component/Buttons/DetailsPageButtons";
import Image from "next/image";
import React from "react";

const getWorkout = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workoutRes = await res.json();
  return workoutRes;
};

const page = async ({ params }) => {
  const { id } = await params;
  const Wdata = await getWorkout();
  const currentWorkout = Wdata.find((exercise) => exercise.id == id);

  return (
    <div className="min-h-screen bg-[#0d0f12]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-6 py-8 lg:flex-row">
        <Image
          src={currentWorkout.image}
          alt="Barbell Bench Press"
          width={395}
          height={495}
          className="h-[495px] w-full rounded-xl object-cover lg:w-[395px]"
        />

        <div className="flex-1">
          <div className="min-h-screen bg-[#0d0f13] text-white px-6 py-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-5">
                <h1 className="text-3xl font-extrabold uppercase tracking-tight">
                  {currentWorkout.name}
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                  {currentWorkout.description}
                </p>

                <div className="mt-3 flex gap-2">
                  {currentWorkout.muscleGroups.map((mgroup, key) => {
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
              </div>

              <div className="overflow-hidden rounded-xl border border-[#252a33] bg-[#151820]">
                <div className="flex items-center justify-between border-b border-[#252a33] px-4 py-3 last:border-b-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Equipment
                  </span>

                  <span className="text-xs font-medium text-gray-200">
                    {currentWorkout.equipment}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252a33] px-4 py-3 last:border-b-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    DIFFICULTY
                  </span>

                  <span className="text-xs font-medium text-gray-200">
                    {currentWorkout.difficulty}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252a33] px-4 py-3 last:border-b-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    SETS
                  </span>

                  <span className="text-xs font-medium text-gray-200">
                    {currentWorkout.sets}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252a33] px-4 py-3 last:border-b-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    REPS
                  </span>

                  <span className="text-xs font-medium text-gray-200">
                    {currentWorkout.reps}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252a33] px-4 py-3 last:border-b-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    DURATION
                  </span>

                  <span className="text-xs font-medium text-gray-200">
                    {currentWorkout.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252a33] px-4 py-3 last:border-b-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    CALORIES
                  </span>

                  <span className="text-xs font-medium text-gray-200">
                    {currentWorkout.caloriesBurned}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#252a33] px-4 py-3 last:border-b-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    RATING
                  </span>

                  <span className="text-xs font-medium text-gray-200">
                    {currentWorkout.rating}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-extrabold uppercase tracking-wide">
                  Instructions
                </h2>

                <ol className="pl-3 list-decimal mt-3 space-y-3 text-xs leading-5 text-gray-400">
                  {currentWorkout.instructions.map((text, key) => {
                    return (
                      <li key={key}>
                        <div className="flex gap-3">
                          <span>{text}</span>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
            <DetailsPageButtons props={currentWorkout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
