'use client'
import TabBarHeader from "@/lib/TabBar/Header";
import { blurDiv, loginFormContainer, loginPageContainer } from "./styles";
import Input from "@/lib/components/Input";
import Text from "@/lib/components/Text";
import Button from "@/lib/components/Button";
import { css } from "@/styled-system/css";

export default function LoginPage() {
    return (
        <div className={loginPageContainer}>
            <div className={blurDiv} />
            <TabBarHeader expanded={true} size={60} />
            <div className={loginFormContainer}>
                <Text size="xl">Log in</Text>
                <Input label="Email" width={'100%'} />
                <Input label="Password" width={'100%'} />
                <div className={css({})} />
                <Button label="Log in" contrast onClick={() => { }} />
            </div>
        </div>
    )
}