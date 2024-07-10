import axios from "axios";

const URL = `${import.meta.env.VITE_REST_API_BASE_URL}/authenticate`;
export const authenticateUser = (formData) => axios.post(URL, formData);
