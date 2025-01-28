import { token } from "@/styled-system/tokens";
import { Icon } from "@tabler/icons-react";
import { HTMLAttributes, RefObject } from "react";
import { inputLabel } from "./styles";

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    icon?: Icon;
    isTextarea?: boolean;
    large?: boolean;
    ref?: React.RefObject<HTMLInputElement>;
    radius?: boolean;
}

export default function Input({ label, icon: Icon, isTextarea, large, onChange, ref, ...props }: InputProps) {
    return (
        <div>
            {label && <div className={inputLabel({ large })}>{label}</div>}
            <div css={styles.inputWrapper}>
                {Icon && <Icon size={large ? 24 : 16} color={token('colors.icon.0')} />}
                <input onChange={onChange} ref={ref} {...props} css={styles.input} />
            </div>
        </div>
    )
}