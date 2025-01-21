import { tabBarHeader } from "./styles";
import { IconDeviceTvOld } from "@tabler/icons-react";
import { tabOptionLabel } from "../TabOption/styles";

export type TabBarHeaderProps = {
    expanded?: boolean;
}

export default function TabBarHeader({ expanded }: TabBarHeaderProps) {
    return (
        <div className={tabBarHeader}>
            <div>
                <IconDeviceTvOld color="#7b2eda" size={47} />
            </div>
            <div className={tabOptionLabel({ expanded, header: true })}>Agin TV</div>
        </div>
    )
}