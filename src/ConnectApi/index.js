import axios from "axios";

const api = axios.create({
    baseURL:'https://api-det-form-production.up.railway.app'
});

export default api;