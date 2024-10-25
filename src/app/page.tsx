"use client";

import Image from "next/image";
import { Suspense /*useState*/ } from "react";
import {
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  item1,
  item2,
  item3,
  item4,
  item5,
} from "@/helper/images";

// const items = {
//   Kit: 1,
//   Oils: 2,
//   Comb: 3,
//   Roller: 4,
//   Scissor: 5,
// } as const

// // Object.freeze(items);

// type ItemsType = keyof typeof items;

export default function Home() {
  // const [itemSelected, setItemSelected] = useState("");

  return (
    <div className="bg-cream-300 text-cream-100">
      <Suspense
        fallback={
          <div className="h-[43rem] w-full bg-cream-300 animate-pulse"></div>
        }
      >
        <div className="h-[43rem] bg-fixed flex flex-col items-center justify-center gap-10 relative">
          <div className="hero-bg absolute inset-0"></div>
          <h1 className="drop-shadow-md font-semibold text-4xl sm:text-5xl md:text-6xl tracking-wide">
            LumberBeard
          </h1>
          <p className="drop-shadow-md text-xl sm:text-2xl md:text-3xl max-w-[80%] md:max-w-[700px] text-center">
            A nod to the rugged lumberjack look, evoking a bear-like toughness
            and a stylish beard.
          </p>
          <div className="grid md:grid-cols-2 gap-4 md:gap-32 z-10 justify-items-center">
            <a
              href="/"
              className="bg-brown-600 rounded-2xl font-semibold sm:text-lg md:text-xl px-3.5 py-4 shadow-md hover:bg-brown-300 hover:shadow-none transition-colors w-fit"
            >
              Browse Our Products
            </a>
            <a
              href="/"
              className="bg-brown-600 rounded-2xl font-semibold sm:text-lg md:text-xl px-3.5 py-4 shadow-md hover:bg-brown-300 hover:shadow-none transition-colors w-fit"
            >
              Learn More
            </a>
          </div>
        </div>
      </Suspense>
      <div className="bg-brown-600 py-11 flex">
        <div className="flex flex-col justify-center gap-6 md:gap-3 max-w-[80%] xl:max-w-[1200px] mx-auto">
          <h2 className="font-bold text-4xl">What is our mission?</h2>
          <p className="text-xl">
            Welcome to LumberBear, where our passion for beard care began with a
            simple quest: to find the perfect products for our own beards. What
            started as a personal journey has blossomed into a mission to help
            men everywhere embrace their facial hair with confidence and style.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-24 max-w-[1200px] mx-auto py-16">
        <div className="bg-[#160E0C] rounded-2xl h-fit lg:h-[40svw] lg:max-h-[624px] w-[80%] mx-auto lg:w-fit overflow-hidden flex items-center justify-center relative py-10">
          <Image src={item1} alt="Beard Kit" />
          <div className="absolute bottom-0 bg-text-bg/50 rounded-2xl p-4 hidden sm:flex flex-col sm:min-h-[40%] md:max-h-[80%] gap-2">
            <h3 className="text-xl md:text-3xl font-semibold">
              Ultimate Beard Grooming Trio
            </h3>
            <p className="md:text-lg">
              Experience the ultimate in beard care with our premium Beard
              Grooming Trio. This luxurious set includes three expertly
              formulated products designed to nourish, hydrate, and style your
              beard, leaving it looking and feeling its best.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-6">
          <div className="h-full flex gap-6">
            <div className="rounded-2xl px-4 flex items-center justify-center overflow-hidden bg-gradient-to-b from-brown-600 to-cream-600">
              <Image src={item2} alt="Beard Oils" />
            </div>
            <div className="rounded-2xl flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0E0A07] to-[#412E23] max-w-80">
              <Image src={item3} alt="Beard Kit" />
            </div>
          </div>
          <div className="h-full flex gap-6">
            <div className="flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-brown-600 to-cream-600">
              <Image src={item4} alt="Beard Kit" />
            </div>
            <div className="flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-brown-600 to-cream-600">
              <Image src={item5} alt="Beard Kit" />
            </div>
          </div>
        </div>
      </div>
      <div className="partners-gradient h-60">
        <div className="h-full flex flex-col items-center justify-center max-w-[1200px] mx-auto gap-3">
          <h2 className="font-semibold text-[2.5rem] partners-text-gradient">
            Our Partners
          </h2>
          <div className="flex gap-2 sm:gap-8 lg:gap-16">
            <div className="lg:w-32 border-2 border-brown-600 rounded-3xl lg:rounded-[2.5rem] flex items-center justify-center">
              <Image
                src={sponsor1}
                alt=""
                className="size-16 sm:size-24 lg:size-32"
              />
            </div>
            <div className="lg:w-32 border-2 border-brown-600 rounded-3xl lg:rounded-[2.5rem] flex items-center justify-center">
              <Image
                src={sponsor2}
                alt=""
                className="size-16 sm:size-24 lg:size-32"
              />
            </div>
            <div className="lg:w-32 border-2 border-brown-600 rounded-3xl lg:rounded-[2.5rem] flex items-center justify-center">
              <Image
                src={sponsor3}
                alt=""
                className="size-16 sm:size-24 lg:size-32"
              />
            </div>
            <div className="lg:w-32 border-2 border-brown-600 rounded-3xl lg:rounded-[2.5rem] flex items-center justify-center">
              <Image
                src={sponsor4}
                alt=""
                className="size-16 sm:size-24 lg:size-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
