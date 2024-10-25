import Image from "next/image";
import { logo, mustacheDivision as mustacheDiv } from "@/helper/images";

export default function AboutUs() {
  return (
    <div className="bg-brown-300 relative overflow-hidden">
      <div className="flex max-w-[1200px] mx-auto">
        <div className="mx-auto lg:mx-0 lg:max-w-[60%] text-cream-100 mt-14 text-center flex flex-col items-center gap-5 py-5">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="logo" className="size-52" />
            <h1 className="font-semibold text-4xl">LumberBeard</h1>
          </div>
          <div className="w-[80%] lg:max-w-[630px] text-xl">
            <p>Welcome to LumberBeard!</p>
            <p>
              At LumberBeard, we believe that every beard tells a story. Our
              journey began in a small garage, where two friends, fueled by a
              passion for grooming and a desire to elevate the art of beard
              care, embarked on a mission to create the best products for men
              who take their beards seriously.
            </p>
          </div>
          <div className="h-10 w-full flex items-center relative">
            <Image
              src={mustacheDiv}
              alt=""
              className="absolute left-[calc(50%-50px)] top-[5px]"
            />
            <div className="absolute w-[3000svw] border border-cream-100 -left-[800px]"></div>
          </div>
          <div className="w-[80%] lg:max-w-[630px] text-xl">
            <p>Our Mission</p>
            <p>
              Our mission is simple: to empower men to embrace their unique
              facial hair with confidence and style. We strive to provide
              premium grooming products that nourish and enhance your beard,
              making you feel your best every day.
            </p>
          </div>
          <div className="h-10 w-full flex items-center relative">
            <Image
              src={mustacheDiv}
              alt=""
              className="absolute left-[calc(50%-50px)] top-[5px]"
            />
            <div className="absolute w-[3000svw] border border-cream-100 -left-[800px]"></div>
          </div>
          <div className="w-[80%] lg:max-w-[630px] text-xl pb-5">
            <p>Our Product Philosophy</p>
            <p>
              At Bearded Bros, we don&apos;t just sell products; we curate an
              experience. Each product is thoughtfully formulated, combining
              traditional grooming wisdom with modern science. From beard oils
              to balms, our offerings are designed to provide nourishment and
              maintain the health of your beard.
            </p>
          </div>
          <div className="w-[80%] lg:max-w-[630px] border-2 border-cream-100">
            <div className="bg-cream-100 text-brown-300 h-14 flex items-center justify-center">
              <p className="font-bold text-xl">Our core values</p>
            </div>
            <div className="p-4 sm:py-0 sm:h-64 text-xl flex flex-col items-center justify-center sm:px-12 gap-2 leading-5">
              <p>
                Quality: We are committed to using only the finest, natural
                ingredients to craft our products, ensuring they are safe and
                effective for all beard types.
              </p>
              <p>
                Sustainability: We prioritize eco-friendly practices in our
                sourcing and packaging, so you can feel good about what you use.
              </p>
              <p>
                Community: We believe in building a supportive community of
                bearded men who share tips, tricks, and camaraderie.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex about-us-bg absolute bottom-0 right-0 top-0 w-[40%] mt-14"></div>
    </div>
  );
}
