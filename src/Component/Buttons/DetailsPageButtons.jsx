"use client";
import { SavedItemContext } from "@/app/Context/SavedContext";
import { TodoContext } from "@/app/Context/TodaysContext";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const DetailsPageButtons = ({ props }) => {
  const { todaysitem, settodaysitem } = useContext(TodoContext);
  const { saveditem, setsaveditem } = useContext(SavedItemContext);

  const handleTodaysPlan = () => {
    const check = todaysitem.find((wisheditem) => wisheditem.id == props.id);
    if (check) {
      toast.error("Already Added!", {
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
      return;
    }
    settodaysitem([...todaysitem, props]);
    toast.success("Added Successfully", {
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

  const handleSavedPlan = () => {
    const check = saveditem.find((saveditem) => saveditem.id == props.id);
    if (check) {
      toast.error("Already Saved!", {
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
      return;
    }
    setsaveditem([...saveditem, props]);
    toast.success("Saved Successfully", {
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
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        onClick={() => handleTodaysPlan()}
        className="btn h-10 min-h-10 rounded-lg border-0 bg-[#c6ff00] px-5 text-xs font-bold text-black hover:bg-[#b8ef00]"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3.33333 2.66669H12.6667C13.4026 2.66669 14 3.26413 14 4.00002V13.3334C14 14.0692 13.4026 14.6667 12.6667 14.6667H3.33333C2.59745 14.6667 2 14.0692 2 13.3334V4.00002C2 3.26413 2.59745 2.66669 3.33333 2.66669V2.66669"
            stroke="#0F1115"
          />
          <path d="M10.6667 1.33331V3.99998" stroke="#0F1115" />
          <path d="M5.33325 1.33331V3.99998" stroke="#0F1115" />
          <path d="M2 6.66669H14" stroke="#0F1115" />
          <path d="M8 9.33331V12" stroke="#0F1115" />
          <path d="M6.66675 10.6667H9.33341" stroke="#0F1115" />
        </svg>
        Add to today's plan
      </button>

      <button
        onClick={() => handleSavedPlan()}
        className="btn h-10 min-h-10 rounded-lg border border-[#343a45] bg-transparent px-5 text-xs font-medium text-gray-300 hover:bg-[#191d25]"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M12.6666 14L7.99992 11.3333L3.33325 14V3.33333C3.33325 2.59745 3.9307 2 4.66659 2H11.3333C12.0691 2 12.6666 2.59745 12.6666 3.33333V14V14"
            stroke="#E5E7EB"
          />
        </svg>
        Save for later
      </button>
    </div>
  );
};

export default DetailsPageButtons;
