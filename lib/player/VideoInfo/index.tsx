import Text from "@/lib/components/Text";

type VideoInfoProps = {
    name?: string,
    epName?: string,
    season?: number,
    episode?: number,
    isTv?: boolean
}

export default function VidoInfo({ name, epName, season, episode, isTv }: VideoInfoProps) {
    return (
        <div>
            <Text weight={600} >{name}</Text>
            {isTv && <Text color={2}>S{season?.toString().padStart(2, '0')}E{episode?.toString().padStart(2, '0')} • {epName}</Text>}
        </div>
    )
}