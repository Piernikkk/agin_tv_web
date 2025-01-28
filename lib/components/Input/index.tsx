import { token } from "@/styled-system/tokens";
import { Icon } from "@tabler/icons-react";
import { HTMLAttributes } from "react";
import { inputLabel, inputStyle, inputWrapper } from "./styles";

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    icon?: Icon;
    large?: boolean;
    ref?: React.RefObject<HTMLInputElement>;
    radius?: boolean;
}

export default function Input({ label, icon: Icon, radius, large, onChange, ref, ...props }: InputProps) {
    return (
        <div>
            {label && <div className={inputLabel({ large })}>{label}</div>}
            <div className={inputWrapper({ radius, Icon: !!Icon, large })}>
                {Icon && <Icon size={large ? 24 : 16} color={token('colors.icon.0')} />}
                <input onChange={onChange} ref={ref} {...props} className={inputStyle({ Icon: !!Icon, large })} />
            </div>
        </div>
    )
}