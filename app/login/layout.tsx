'use client'
import { apiUrl } from "@/lib/config";
import axios from "axios";
import { createContext, ReactNode, useLayoutEffect } from "react";

export const TokenContext = createContext<string | null>(null);

export default function MainLayout({ children }: { children: ReactNode }) {
    useLayoutEffect(() => {
        (async () => {
            const storage = localStorage.getItem('token');

            if (storage == null && storage == undefined && storage == '') {
                return;
            }
            await axios.get(`${apiUrl}/user/`, {
                headers: {
                    Authorization: `Token ${storage}`
                }
            }).then(() => {
                window.location.href = '/app';
            }, (err) => {
                if (err?.response?.status === 401) {
                    localStorage.removeItem('token');
                }
            });
        })();
    }, []);

    return (
        <>
            {children}
        </>
    )

}