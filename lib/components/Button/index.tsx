'use client'
import { Icon } from "@tabler/icons-react";
import React, { HTMLAttributes } from "react";
import { buttonContainer } from "./styles";
import Text from "../Text";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    icon?: Icon
    size?: number,
    color?: string,
    contrast?: boolean,
    label?: string,
}

export default function Button({ icon: Icon, size = 25, color = '#fff', contrast, label, ...props }: ButtonProps) {
    return (
        <div {...props} className={buttonContainer({ contrast, text: !!label })} >
            {Icon && <Icon size={size} color={color} />}
            {label && <Text size="md" color={contrast ? 4 : undefined}>{label}</Text>}
        </div>
    );
}