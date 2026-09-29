"use client";
import { SavedItemContext } from "@/app/Context/SavedContext";
import { TodoContext } from "@/app/Context/TodaysContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const Myplancard = ({ props, tab }) => {
  const { todaysitem, settodaysitem } = useContext(TodoContext);
  const { saveditem, setsaveditem } = useContext(SavedItemContext);
  const removeworkout = (id) => {
    if (tab === "today") {
      const updatetodo = todaysitem.filter((item) => item.id !== id);
      settodaysitem(updatetodo);
      toast.success("1 item removed", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      const updatetodo = saveditem.filter((item) => item.id !== id);
      setsaveditem(updatetodo);
      toast.success("1 item removed", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const workoutdone = (id) => {
    const updatetodo = todaysitem.filter((item) => item.id !== id);
    settodaysitem(updatetodo);
    toast.success("Congratulations", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <div className="card card-side w-full bg-[#14171E] border border-[#272c35] rounded-2xl shadow-sm p-3 mb-4">
      <Image
        src={props.image}
        alt={props.name}
        width={128}
        height={72}
        className="w-60 h-[150px] shrink-0 rounded-xl object-cover"
      />

      <div className="card-body p-0 pl-4 flex-row items-center justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-white text-3xl font-bold uppercase tracking-wide">
            {props.name}
          </h2>

          <p className="text-gray-400 text-lg mt-2">{props.equipment}</p>

          <div className="flex items-center gap-4 mt-2 text-md pt-2 text-gray-300">
            <span className="flex items-center gap-1">
              <span className="text-lime-400">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4_277)">
                    <path
                      d="M1.1665 6.99999C1.1665 10.2195 3.78033 12.8333 6.99984 12.8333C10.2193 12.8333 12.8332 10.2195 12.8332 6.99999C12.8332 3.78049 10.2193 1.16666 6.99984 1.16666C3.78033 1.16666 1.1665 3.78049 1.1665 6.99999V6.99999"
                      stroke="#CCFF00"
                      strokeWidth="1.16667"
                    />
                    <path
                      d="M7 3.5V7L9.33333 8.16667"
                      stroke="#CCFF00"
                      strokeWidth="1.16667"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_277">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              {props.duration}
            </span>

            <span className="flex items-center gap-1">
              <span className="text-lime-400">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.2265 0.387345C6.13675 0.207559 5.97406 0.0750134 5.77984 0.0234458C5.58563 -0.0281218 5.37862 0.00626191 5.2115 0.117845C4.97 0.278845 4.7817 0.508445 4.6361 0.733845C4.2672 1.30785 3.8353 2.16885 3.696 3.17825C3.5574 4.18765 3.7394 5.22435 4.298 6.05035C4.41282 6.20692 4.37897 6.42693 4.2224 6.54175C4.06583 6.65657 3.84582 6.62272 3.731 6.46615C3.01 5.61424 2.8 4.69025 2.8 3.85025C2.79854 3.56073 2.619 3.30199 2.3483 3.1993C2.07761 3.0966 1.77162 3.17115 1.5785 3.38685C0.7308 4.39625 0 5.87675 0 7.35024C0 9.86325 2.037 11.9002 4.55 11.9002C7.063 11.9002 9.1 9.86325 9.1 7.35024C9.1 5.67725 8.1942 4.18625 7.2912 2.85275C6.8054 2.13455 6.3322 1.43525 6.2265 0.387345Z"
                    fill="#CCFF00"
                  />
                </svg>
              </span>
              {props.caloriesBurned}
            </span>

            <span className="flex items-center gap-1">
              <span className="text-lime-400">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.44506 1.70741C6.62006 1.17016 7.38014 1.17016 7.55456 1.70741L8.44064 4.43391C8.51887 4.67382 8.74248 4.83623 8.99481 4.83641H11.8619C12.4271 4.83641 12.6616 5.55974 12.2049 5.89224L9.88556 7.57691C9.68118 7.72549 9.59569 7.98877 9.67381 8.22908L10.5593 10.9556C10.7343 11.4934 10.1189 11.9402 9.66214 11.6077L7.34281 9.92308C7.13831 9.77441 6.86132 9.77441 6.65681 9.92308L4.33748 11.6077C3.88073 11.9402 3.26531 11.4928 3.44031 10.9556L4.32581 8.22908C4.40393 7.98877 4.31845 7.72549 4.11406 7.57691L1.79473 5.89224C1.33739 5.55974 1.57306 4.83641 2.13773 4.83641H5.00423C5.25678 4.83648 5.48069 4.67402 5.55898 4.43391L6.44506 1.70741V1.70741"
                    stroke="#CCFF00"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {props.rating}
            </span>
          </div>
        </div>

        <div className="card-actions items-center gap-3 shrink-0">
          <Link
            href={`/exercise/${props.id}`}
            className="flex items-center h-9 px-4 rounded-full border border-[#353b45] bg-transparent text-gray-200 text-xs hover:bg-[#1d222a] transition"
          >
            View Details
          </Link>

          {tab === "today" ? (
            <button
              onClick={() => workoutdone(props.id)}
              className="h-9 px-5 rounded-full bg-lime-400 hover:bg-lime-300 text-black text-xs font-medium transition"
            >
              ✓ &nbsp; Mark as Done
            </button>
          ) : (
            ""
          )}

          <button
            onClick={() => removeworkout(props.id)}
            className="ml-1 text-gray-500 hover:text-gray-300 text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Myplancard;
