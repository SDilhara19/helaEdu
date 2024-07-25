import axios from "axios";
const CHAT_BOT_API = `${import.meta.env.VITE_SERVICE_API}/chat`;

export const sendToChatBot = (payload) => axios.post(CHAT_BOT_API, payload);
