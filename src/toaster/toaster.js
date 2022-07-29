import { toast } from "react-hot-toast";

export default alert = (type, msg) => {
  debugger;
  switch (type) {
    case "info":
      return toast.info(msg);
    case "success":
      return toast.success(msg);
    case "warning":
      return toast.warning(msg);
    case "error":
      return toast.error(msg);
    default:
      return toast.info(msg);
  }
};
