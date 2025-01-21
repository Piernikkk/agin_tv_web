import { Icon } from "@tabler/icons-react";
import Link from "next/link";
import { tabOptionContainer, tabOptionLabel } from "./styles";
import { token } from "@/styled-system/tokens";

export interface TabOptionProps {
    href: string;
    icon?: Icon,
    label: string;
    expanded?: boolean;
    active?: boolean;
}

export default function TabOption({ href, icon: Icon, label, expanded, active }: TabOptionProps) {
    return (
        <Link href={href} className={tabOptionContainer({ active })} >
            {Icon &&
                <div>
                    <Icon color={active ? token('colors.violet.7') : '#fff'} size={24} />
                </div>
            }
            <div className={tabOptionLabel({ expanded, active })}>{label}</div>
        </Link>
    )
}