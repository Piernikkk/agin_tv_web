import axios from "axios";

export default function useApi() {
    const api = axios.create({
        baseURL: `http://localhost:42070`,
    });
    return api;
}
