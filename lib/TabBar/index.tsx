'use client'
import { IconHistory, IconHome, IconLayoutGrid, IconLogout, IconSearch } from "@tabler/icons-react";
import TabBarHeader from "./Header";
import { tabBarContainer, windowContainer } from "./styles";
import TabOption from "./TabOption";
import { css } from "@/styled-system/css";
import { createContext, RefObject, useCallback, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useApi from "../hooks/useApi";

export type TabBarProps = {
    children: React.ReactNode;
}

const options = [
    {
        href: '/app',
        label: 'Home',
        icon: IconHome,
    },
    {
        href: '/app/search',
        label: 'Search',
        icon: IconSearch,
    },
    {
        href: '/app/library',
        label: 'Library',
        icon: IconLayoutGrid,
    },
    {
        href: '/app/history',
        label: 'History',
        icon: IconHistory,
    }
]

export const ContentRefContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

export default function TabBar({ children }: TabBarProps) {
    const [opened, setOpened] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const api = useApi();
    const router = useRouter();

    const pathname = usePathname();

    const logout = useCallback(async () => {
        await api?.delete('/user/logout').then(() => {
            localStorage.removeItem('token');
            router.push('/login');
        }, () => {
            alert('An error occurred');
        });
    }, [api, router]);

    return (
        <div className={windowContainer}>
            <div className={tabBarContainer({ opened })} onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
                <TabBarHeader expanded={opened} />
                <div className={css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' })}>
                    <div className={css({ gap: '10px', display: 'flex', flexDirection: 'column' })}>
                        {options.map((option, index) => (
                            <TabOption key={index} {...option} active={pathname == option.href || pathname.split('/')[3]?.startsWith(option?.href.split('/')[1]) || pathname.split('/')[3] == option?.href.split('/')[1]} expanded={opened} />
                        ))}
                    </div>

                    <TabOption color="red" onClick={logout} icon={IconLogout} label="Log out" expanded={opened} />
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