import { IconHome } from "@tabler/icons-react";
import TabBarHeader from "./Header";
import { tabBarContainer, windowContainer } from "./styles";
import TabOption from "./TabOption";

export type TabBarProps = {
    children: React.ReactNode;
}

export default function TabBar({ children }: TabBarProps) {
    return (
        <div className={windowContainer}>
            <div className={tabBarContainer}>
                <TabBarHeader />
                <TabOption href="/home" label="Home" icon={IconHome} />
            </div>
            {children}
        </div>
    )
}