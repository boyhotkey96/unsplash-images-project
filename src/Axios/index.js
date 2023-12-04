import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.unsplash.com",
});

export default Axios;
