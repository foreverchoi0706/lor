import axios from "axios";

const _instance = axios.create({
  baseURL: "https://thawing-chamber-53718.herokuapp.com/",
});

const _instance2 = axios.create({
  baseURL: "http://localhost:3001",
});

export default _instance2;
