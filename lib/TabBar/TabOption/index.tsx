import Text from "@/lib/components/Text";
import { Icon } from "@tabler/icons-react";
import Link from "next/link";

export interface TabOptionProps {
    href: string;
    icon?: Icon,
    label: string;
}

export default function TabOption({ href, icon: Icon, label }: TabOptionProps) {
    return (
        <Link href={href} >
            {Icon && <Icon color="#fff" />}
            <Text>{label}</Text>
        </Link>
    )
}