import { IconBook, IconDeviceTvOld, IconDownload, IconFlame } from "@tabler/icons-react";
import { FeatureIcon } from "../FeatureIcon";
import { actions, blur, blurContainer, download, header, subtitle, title } from "./styles";
import { Button } from "../Button";
import { repoUrl } from "@/lib/config";
import Link from "next/link";

export function Download() {
    return (
        <div className={download}>
            <div className={header}>
                <FeatureIcon icon={IconDeviceTvOld} variant="gradient" />
                <div className={title}>Get Started with Agin TV</div>
                <div className={subtitle}>Take full control of your movie collection with Agin TV - stream, organize, and enjoy your content on any device, all from your own server. No subscriptions, no limits!</div>
            </div>
            <div className={actions}>
                <Link href="/app">
                    <Button variant="primary">Try demo</Button>
                </Link>
                <a href={repoUrl} target="_blank">
                    <Button>See on GitHub</Button>
                </a>
            </div>
            <div className={blurContainer}>
                <div className={blur}></div>
            </div>
        </div>
    )
}