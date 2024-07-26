import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
const authHeader = useAuthHeader();
const headers = {
  Authorization: authHeader,
};
const GET_USER_DETAILS_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/tm`;
const REST_API_BASE_URL = `${
  import.meta.env.VITE_REST_API_BASE_URL
}/teachers/me`;
export const listTeacherDetails = () =>
  axios.get(REST_API_BASE_URL, { headers });
export const getUserDetails = (userId) =>
  axios.get(`${GET_USER_DETAILS_URL}/${userId}`);
