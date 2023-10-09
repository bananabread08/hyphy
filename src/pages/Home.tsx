import air75hero from '../assets/air75-v2-hero.webp'
import field65hero from '../assets/field75-hero.webp'
export const Home = () => {
  return (
    <main>
      <div className="relative">
        <img
          src={air75hero}
          alt="air75-hero"
          className="w-full h-full min-h-[375px] object-cover brightness-[85%]"
        ></img>
        <div className="px-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-primary-foreground backdrop-blur-sm ">
          <h1 className="transition-all text-6xl sm:text-8xl md:text-9xl font-bold">
            Air 75
          </h1>
          <p className="transition-all text-xl md:text-2xl">
            The fastest and slimmest QMK/VIA keyboard on the planet
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src={field65hero}
          alt="field65-hero"
          className="w-full h-full min-h-[375px] object-cover brightness-[85%] "
        ></img>
        <div className="px-4 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-primary-foreground backdrop-blur-sm ">
          <h1 className="transition-all text-6xl sm:text-8xl md:text-9xl font-bold">
            Field 75
          </h1>
          <p className="transition-all text-xl md:text-2xl">
            Everyday is field day
          </p>
        </div>
      </div>
    </main>
  )
}
