import axios from "axios";

const REST_API_BASE_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/teachers/me`;

export const listTeacherDetails = (headers) => axios.get(REST_API_BASE_URL, { headers });
