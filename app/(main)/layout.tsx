'use client'
import { apiUrl } from "@/lib/config";
import { TUser } from "@/lib/types/TUser";
import axios from "axios";
import { createContext, ReactNode, useLayoutEffect, useState } from "react";

export const TokenContext = createContext<string | null>(null);
export const UserContext = createContext<TUser | null>(null);

export default function MainLayout({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<TUser | null>(null);

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
            await axios.get<TUser>(`${apiUrl}/user/`, {
                headers: {
                    Authorization: `Token ${storage}`
                }
            }).then((user) => {
                console.log(user?.data);
                setUser(user?.data);
            }, err => {
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
                <UserContext.Provider value={user}>
                    {children}
                </UserContext.Provider>
            </TokenContext.Provider>
        </>
    )

}