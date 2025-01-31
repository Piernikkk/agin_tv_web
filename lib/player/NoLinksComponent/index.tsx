import { useRouter } from "next/navigation";
import { noLinksComponentContainer } from "./styles";
import Text from "@/lib/components/Text";
import Button from "@/lib/components/Button";

export default function NoLinksComponent() {
    const router = useRouter();
    return (
        <div className={noLinksComponentContainer}>
            <Text>No links found :(</Text>
            <Button contrast onClick={() => router.back()}>Go back</Button>
        </div>
    )
}