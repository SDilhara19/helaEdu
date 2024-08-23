import axios from "axios";
const REST_API_BASE_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/assignments`;
const LIST_ARTICLES_BY_TEACHERID = `${import.meta.env.VITE_REST_API_BASE_URL}/assignments/tm`;
const CREATE_ASSIGNMENT =`${import.meta.env.VITE_REST_API_BASE_URL}/assignments/create`;


export const listAssignment=(userId)=>axios.get(`${LIST_ARTICLES_BY_TEACHERID}/${userId}`);
export const createAssignment=(assignment,headers) =>axios.post(CREATE_ASSIGNMENT,assignment,{headers});
export const addQuizzes =(assignment,assignmentId)=>axios.post(`${REST_API_BASE_URL}/${assignmentId}/quizzes`,assignment)
