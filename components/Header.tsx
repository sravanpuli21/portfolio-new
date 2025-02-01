"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-[#31BDA3]" : "text-black";
  };
  return (
    <header className="flex items-center px-10 py-4 justify-between">
      <div className="w-40 relative">
        <Image
          src={"/logo-d.png"}
          alt="logo"
          width={100}
          height={100}
          className="object-contain w-3/4"
        />
      </div>
      <div className="flex gap-10  items-center justify-center">
        <Link href="/" className={`text-sm ${isActive("/")}`}>
          Home
        </Link>
        <Link href="/login" className={`text-sm ${isActive("/login")}`}>
          About Me
        </Link>
        <Link href="/projects" className={`text-sm ${isActive("/projects")}`}>
          Projects
        </Link>
        <Link href="/resume" className={`text-sm ${isActive("/resume")}`}>
          Resume
        </Link>
      </div>
      <div>
        <Button className="rounded-full py-2 px-6 bg-[#31BDA3] w-40">
          Book 1-1 Session
        </Button>
      </div>
    </header>
  );
}

export default Header;
