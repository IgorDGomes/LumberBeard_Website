"use client"

import Image from "next/image";
import { Suspense, /*useState*/ } from "react"
import { sponsor1, sponsor2, sponsor3, sponsor4, item1, item2, item3, item4, item5 } from "@/helper/images";

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
      <Suspense fallback={
        <div className="h-[43rem] w-full bg-cream-300 animate-pulse"></div>
      }>
        <div className="h-[43rem] bg-fixed flex flex-col items-center justify-center gap-10 relative">
          <div className="hero-bg absolute inset-0"></div>
          <h1 className="drop-shadow-md font-semibold text-6xl tracking-wide">LumberBeard</h1>
          <p className="drop-shadow-md text-3xl max-w-[700px] text-center">A nod to the rugged lumberjack look, evoking a bear-like toughness and a stylish beard.</p>
          <div className="flex gap-32 z-10">
            <a href="/" className="bg-brown-600 rounded-2xl font-semibold text-xl px-3.5 py-4 shadow-md hover:bg-brown-300 hover:shadow-none transition-colors">Browse Our Products</a>
            <a href="/" className="bg-brown-600 rounded-2xl font-semibold text-xl px-3.5 py-4 shadow-md hover:bg-brown-300 hover:shadow-none transition-colors">Learn More</a>
          </div>
        </div>
      </Suspense>
      <div className="bg-brown-600 h-56 flex">
        <div className="flex flex-col justify-center gap-3 max-w-[1200px] mx-auto">
          <h2 className="font-bold text-4xl">What is our mission?</h2>
          <p className="text-xl">Welcome to LumberBear, where our passion for beard care began with a simple quest: to find the perfect products for our own beards. What started as a personal journey has blossomed into a mission to help men everywhere embrace their facial hair with confidence and style.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-24 max-w-[1200px] mx-auto py-16">
        <div className="bg-[#160E0C] rounded-2xl h-[40svw] max-h-[624px] overflow-hidden flex items-center justify-center relative">
          <Image src={item1} alt="Beard Kit" />
          <div className="absolute bottom-0 bg-text-bg/40 rounded-2xl p-4 flex flex-col min-h-[40%] max-h-56 gap-2">
            <h3 className="text-3xl font-semibold shadow-md">Ultimate Beard Grooming Trio</h3>
            <p className="text-lg">Experience the ultimate in beard care with our premium Beard Grooming Trio. This luxurious set includes three expertly formulated products designed to nourish, hydrate, and style your beard, leaving it looking and feeling its best.</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="h-fit flex gap-6">
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
          <h2 className="font-semibold text-[2.5rem] partners-text-gradient">Our Partners</h2>
          <div className="flex gap-16">
            <div className="w-32 border-2 border-brown-600 rounded-[2.5rem] flex items-center justify-center">
              <Image src={sponsor1} alt="" />
            </div>
            <div className="w-32 border-2 border-brown-600 rounded-[2.5rem] flex items-center justify-center">
              <Image src={sponsor2} alt="" />
            </div>
            <div className="w-32 border-2 border-brown-600 rounded-[2.5rem] flex items-center justify-center">
              <Image src={sponsor3} alt="" />
            </div>
            <div className="w-32 border-2 border-brown-600 rounded-[2.5rem] flex items-center justify-center">
              <Image src={sponsor4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
