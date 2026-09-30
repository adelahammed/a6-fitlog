import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[95vh] flex justify-center items-center">
      <div className="card w-full bg-base-100 card-xl shadow-sm">
        <div className="card-body text-center">
          <h1 className="text-7xl font-bold text-[#CCFF00]">404</h1>
          <h2 className="card-title text-3xl font-bold mx-auto">
            PAGE NOT FOUND
          </h2>
          <p className="pb-2 text-md text-gray-500"></p>
          <div className="justify-center card-actions">
            <Link href="/" className="btn rounded-full bg-[#CCFF00] text-black">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
