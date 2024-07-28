import axios from "axios";

const GET_STUDENT_DETAILS_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/students/page`;

export const listStudentDetails = (pageNo)  =>axios.get(`${GET_STUDENT_DETAILS_URL}/${pageNo}`);