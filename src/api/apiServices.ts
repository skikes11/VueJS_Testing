import axios from "axios";


console.log('a', process.env.API_URL)

const API = axios.create({
// baseURL: process.env.API_URL,
 baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
  withCredentials: false,
});

// Todo [+]: Add response/request Handlers

export default API;
