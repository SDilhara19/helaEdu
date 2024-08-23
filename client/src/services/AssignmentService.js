import axios from "axios";
const REST_API_BASE_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/assignments`;

export const listAssignment=()=>axios.get(REST_API_BASE_URL);