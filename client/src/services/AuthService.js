import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/authenticate";
export const authenticateUser = (formData) =>
  axios.post(REST_API_BASE_URL, formData);
