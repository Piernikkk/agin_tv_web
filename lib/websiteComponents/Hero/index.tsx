'use client';
import { useEffect, useState } from "react";
import { Title } from "../Title";
import { content, cta, hero, heroSubtitle, heroTextBox, heroTitle, screenshot, screenshotContainer, secondaryGrid } from "./styles";
import { useMouse } from "@mantine/hooks";
import { Button } from "../Button";
import Link from "next/link";

export function Hero() {
    const { ref, x, y } = useMouse();

    return (
        <div className={hero} ref={ref}>
            <div className={secondaryGrid} style={{
                maskPosition: `${x - 200}px ${y - 200}px`,
            }}></div>
            <div className={content}>
                <div className={heroTextBox}>
                    <div className={heroTitle}>Your Movies, Your Server, Your Rules.</div>
                    <div className={heroSubtitle}>Agin TV is a self-hosted movie streaming app that puts you in control of your media. Stream your personal movie collection seamlessly across devices with a sleek, intuitive interface. No subscriptions, no limits—just your content, on your terms. 🚀🍿</div>
                    <Link href="/app">
                        <div className={cta}>
                            <Button variant="primary">Try demo</Button>
                        </div>
                    </Link>
                </div>
                <div className={screenshotContainer}>
                    <img src="/images/home.png" className={screenshot} />
                </div>
            </div>
        </div>
    )
}