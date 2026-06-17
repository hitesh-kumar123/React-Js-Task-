import React from "react";
import { Toaster } from "react-hot-toast";

const NotificationContainer = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
  );
};

export default NotificationContainer;