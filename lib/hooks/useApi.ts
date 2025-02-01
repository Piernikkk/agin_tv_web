import axios from "axios";
import { apiUrl } from "../config";
import { TokenContext } from "@/app/TokenContext";
import { useContext, useMemo } from "react";

export default function useApi() {
    const token = useContext(TokenContext);
    // console.log("apiToken", token);

    const api = useMemo(() => axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: `Token ${token}`
        }
    }), [token]);

    if (token == null || token == undefined) {
        return null;
    }

    return api;
}
