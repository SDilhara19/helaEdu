import axios from "axios";

const GET_USER_DETAILS_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/tm`;
const ADD_PROFILE_IMAGE =`${import.meta.env.VITE_REST_API_BASE_URL}/tm/uploadProfilePicture`
const REST_API_BASE_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/tm/me`;
export const listTeacherDetails = (headers) =>
  axios.get(REST_API_BASE_URL, { headers });
export const getUserDetails = (userId) =>
  axios.get(`${GET_USER_DETAILS_URL}/${userId}`);
export const addProfileImageToTeacher =(email,formData,headers) =>axios.post(ADD_PROFILE_IMAGE,formData,{headers:{...headers,"Content-Type":"multipart/form-data"} })
