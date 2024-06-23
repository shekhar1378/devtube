import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const apiUrl = process.env.REACT_APP_API_KEY;

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": '83ff89b8c7mshf33efdc1063b134p192ed6jsn15b04ed79f9a',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
