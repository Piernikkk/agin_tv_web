import { Icon } from "@tabler/icons-react";
import Text from "../Text";
import { optionIconStyle, optionsContainer, optionStyle, pageHeaderContainer, pageHeaderTitle } from "./styles";
import { useMemo } from "react";
import Button from "../Button";
import { css } from "@/styled-system/css";

export type HeaderOptions = {
    icon: Icon,
    label: string,
    onClick?: () => void,
}

export type PageHeaderProps = {
    title: string,
    icon?: Icon,
    options?: HeaderOptions[],
    activeOption?: string,
    button?: {
        label: string,
        icon: Icon,
        onClick: () => void,
    }
}

export default function PageHeader({ title, icon: Icon, options, activeOption, button }: PageHeaderProps) {
    const activeOptions = useMemo(() => {
        return options?.map(option => activeOption === option.label);
    }, [activeOption, options]);

    return (
        <div className={pageHeaderContainer({ options: !!options })}>
            <div className={pageHeaderTitle}>
                {Icon && <Icon size={35} color="#fff" />}
                <Text weight={600} size="xl">{title}</Text>
            </div>
            {options && <div className={optionsContainer}>
                {options.map((option, index) => {
                    const active = activeOptions?.[index];
                    return (<div key={index} className={optionStyle} onClick={option.onClick}>
                        <option.icon className={optionIconStyle({ active })} />
                        <Text color={active ? 1 : 3} weight={active ? 600 : 500}>{option.label}</Text>
                    </div>)
                })}
            </div>}
            <div className={css({ minWidth: '150px' })}>
                {button && <Button label={button.label} icon={button.icon} />}
            </div>

        </div>
    )
}