import Text from "@/lib/components/Text";
import { tabBarHeader } from "./styles";
import { IconDeviceTvOld } from "@tabler/icons-react";

export default function TabBarHeader() {
    return (
        <div className={tabBarHeader}>
            <IconDeviceTvOld color="#8950c5" size={40} />
            <Text size="xl" color={'agin'}>Agin TV</Text>
        </div>
    )
}