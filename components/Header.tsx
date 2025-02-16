"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
function Header() {
  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState("/logo-d.png");

  const isActive = (path: string) => {
    return pathname === path ? "text-[#31BDA3]" : "text-black";
  };
  return (
    <header className="flex items-center px-10 py-4 justify-between">
      <div
        className="w-40 relative"
        onMouseEnter={() => setLogoSrc("/logo-h.png")} // Change this to your hover image
        onMouseLeave={() => setLogoSrc("/logo-d.png")}
      >
        <Image
          src={logoSrc}
          alt="logo"
          width={100}
          height={100}
          className="object-contain w-3/4"
        />
      </div>
      <div className="flex gap-10  items-center justify-center font-medium">
        <Link
          href="/"
          className={`text-sm ${isActive(
            "/"
          )} hover:text-[#31BDA3] transition-all duration-300 ease-in-out`}
        >
          Home
        </Link>
        {/* <Link href="/login" className={`text-sm ${isActive("/login")}`}>
          About Me
        </Link> */}
        <Link
          href="/projects"
          className={`text-sm ${isActive(
            "/projects"
          )} hover:text-[#31BDA3] transition-all duration-300 ease-in-out`}
        >
          Work
        </Link>
        <Link
          href="/resume"
          className={`text-sm ${isActive(
            "/resume"
          )} hover:text-[#31BDA3] transition-all duration-300 ease-in-out`}
        >
          Resume
        </Link>
      </div>
      <div className="sm:block hidden">
        <Button className="rounded-full py-2 px-6 bg-[#31BDA3] hover:bg-[#155D62] w-40">
          Book 1-1 Session
        </Button>
      </div>
    </header>
  );
}

export default Header;
