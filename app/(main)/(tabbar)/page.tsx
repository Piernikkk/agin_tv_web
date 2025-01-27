'use client'
import Carousel, { TSlide } from "@/lib/home/Carousel";
import { css } from "@/styled-system/css";
import { sections } from "./styles";
import { TMovieTile } from "@/lib/MovieTile";
import Section from "@/lib/home/Section";
import { useEffect, useState } from "react";
import useApi from "@/lib/hooks/useApi";
import { AxiosResponse } from "axios";

export default function Home() {
  const [slides, setSlides] = useState<TSlide[]>();
  const [continueWatching, setContinueWatching] = useState<TMovieTile[]>();
  const api = useApi();

  useEffect(() => {
    (async () => {
      if (api == null) return;
      const { data }: AxiosResponse<{ carousel: TSlide[], continueWatching: TMovieTile[] }> = await api.get('/home');
      setSlides(data?.carousel);
      setContinueWatching(data?.continueWatching);
    })()
  }, [api])

  return (
    <div className={css({ width: '100%', padding: '0px', gap: "20px", display: 'flex', flexDirection: 'column', paddingBottom: '200px' })}>
      <Carousel slides={slides} />
      <div className={sections}>
        <Section name={"Continue Watching"} tiles={continueWatching} />

      </div>
    </div>
  );
}
