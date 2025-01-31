import { TFile } from "@/lib/types/TFile";
import { sourceComponentContainer, sourceComponentInline } from "./styles";
import { IconFile, IconTrash } from "@tabler/icons-react";
import Text from "../Text";
import { token } from "@/styled-system/tokens";
import { MouseEvent, useCallback, useContext } from "react";
import { UserContext } from "@/app/(main)/layout";
import useApi from "@/lib/hooks/useApi";

interface SourceComponentProps extends TFile {
    refresh?: () => void;
    onClick?: () => void;
}

export default function SourceComponent({ original_name, user, _id, refresh, onClick }: SourceComponentProps) {
    const userContext = useContext(UserContext);
    const api = useApi();

    const deleteSelf = useCallback(async (e: MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();
        if (!api) return;
        await api.delete(`/files/delete/${_id}`);
        await refresh?.();
    }, [api, _id]);

    return (
        <div className={sourceComponentContainer} onClick={onClick}>
            <IconFile size={35} color="#fff" />
            <div>
                <div className={sourceComponentInline}>
                    <Text size="md" weight={600}>Filename: </Text>
                    <Text size="md" color={2} weight={500}>{original_name}</Text>
                </div>
                <div className={sourceComponentInline}>
                    <Text size="md" weight={600}>Uploaded by: </Text>
                    <Text size="md" color={2} weight={500}>{user.username}</Text>
                </div>
            </div>
            {userContext?._id == user?._id && <IconTrash onClick={deleteSelf} size={25} color={token('colors.red.7')} />}

        </div>
    )
}