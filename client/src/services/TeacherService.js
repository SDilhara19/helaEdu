import axios from "axios";

const TEACHER_BASE_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/teachers`;
const GET_USER_DETAILS_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/tm`;
const GET_PENDING_USER_DETAILS_URL = `${
  import.meta.env.VITE_REST_API_BASE_URL
}/tm/pending`;
const ADD_PROFILE_IMAGE = `${
  import.meta.env.VITE_REST_API_BASE_URL
}/tm/uploadProfilePicture`;
const REST_API_BASE_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/tm/me`;

const APPROVE_TEACHERS_URL = `${
  import.meta.env.VITE_REST_API_BASE_URL
}/teachers/by-email/approve`;
const GET_TEACHER_DETAILS_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/teachers/page`;
const EDIT_TEACHER_PROFILE = `${
  import.meta.env.VITE_REST_API_BASE_URL
}/teachers/me`;

export const listTeacherDetails = (headers) =>
  axios.get(REST_API_BASE_URL, { headers });
export const getUserDetails = (userId) =>
  axios.get(`${GET_USER_DETAILS_URL}/${userId}`);
export const addProfileImageToTeacher = (email, formData, headers) =>
  axios.post(ADD_PROFILE_IMAGE, formData, {
    headers: { ...headers, "Content-Type": "multipart/form-data" },
  });
export const approveTeachers = (email) =>
  axios.put(APPROVE_TEACHERS_URL, email);
export const getPendingTeachers = () => axios.get(GET_PENDING_USER_DETAILS_URL);
export const promoteToModerator =(userId)=>axios.put(`${TEACHER_BASE_URL}/${userId}/promote)`);
export const listAllTeachersDetails = (pageNo)  =>axios.get(`${GET_TEACHER_DETAILS_URL}/${pageNo}`);
export const editTeacherProfile = (formData, headers) =>
  axios.put(`${EDIT_TEACHER_PROFILE}`, formData, { headers });
