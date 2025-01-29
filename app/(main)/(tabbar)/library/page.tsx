import Text from "@/lib/components/Text";
import { libraryContainer } from "./styles";

export default function Library() {
    return (
        <div className={libraryContainer}>
            <Text weight={600} size="xl">Library</Text>
        </div>
    )
}