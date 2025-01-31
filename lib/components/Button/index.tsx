'use client'
import { Icon } from "@tabler/icons-react";
import React, { HTMLAttributes } from "react";
import { buttonContainer } from "./styles";
import Text from "../Text";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    icon?: Icon
    size?: number,
    large?: boolean,
    color?: string,
    contrast?: boolean,
    label?: string,
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
}

export default function Button({ icon: Icon, size = 25, color = '#fff', contrast, label, weight, large, ...props }: ButtonProps) {
    return (
        <div {...props} className={buttonContainer({ contrast, text: !!label, large })} >
            {Icon && <Icon size={size} color={color} />}
            {label && <Text weight={weight} size="md" color={contrast ? 5 : undefined}>{label}</Text>}
        </div>
    );
}