import Carousel, { TSlide } from "@/lib/home/Carousel";
import { css } from "@/styled-system/css";
import { sections } from "./styles";
import { TMovieTile } from "@/lib/MovieTile";
import Section from "@/lib/home/Section";

export default function Home() {
  const slides: TSlide[] = [
    {
      background_url: '/horizontal_bocchi.jpg',
      name: 'Bocchi the rock',
      description: 'Hitori Gotoh, a shy, awkward, and lonely high school student dreams of being in a band despite her doubts and worries, but when she is recruited to be the guitarist of a group looking to make it big, she realises her dream may be able to be fulfilled and come true',
      logo_url: '/logo_bocchi.png'
    },
    {
      background_url: '/horizontal_bocchi2.jpg',
      name: 'Bocchi',
      description: 'Bocchi is',
      logo_url: '/logo_bocchi.png'
    },
    {
      background_url: '/horizontal_bocchi3.jpg',
      name: 'Bocchi',
      description: 'Bocchi is',
      logo_url: '/logo_bocchi.png'
    }
  ]

  const tiles: TMovieTile[] = [
    {
      background_url: '/horizontal_bocchi.jpg',
      name: 'Bocchi the rock',
      description: 'Hitori Gotoh, a shy, awkward, and lonely high school student dreams of being in a band despite her doubts and worries, but when she is recruited to be the guitarist of a group looking to make it big, she realises her dream may be able to be fulfilled and come true',
      position: 100,
      duration: 1440,
    },
    {
      background_url: '/horizontal_bocchi.jpg',
      name: 'Bocchi the rock',
      description: 'Hitori Gotoh, a shy, awkward, and lonely high school student dreams of being in a band despite her doubts and worries, but when she is recruited to be the guitarist of a group looking to make it big, she realises her dream may be able to be fulfilled and come true',
      position: 100,
      duration: 1440,
    },
    {
      background_url: '/horizontal_bocchi.jpg',
      name: 'Bocchi the rock',
      description: 'Hitori Gotoh, a shy, awkward, and lonely high school student dreams of being in a band despite her doubts and worries, but when she is recruited to be the guitarist of a group looking to make it big, she realises her dream may be able to be fulfilled and come true',
      position: 100,
      duration: 1440,
    },
    {
      background_url: '/horizontal_bocchi.jpg',
      description: 'Hitori Gotoh, a shy, awkward, and lonely high school student dreams of being in a band despite her doubts and worries, but when she is recruited to be the guitarist of a group looking to make it big, she realises her dream may be able to be fulfilled and come true',
      name: 'Bocchi the rock',
      position: 100,
      duration: 1440,
    },
  ]




  return (
    <div className={css({ width: '100%', padding: '0px', gap: "20px", display: 'flex', flexDirection: 'column', paddingBottom: '100px' })}>
      <Carousel slides={slides} />
      <div className={sections}>
        <Section name={"Continue Watching"} tiles={tiles} />

      </div>
    </div>
  );
}
