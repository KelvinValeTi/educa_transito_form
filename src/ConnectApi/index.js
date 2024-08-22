import axios from "axios";

const api = axios.create({
    baseURL:'http://api-det-form-production.up.railway.app'
});

export default api;