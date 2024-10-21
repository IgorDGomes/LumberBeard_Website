import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.webp";

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <div className="bg-brown-600">
                <div className="flex items-start justify-between max-w-[1200px] mx-auto py-20">
                    <div className="flex flex-col max-w-[25rem] gap-6">
                        <h2 className="font-semibold text-4xl text-cream-100">Stay in the loop!</h2>
                        <p className="text-2xl text-cream-100">Sign up for our newsletter to get the latest updates, grooming tips, and exclusive offers straight to your inbox.</p>
                        <form method="post" className="flex flex-col gap-3">
                            <input type="email" name="subscriberEmail" placeholder="Enter your email" required className="border-2 bg-transparent border-cream-100 rounded-2xl w-96 h-14 pl-4 placeholder-cream-100 placeholder-opacity-80 font-semibold text-xl" />
                            <button type="submit" className="uppercase bg-cream-100 text-brown-600 rounded-2xl text-xl font-semibold py-3.5 px-10 w-fit">Subscribe</button>
                        </form>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl text-cream-100 font-semibold">Sitemap</h2>
                        <ul className="list-disc text-cream-100 text-2xl pl-6">
                            <li className="pb-2">
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li className="pb-2">
                                <Link href={"/about-us"}>About</Link>
                            </li>
                            <li>
                                <Link href={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={logo} alt="logo" className="w-52" />
                        <h2 className="text-cream-100 text-4xl font-semibold">LumberBeard</h2>
                    </div>
                </div>
            </div>
            <div className="h-10 bg-dark flex items-center justify-center">
                <p className="font-medium text-sm text-cream-100">© {year} All rights reserved</p>
            </div>
        </footer>
    )
}