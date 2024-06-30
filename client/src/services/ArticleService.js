import axios from "axios";
const REST_API_BASE_URL ='http://localhost:8080/articles';

export const listArticles=()=>axios.get(REST_API_BASE_URL);