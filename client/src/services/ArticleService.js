import axios from "axios";
const REST_API_BASE_URL ='http://localhost:8080/articles';
const TEACHER_ARTICLE_URL='http://localhost:8080/teachers/me/articles'
const APPROVE_ARTICLE_URL='http://localhost:8080/articles/approved'


export const listArticles=()=>axios.get(REST_API_BASE_URL);
export const listArticlesByTeacher=()=>axios.get(TEACHER_ARTICLE_URL);
export const approvedArticles=()=>axios.get(APPROVE_ARTICLE_URL);
export const getArticleById = (articleId) => axios.get(`${REST_API_BASE_URL}/${articleId}`)