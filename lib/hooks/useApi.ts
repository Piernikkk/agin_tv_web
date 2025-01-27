import axios from "axios";

export default function useApi() {
    const api = axios.create({
        baseURL: `http://192.168.10.2:42070`,
    });
    return api;
}
