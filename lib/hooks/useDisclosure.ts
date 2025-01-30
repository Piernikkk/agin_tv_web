import { useState } from "react"

export type useDisclosureType = [boolean, { open: () => void; close: () => void }]

export default function useDisclosure(defaultState?: boolean): useDisclosureType {
    const [opened, setOpened] = useState(defaultState || false);

    const open = () => setOpened(true);
    const close = () => setOpened(false);

    return [opened, { open, close }]
}