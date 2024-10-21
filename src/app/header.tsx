import Image from "next/image";
import logo from "../assets/logo.webp";
import Link from "next/link";

export function Header() {
    return (
        <header className="bg-brown-600 flex items-center h-14 fixed right-0 left-0 z-50 shadow-lg">
            <div className="flex items-center justify-between w-[1200px] mx-auto">
                <Link href={"/"} className="flex items-center">
                    <Image src={logo} alt="Logo" className="size-12" />
                    <span className="text-cream-100 font-semibold text-xl">LumberBeard</span>
                </Link>
                <nav className="flex">
                    <ul className="flex text-cream-100 justify-between w-60 text-lg font-medium">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/about-us"}>About Us</Link>
                        </li>
                        <li>
                            <Link href={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}