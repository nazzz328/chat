import axios from "axios";

const checkResponse = (response) => {
  return response.data.response;
};
const catchError = (error) => {
  return error.message;
};

export const wrapper = (method, url, data) =>
  axios.request({ method, url, data }).then(checkResponse).catch(catchError);
