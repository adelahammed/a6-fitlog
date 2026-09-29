"use client";
import React, { createContext, useState } from "react";

export const TodoContext = createContext({});

const TodaysContext = ({ children }) => {
  const [todaysitem, settodaysitem] = useState([]);
  const sharedData = {
    todaysitem,
    settodaysitem,
  };
  return (
    <TodoContext.Provider value={sharedData}>{children}</TodoContext.Provider>
  );
};

export default TodaysContext;
