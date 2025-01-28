import { Icon } from "@tabler/icons-react";
import { tabOptionContainer, tabOptionLabel } from "./styles";
import { token } from "@/styled-system/tokens";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

export interface TabOptionProps {
    href?: string;
    icon?: Icon,
    label: string;
    expanded?: boolean;
    active?: boolean;
    onClick?: () => Promise<void>;
    color?: 'red';
}

export default function TabOption({ href, icon: Icon, label, expanded, active, onClick, color }: TabOptionProps) {
    const router = useRouter();

    const onClickHandler = useCallback(async () => {
        if (onClick) {
            await onClick();
        } else if (href) {
            router.push(href);
        }
        return;
    }, [href, onClick]);

    const colorSchema = useMemo(() => {
        if (color === 'red') {
            return { color: token('colors.red.7'), schema: 'red' };
        }
    }, [color]);


    return (
        <div onClick={onClickHandler} className={tabOptionContainer({ active, color: colorSchema?.schema as 'red' | undefined })} >
            {Icon &&
                <div>
                    <Icon color={color ? colorSchema?.color : active ? token('colors.violet.7') : '#fff'} size={24} />
                </div>
            }
            <div className={tabOptionLabel({ expanded, active, color: colorSchema?.schema as 'red' | undefined })}>{label}</div>
        </div>
    )
}