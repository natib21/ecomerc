"use client";
import { useEffect, useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store"; // Import your persistor

const PersistGateWrapper = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set state to true once component is mounted on client side
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on server side
  }

  return (
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      {children}
    </PersistGate>
  );
};

export default PersistGateWrapper;
