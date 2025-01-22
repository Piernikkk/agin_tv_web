import { Icon } from "@tabler/icons-react";

export type ButtonProps = {
    icon: Icon
    size: number,
    color?: string,
}

export default function Button({ icon: Icon, size = 30, color = '#fff' }: ButtonProps) {
    return (
        <div>
            <Icon size={size} color={color} />
        </div>
    );
}