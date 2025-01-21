import { IconHistory, IconHome, IconLayoutGrid } from "@tabler/icons-react";
import TabBarHeader from "./Header";
import { tabBarContainer, windowContainer } from "./styles";
import TabOption from "./TabOption";
import { css } from "@/styled-system/css";

export type TabBarProps = {
    children: React.ReactNode;
}

export default function TabBar({ children }: TabBarProps) {
    return (
        <div className={windowContainer}>
            <div className={tabBarContainer}>
                <TabBarHeader />
                <div className={css({ gap: '10px', display: 'flex', flexDirection: 'column' })}>
                    <TabOption href="/" label="Home" icon={IconHome} />
                    <TabOption href="/library" label="Library" icon={IconLayoutGrid} />
                    <TabOption href="/" label="History" icon={IconHistory} />
                </div>
            </div>
            {children}
        </div>
    )
}