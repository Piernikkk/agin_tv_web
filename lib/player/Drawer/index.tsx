import Text from "@/lib/components/Text";
import { IconX } from "@tabler/icons-react";
import PlayerButton from "../PlayerButton";
import { drawerContainer, drawerHeaderStyles } from "./styles";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface DrawerProps {
    setOpened: Dispatch<SetStateAction<boolean>>;
    opened: boolean;
    title: string;
    children: ReactNode;
}

export default function Drawer({ setOpened, opened, title, children }: DrawerProps) {
    return (<div className={drawerContainer({ opened })} >
        <div className={drawerHeaderStyles} >
            <PlayerButton icon={IconX} onClick={() => setOpened((o) => !o)} />
            <Text size={"lg"} >{title}</Text>

        </div>
        {children}
    </div >)
}