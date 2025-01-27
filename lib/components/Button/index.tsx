import { Icon } from "@tabler/icons-react";
import React, { HTMLAttributes } from "react";
import { buttonContainer } from "./styles";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    icon: Icon
    size?: number,
    color?: string,
    contrast?: boolean,
}

export default function Button({ icon: Icon, size = 25, color = '#fff', onClick, contrast }: ButtonProps) {
    return (
        <div onClick={onClick} className={buttonContainer({ contrast })} >
            <Icon size={size} color={color} />
        </div>
    );
}