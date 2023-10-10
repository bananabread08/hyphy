import air75hero from '../assets/air75-v2-hero.webp'
import field65hero from '../assets/field75-hero.webp'

type HeroData = { imgUrl: string; title: string; desc: string }

const heroData: HeroData[] = [
  {
    imgUrl: air75hero,
    title: 'Air 75',
    desc: 'The fastest and slimmest QMK/VIA keyboard on the planet',
  },
  {
    imgUrl: field65hero,
    title: 'Field 65',
    desc: 'Everyday is field day',
  },
]

const HeroImage = ({ data }: { data: HeroData }) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={data.imgUrl}
        alt="air75-hero"
        className="w-full h-full min-h-[375px] object-cover brightness-[85%] animate-fade-in"
      ></img>
      <div className="px-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-primary-foreground backdrop-blur-sm ">
        <h1 className="transition-all text-6xl sm:text-8xl md:text-9xl font-bold">
          {data.title}
        </h1>
        <p className="transition-all text-xl md:text-2xl">{data.desc}</p>
      </div>
    </div>
  )
}

export const Home = () => {
  return (
    <main>
      {heroData.map((data) => (
        <HeroImage data={data} />
      ))}
    </main>
  )
}
