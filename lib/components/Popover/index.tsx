import React, { useEffect, ReactNode, useRef } from "react"
import { css } from "@/styled-system/css"
import { contentStyles, popoverWrapper, popverBackground, targetStyles } from "./styles"

type PopoverProps = {
    opened: boolean
    setOpened?: (opened: boolean) => void
    onChange?: (opened: boolean) => void
    children: ReactNode
    w?: string | number
    radius?: string | number
}

const Popover = ({ opened, setOpened, onChange, children }: PopoverProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof onChange === "function") onChange(opened)
    }, [opened, onChange])

    const target = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && (child.type as { displayName?: string }).displayName === "PopoverTarget"
    )
    const content = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && (child.type as { displayName?: string }).displayName === "PopoverContent"
    )

    return (
        <>
            {opened && <div className={popverBackground} onClick={() => setOpened?.(false)} />}
            <div className={popoverWrapper} >
                <div className={targetStyles}>
                    <div className={css({ maxWidth: 'fit-content' })} ref={ref} onClick={() => setOpened?.(true)}>{target}</div>
                    <div style={{ width: ref.current?.getBoundingClientRect().width || '200px' }} className={contentStyles({ opened })}>
                        {/* <div className={paperStyles}>{content}</div> */}
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}

Popover.Target = (({ children }: { children: ReactNode }) => {
    return <>{children}</>;
}) as React.FC<{ children: ReactNode }>;
Popover.Target.displayName = "PopoverTarget"

Popover.Content = (({ children }: { children: ReactNode }) => {
    return <>{children}</>;
}) as React.FC<{ children: ReactNode }>;
Popover.Content.displayName = "PopoverContent"

export default Popover