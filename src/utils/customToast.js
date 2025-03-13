// customToast.js
import { toast } from "react-toastify";

const customToast = {
  success(msg, options = {}) {
    return toast.success(msg, {
      ...options,
      className: "toast-success-container toast-success-container-after",
    });
  },
  error(msg, options = {}) {
    return toast.error(msg, {
      ...options,
      className: "toast-error-container toast-error-container-after",
    });
  },
  info(msg, options = {}) {
    return toast.info(msg, {
      ...options,
      className: "toast-info-container toast-info-container-after",
    });
  },
};

export default customToast;
