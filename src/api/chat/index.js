import { wrapper } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";

export const getChatList = async () => {
  return wrapper("get", URLS.LIST);
};

export const getMsgs = async (chat_id) => {
  return wrapper("get", URLS.MESSAGES_BASE + chat_id + URLS.MESSAGES_PARAMS);
};
