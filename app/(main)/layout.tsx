'use client'
import { ReactNode, useEffect } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log("token", token);

    }, []);

    return (
        <>
            {children}
        </>
    )

}