import Link from "next/link";
import React from "react";

const CardPlaceholder = () => {
  return (
    <div className="card w-full bg-base-100 card-xl shadow-sm">
      <div className="card-body text-center ">
        <h2 className="card-title text-3xl font-bold mx-auto">
          NOTHING HERE YET
        </h2>
        <p className="pb-2 text-md">
          Browse the library and add a lift to get today moving.
        </p>
        <div className="justify-center card-actions">
          <Link href="/" className="btn rounded-full bg-[#CCFF00] text-black">
            Go to workouts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPlaceholder;
