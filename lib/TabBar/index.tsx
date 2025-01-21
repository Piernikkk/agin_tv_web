'use client'
import { IconHistory, IconHome, IconLayoutGrid } from "@tabler/icons-react";
import TabBarHeader from "./Header";
import { tabBarContainer, windowContainer } from "./styles";
import TabOption from "./TabOption";
import { css } from "@/styled-system/css";
import { useState } from "react";
import { usePathname } from "next/navigation";

export type TabBarProps = {
    children: React.ReactNode;
}

const options = [
    {
        href: '/',
        label: 'Home',
        icon: IconHome,
    },
    {
        href: '/library',
        label: 'Library',
        icon: IconLayoutGrid,
    },
    {
        href: '/history',
        label: 'History',
        icon: IconHistory,
    }
]

export default function TabBar({ children }: TabBarProps) {
    const [opened, setOpened] = useState(false);

    const pathname = usePathname();

    return (
        <div className={windowContainer}>
            <div className={tabBarContainer({ opened })} onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
                <TabBarHeader expanded={opened} />
                <div className={css({ gap: '10px', display: 'flex', flexDirection: 'column' })}>
                    {options.map((option, index) => (
                        <TabOption key={index} {...option} active={pathname == option.href || pathname.split('/')[3]?.startsWith(option?.href.split('/')[1]) || pathname.split('/')[3] == option?.href.split('/')[1]} expanded={opened} />
                    ))}
                    {/* <TabOption href="/" label="Home" icon={IconHome} expanded={opened} />
                    <TabOption href="/library" label="Library" icon={IconLayoutGrid} expanded={opened} />
                    <TabOption href="/" label="History" icon={IconHistory} expanded={opened} /> */}
                </div>
            </div>
            {/* <div className={css({ width: '70px', height: '100vh' })} /> */}
            <div className={css({ zIndex: 0 })}>
                {children}
            </div>
        </div>
    )
}