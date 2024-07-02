import axios from "axios";
const REST_API_BASE_URL ='http://localhost:8080/articles';

const TEACHER_ARTICLE_URL='http://localhost:8080/teachers/me/articles'

export const listArticles=()=>axios.get(REST_API_BASE_URL);
export const listArticlesByTeacher=()=>axios.get(TEACHER_ARTICLE_URL);