"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiBuilding2Fill } from "react-icons/ri";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { featured } from "@/config/featured";
import { MdOutlineMail } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full h-full bg-white">
      {/* navbar */}
      <Header />
      {/* hero */}
      <section className="w-full h-full flex items-center justify-center gap-10 my-10">
        <div className="w-1/4 h-[500px]">
          <div className="text-white  w-full h-full text-center">
            <Image
              src={"/hero.png"}
              alt="hero image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="w-2/6 space-y-4">
          <p className="text-sm text-[#31BDA3]">HEY</p>
          <p className="text-4xl font-bold">Hey, I am Sravan!.</p>
          <p className="text-4xl font-bold my-2">
            I love{" "}
            <span className="border-b-4  border-[#31BDA3] py-1">
              {" "}
              gadgets,not just pixels
            </span>
          </p>
          <p className="text-sm text-[#333333] py-4 tracking-wider">
            Product Designer based out of Atlanta. Professional UX <br />{" "}
            experience in{" "}
            <span className="font-bold text-black underline underline-offset-2">
              B2B spaces
            </span>{" "}
            and{" "}
            <span className="font-bold text-black underline underline-offset-2">
              {" "}
              SaaS applications.
            </span>
          </p>
          <p className="text-sm font-medium border-b-2 border-black w-fit my-2">
            SCAD ’ Savannah 🎓
          </p>
          <div className="flex gap-4 py-4">
            <Button className="rounded-full py-6 px-8 bg-[#31BDA3] ">
              More About Me
            </Button>
            <Button
              className="rounded-full py-6 px-8 border-[#31BDA3] text-[#31BDA3]"
              variant="outline"
            >
              My Portfolio
            </Button>
          </div>
        </div>
      </section>
      {/* brands */}
      <section className="relative w-full h-full flex flex-col items-center py-10 justify-center">
        <p className="text-2xl font-bold mb-12">Brands I Have Designed For</p>

        <div className="w-3/4 relative">
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          <div className="w-full overflow-x-hidden">
            {/* Scrollable Content */}
            <motion.div
              className="flex gap-8 items-center"
              initial={{ x: 0 }} // Start position
              animate={{ x: -2000 }} // Move left by a large value
              transition={{
                repeat: Infinity, // Loop indefinitely
                duration: 30, // Adjust this value to control the speed
                ease: "linear", // Smooth and consistent scrolling
              }}
            >
              {[1, 2, 3].map((index) => {
                return (
                  <div className="flex gap-8" key={index}>
                    {[
                      "/scroll/s-1.png",
                      "/scroll/s-2.png",
                      "/scroll/s-3.png",
                      "/scroll/s-4.png",
                      "/scroll/s-5.png",
                    ].map((item) => (
                      <div
                        key={item}
                        className="w-[178px] bg-gray-100 h-[96px] flex items-center justify-center shrink-0 rounded-2xl"
                      >
                        <Image
                          src={item}
                          alt=""
                          width={100}
                          height={100}
                          className="w-[130px] h-[34px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                );
              })}

              {/* Repeat items for smooth scrolling */}
            </motion.div>
          </div>
        </div>
      </section>
      {/* projects */}
      <section className="w-full h-full flex flex-col items-center py-10">
        <p className="text-3xl font-bold mb-6">Projects</p>
        <div>
          {featured.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center justify-center gap-8 w-[940px] h-[564px] px-12 py-14"
            >
              <div className="flex-1">
                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-4 w-full h-full py-10">
                <p className="text-sm text-[#31BDA3]">{item.id}</p>
                <h2 className="text-4xl font-bold pt-4">{item.title}</h2>
                <p className="pt-2">{item.description}</p>
                <p className="flex items-center gap-2 pt-4">
                  <span>
                    {" "}
                    <RiBuilding2Fill className="text-[#31BDA3] w-5 h-5" />
                  </span>
                  {item.education}
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <RiPencilRuler2Fill className="text-[#31BDA3] w-5 h-5" />
                  </span>
                  {item.research}
                </p>
                <Button className="rounded-full py-6 px-8 bg-[#31BDA3] mt-4">
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button className="rounded-full py-3 px-6 bg-[#31BDA3] w-56 h-auto">
          view all projects
        </Button>
      </section>
      <section className="w-full h-[522px] relative">
        <div className="w-full bg-black">
          <Image
            src={"/contact.jpeg"}
            alt=""
            width={1600}
            height={500}
            className="w-full h-[522px] object-cover opacity-40"
          />
        </div>
        <div className="text-white absolute bottom-10 left-16  flex flex-col items-start justify-center gap-6">
          <p className="text-4xl flex items-center gap-4">
            sravanpuli2002@gmail.com{" "}
            <span>
              <MdOutlineMail />
            </span>
            <span>
              <FaRegCopy />
            </span>
          </p>
          <p className="text-2xl font-bold">
            come, let&apos;s go for a coffee!! ☕ 🧋
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center gap-8 py-10 text-black">
        <div className="rounded-full p-3 bg-[#191919]/10 ">
          <FaBehance className=" w-6 h-6 " />
        </div>
        <div className="rounded-full p-3 bg-[#191919]/10 ">
          <FaLinkedinIn className=" w-6 h-6 " />
        </div>
        <div className="rounded-full p-3 bg-[#191919]/10 ">
          <FaInstagram className=" w-6 h-6 " />
        </div>
        <div className="rounded-full p-3 bg-[#191919]/10 ">
          <FaYoutube className=" w-6 h-6 " />
        </div>
        <div className="rounded-full p-3 bg-[#191919]/10 ">
          <FaSnapchat className=" w-6 h-6 " />
        </div>
        <div className="rounded-full p-3 bg-[#191919]/10 ">
          <FaFigma className=" w-6 h-6 " />
        </div>
        <div className="rounded-full p-3 bg-[#191919]/10 ">
          <TbMailFilled className=" w-6 h-6 " />
        </div>
      </section>
      <Footer />
    </div>
  );
}
