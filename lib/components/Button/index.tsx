import { Icon } from "@tabler/icons-react";
import React, { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    icon: Icon
    size?: number,
    color?: string,
}

export default function Button({ icon: Icon, size = 30, color = '#fff', onClick, className }: ButtonProps) {
    return (
        <div onClick={onClick} className={className}>
            <Icon size={size} color={color} />
        </div>
    );
}