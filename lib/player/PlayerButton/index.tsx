import { Icon } from "@tabler/icons-react"
import { PlayerButtonContainer } from "./styles"

type PlayerButtonProps = {
    icon: Icon,
    onClick: () => void,
}

export default function PlayerButton({ icon: Icon, onClick }: PlayerButtonProps) {
    return (
        <div onClick={onClick} className={PlayerButtonContainer} >
            <Icon color="#ffffff" />
        </div>
    )
}