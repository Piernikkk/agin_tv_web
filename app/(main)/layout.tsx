'use client'
import { apiUrl } from "@/lib/config";
import axios from "axios";
import { createContext, ReactNode, useLayoutEffect, useState } from "react";

export const TokenContext = createContext<string | null>(null);

export default function MainLayout({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(null);

    useLayoutEffect(() => {
        (async () => {
            // localStorage.setItem('token', 'niga.cock');
            const storage = localStorage.getItem('token');
            console.log(storage);

            if (storage == null) {
                window.location.href = '/login';
                return;
            }
            setToken(storage);
            await axios.get(`${apiUrl}/user/`, {
                headers: {
                    Authorization: `Token ${storage}`
                }
            }).then(() => { }, err => {
                console.error(err);
                if (err.status === 401) {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }
            });
        })();
    }, []);

    return (
        <>
            <TokenContext.Provider value={token}>
                {children}
            </TokenContext.Provider>
        </>
    )

}