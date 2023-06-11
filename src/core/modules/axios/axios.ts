import axios from "axios";
import { BACKEND_URL } from "@constants";
import toast from "react-hot-toast";

export const api = axios.create({
  baseURL: BACKEND_URL,
});

export const handleError = (error: any) => {
  toast.error(error?.response.data.message);
};
