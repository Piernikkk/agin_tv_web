import TabBarHeader from "@/lib/TabBar/Header";
import { loginFormContainer, loginPageContainer } from "./styles";

export default function LoginPage() {
    return (
        <div className={loginPageContainer}>
            <TabBarHeader expanded={true} size={60} />
            <div className={loginFormContainer}>
            </div>
        </div>
    )
}