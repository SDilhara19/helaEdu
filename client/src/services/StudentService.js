import axios from "axios";

const GET_STUDENT_DETAILS_URL = `${
  import.meta.env.VITE_REST_API_BASE_URL
}/students/page`;
const CREATE_STUDENT = `${
  import.meta.env.VITE_REST_API_BASE_URL
}/students/create`;

export const listStudentDetails = (pageNo) =>
  axios.get(`${GET_STUDENT_DETAILS_URL}/${pageNo}`);

export const createStudent = (userData) =>
  axios.post(`${CREATE_STUDENT}`, userData);
