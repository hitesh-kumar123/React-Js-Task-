import { useDispatch } from "react-redux";

import {
  addNotification,
} from "../redux/notificationSlice";

const useNotifications = () => {
  const dispatch = useDispatch();

  const showNotification = (
    message,
    type
  ) => {
    dispatch(
      addNotification({
        id: Date.now(),
        message,
        type,
      })
    );
  };

  const showSuccess = (message) => {
    showNotification(
      message,
      "success"
    );
  };

  const showError = (message) => {
    showNotification(
      message,
      "error"
    );
  };

  const showInfo = (message) => {
    showNotification(
      message,
      "info"
    );
  };

  return {
    showSuccess,
    showError,
    showInfo,
  };
};

export default useNotifications;