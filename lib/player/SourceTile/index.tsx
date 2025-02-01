import { IconCheck } from "@tabler/icons-react";
import { sourceText, sourceTileContainer } from "./styles";
import Text from "@/lib/components/Text";
import { sourceComponentInline } from "@/lib/components/SourceComponent/styles";
import { TFile } from "@/lib/types/TFile";

interface SourceTileProps extends TFile {
    onClick?: () => void;
    active?: boolean;
}

export default function SourceTile({ original_name, active, onClick, user }: SourceTileProps) {
    return (
        <div onClick={onClick} className={sourceTileContainer}>
            {active ? <IconCheck /> : null}
            <div className={sourceText} >
                <div className={sourceComponentInline}>
                    <Text size="md" weight={600}>Filename: </Text>
                    <Text size="md" color={2} weight={500}>{original_name}</Text>
                </div>
                <div className={sourceComponentInline}>
                    <Text size="md" weight={600}>Uploaded by: </Text>
                    <Text size="md" color={2} weight={500}>{user.username}</Text>
                </div>
            </div>
            {/* <Text weight={active ? 700 : 500}>{label} • {quality}</Text> */}
            {/* <Text weight={active ? 500 : 400} size="sm">{sub ? `sub: ${sub} • audio: ${audio}`}</Text> */}



        </div>
    )
}