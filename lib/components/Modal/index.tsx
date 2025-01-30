import { ReactNode } from "react";
import { modalBackground, modalContainer, modalHeader, modalTitle } from "./styles";
import { Icon, IconX } from "@tabler/icons-react";
import Text from "../Text";
import { css } from "@/styled-system/css";

export type ModalBaseProps = {
    opened: boolean,
    onClose: () => void,
    children?: ReactNode,
    title: string,
    icon?: Icon
}

export default function ModalBase({ opened, onClose, children, icon: Icon, title }: ModalBaseProps) {

    return (
        <>
            <div className={modalBackground({ opened })} onClick={onClose}>
                <div className={modalContainer} onClick={(e) => e.stopPropagation()}>
                    <div className={modalHeader}>
                        <div className={modalTitle}>
                            {Icon && <Icon color="#fff" size={30} />}
                            <Text size={'lg'}>{title}</Text>
                        </div>
                        {/* TODO:change to button */}
                        <IconX color="#fff" size={30} onClick={onClose} className={css({ cursor: 'pointer' })} />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}
