import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#191919]/10 px-20 py-8 flex flex-col gap-6">
      <div className="flex items-center justify-between pr-56">
        <div>
          <Image
            src={"/logo.png"}
            alt=""
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a className="border-r-2 border-[#31BDA3] pr-4">About Me</a>
          <a className="border-r-2 border-[#31BDA3] pr-4">Portfolio</a>
          <a className="border-r-2 border-[#31BDA3] pr-4">Resume</a>
          <a>Book 1-1 Call</a>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm">
          Copyright © 2025 Sravan Puli, All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <div className="rounded-full p-3 bg-[#31BDA3]  text-white">
            <RiInstagramFill className=" w-6 h-6 " />
          </div>
          <div className="rounded-full p-3 bg-[#31BDA3]  text-white">
            <FaLinkedinIn className=" w-6 h-6 " />
          </div>
          <div className="rounded-full p-3 bg-[#31BDA3]  text-white">
            <IoLogoWhatsapp className=" w-6 h-6 " />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
