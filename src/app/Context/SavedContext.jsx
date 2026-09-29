"use client";
import React, { createContext, useState } from "react";

export const SavedItemContext = createContext({});

const SavedContext = ({ children }) => {
  const [saveditem, setsaveditem] = useState([]);
  const sharedData = {
    saveditem,
    setsaveditem,
  };
  return (
    <SavedItemContext.Provider value={sharedData}>
      {children}
    </SavedItemContext.Provider>
  );
};

export default SavedContext;
