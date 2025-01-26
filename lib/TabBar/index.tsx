'use client'
import { IconHistory, IconHome, IconLayoutGrid } from "@tabler/icons-react";
import TabBarHeader from "./Header";
import { tabBarContainer, windowContainer } from "./styles";
import TabOption from "./TabOption";
import { css } from "@/styled-system/css";
import { createContext, RefObject, useRef, useState } from "react";
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

export const ContentRefContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

export default function TabBar({ children }: TabBarProps) {
    const [opened, setOpened] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();

    return (
        <div className={windowContainer}>
            <div className={tabBarContainer({ opened })} onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
                <TabBarHeader expanded={opened} />
                <div className={css({ gap: '10px', display: 'flex', flexDirection: 'column' })}>
                    {options.map((option, index) => (
                        <TabOption key={index} {...option} active={pathname == option.href || pathname.split('/')[3]?.startsWith(option?.href.split('/')[1]) || pathname.split('/')[3] == option?.href.split('/')[1]} expanded={opened} />
                    ))}
                </div>
            </div>
            <div ref={contentRef} className={css({ flex: 1, overflowY: 'auto', zIndex: 0, scrollbarColor: 'auto' })}>
                <ContentRefContext.Provider value={contentRef}>
                    {children}
                </ContentRefContext.Provider>
            </div>
        </div>
    )
}