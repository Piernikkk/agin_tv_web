'use client'
import TabBarHeader from "@/lib/TabBar/Header";
import { blurDiv, loginFormContainer, loginPageContainer } from "./styles";
import Input from "@/lib/components/Input";
import Text from "@/lib/components/Text";
import Button from "@/lib/components/Button";
import { css } from "@/styled-system/css";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/lib/config";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = useCallback(async () => {
        await axios?.post(`${apiUrl}/user/login`, { email, password }).then((res) => {
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                window.location.href = '/app';
            }
        }, (err) => {
            if (err?.response?.status === 403) {
                alert("Invalid credentials");
            } else {
                alert("A connection error occurred");
            }
        });
    }, [email, password]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'Enter') {
                event.preventDefault();
                login();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [login]);

    return (
        <div className={loginPageContainer}>
            <div className={blurDiv} />
            <TabBarHeader expanded={true} size={60} />
            <div className={loginFormContainer}>
                <Text weight={600} size="xl">Log in</Text>
                <Input onChange={(e) => setEmail(e.currentTarget.value)} label="Email" width={'100%'} />
                <Input onChange={(e) => setPassword(e.currentTarget.value)} type="password" label="Password" width={'100%'} />
                <div className={css({})} />
                <Button weight={600} label="Log in" contrast onClick={async () => login()} />
            </div>
        </div>
    )
}