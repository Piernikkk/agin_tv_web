'use client'
import TabBar from "@/lib/TabBar";
import { ReactNode } from "react";

export default function TabLayout({ children }: { children: ReactNode }) {

    return (
        <TabBar>
            {children}
        </TabBar>
    )

}