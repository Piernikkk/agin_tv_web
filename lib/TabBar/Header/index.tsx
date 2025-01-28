import { tabBarHeader } from "./styles";
import { IconDeviceTvOld } from "@tabler/icons-react";
import { tabOptionLabel } from "../TabOption/styles";

type OptionVariants = Exclude<Parameters<typeof tabOptionLabel>[0], undefined>;

// export interface TabBarHeaderProps extends OptionVariants {
// }

export default function TabBarHeader({ expanded, size }: OptionVariants) {
    return (
        <div className={tabBarHeader}>
            <div>
                <IconDeviceTvOld color="#7b2eda" size={size ? size + 25 : 47} />
            </div>
            <div className={tabOptionLabel({ expanded, header: true, size })}>Agin TV</div>
        </div>
    )
}