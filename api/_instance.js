import axios from "axios";

const _instance = axios.create({
  baseURL: "https://thawing-chamber-53718.herokuapp.com/",
});

export default _instance;
