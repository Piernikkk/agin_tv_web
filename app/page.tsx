import Carousel, { TSlide } from "@/lib/home/Carousel";
import { css } from "@/styled-system/css";

export default function Home() {
  const slides: TSlide[] = [
    {
      background_url: '/horizontal_bocchi.jpg',
      name: 'Bocchi',
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


  return (
    <div className={css({ width: '100%', height: '100%', padding: '40px' })}>
      <Carousel slides={slides} />
    </div>
  );
}
