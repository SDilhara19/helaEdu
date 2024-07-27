import axios from "axios";
const CHAT_BOT_API = `${import.meta.env.VITE_SERVICE_API}/chat`;
const CHAT_BOT_HISTORY_API = `${import.meta.env.VITE_SERVICE_API}/chat/history`;

export const sendToChatBot = (payload) => axios.post(CHAT_BOT_API, payload);
export const getChatBotHistory = (payload) =>
  axios.post(CHAT_BOT_HISTORY_API, payload);
