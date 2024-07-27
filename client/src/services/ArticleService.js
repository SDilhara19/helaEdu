import axios from "axios";
const REST_API_BASE_URL = `${import.meta.env.VITE_REST_API_BASE_URL}/articles`;
const TEACHER_ARTICLE_URL=`${import.meta.env.VITE_REST_API_BASE_URL}/tm`;
const APPROVE_ARTICLE_URL=`${import.meta.env.VITE_REST_API_BASE_URL}/articles/approved`
const PENDING_ARTICLE_URL=`${import.meta.env.VITE_REST_API_BASE_URL}/articles/pending`
const CREATE_ARTICLE_URL=`${import.meta.env.VITE_REST_API_BASE_URL}/articles/create`

export const listArticles=()=>axios.get(REST_API_BASE_URL);
export const listArticlesByTeacher =() => axios.get(`${TEACHER_ARTICLE_URL}/${userId}/articles`);
export const approvedArticles=()=>axios.get(APPROVE_ARTICLE_URL);
export const pendingArticles=()=>axios.get(PENDING_ARTICLE_URL);
export const getArticleById = (articleId) => axios.get(`${REST_API_BASE_URL}/${articleId}`);
export const createArticle =(article,headers) => axios.post(CREATE_ARTICLE_URL,article,{headers});
export const approveArticle = (articleId) => axios.put(`${REST_API_BASE_URL}/${articleId}/approve`);
export const rejectArticle = (articleId, rejectedReason) => axios.put(`${REST_API_BASE_URL}/${articleId}/decline`, null, { params: { rejectedReason } });
export const uploadArticleCover = (articleId, formData, headers) => axios.post(`${REST_API_BASE_URL}/${articleId}/uploadArticleCover`, formData, { headers:{...headers,"Content-Type":"multipart/form-data"} });
export const uploadAdditionalFiles = (articleId, formData, headers) => axios.post(`${REST_API_BASE_URL}/${articleId}/uploadAdditionalFiles`, formData, { headers });

export const updateArticle =(articleId,article,) =>axios.put()