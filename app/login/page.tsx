import TabBarHeader from "@/lib/TabBar/Header";
import { loginFormContainer, loginPageContainer } from "./styles";
import Input from "@/lib/components/Input";

export default function LoginPage() {
    return (
        <div className={loginPageContainer}>
            <TabBarHeader expanded={true} size={60} />
            <div className={loginFormContainer}>
                <Input label="Username" />
            </div>
        </div>
    )
}