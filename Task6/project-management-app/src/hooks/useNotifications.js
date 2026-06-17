import {
  toast,
} from "react-toastify";

export const useNotifications =
() => {

  return {

    success: (
      message
    ) =>
      toast.success(
        message
      ),

    error: (
      message
    ) =>
      toast.error(
        message
      ),

    info: (
      message
    ) =>
      toast.info(
        message
      ),
  };
};