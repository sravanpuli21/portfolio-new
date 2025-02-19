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
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const router = useRouter();
  const { toast } = useToast();
  return (
    <div className="w-full h-full bg-white">
      {/* navbar */}
      <Header />
      {/* hero */}
      <section className="w-full h-full flex sm:flex-row flex-col items-center justify-center gap-10 my-10 sm:px-0 px-5">
        <div className="sm:w-1/4 w-full sm:h-[500px] h-full">
          <div className="text-white  w-full h-full text-center">
            <Image
              src={"/hero.png"}
              alt="hero image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="sm:w-2/6 w-full space-y-4">
          <p className="text-sm text-[#31BDA3] font-bold">HEY</p>
          <p className="sm:text-3xl text-3xl font-bold ">Hey, I am Sravan!.</p>
          <p className="sm:text-3xl text-3xl font-bold my-2">
            I love{" "}
            <span className="border-b-4  border-[#31BDA3] py-1">
              {" "}
              gadgets,not just pixels
            </span>
          </p>
          <p className="text-sm text-[#333333] py-4 tracking-wider font-normal">
            Design Researcher. Professional UX <br /> experience in{" "}
            <span className=" text-black underline underline-offset-2 font-semibold">
              B2B spaces
            </span>{" "}
            and{" "}
            <span className="font-semibold text-black underline underline-offset-2">
              {" "}
              SaaS applications.
            </span>
          </p>
          <a
            href="https://www.scad.edu/academics/programs/design-management "
            className="text-sm font-semibold border-b-2 border-black w-fit my-2 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            SCAD ’ Savannah 🎓
          </a>
          <div className="flex gap-4 py-4">
            <Button className="rounded-full py-6 px-8 bg-[#31BDA3] hover:bg-[#155D62]">
              More About Me
            </Button>
            <Button
              className="rounded-full py-6 px-8 border-[#31BDA3] text-[#31BDA3] hover:border-[#E3DFDA] hover:bg-[#E3DFDA]"
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

        <div className="sm:w-3/4 w-full relative">
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
        <p className="text-4xl font-bold mb-6">Projects</p>
        <div>
          {featured.map((item) => (
            <div
              key={item.id}
              className="flex sm:flex-row flex-col items-center justify-center gap-8 sm:w-[940px] sm:h-[564px] w-full h-auto px-12 sm:py-14 py-4"
            >
              <div className="flex-1 w-full">
                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-4 w-full h-full sm:py-10 py-2">
                <p className="text-sm font-bold text-[#31BDA3]">{item.id}</p>
                <h2 className="text-5xl font-bold pt-4">{item.title}</h2>
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
                <Button
                  onClick={() => router.push(item.route)}
                  className="rounded-full py-6 px-8 bg-[#31BDA3] hover:bg-[#155D62] mt-4"
                >
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={() => router.push("/projects")}
          className="rounded-full py-3 px-6 bg-[#31BDA3] hover:bg-[#155D62] w-56 h-auto"
        >
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
        <div className="text-white absolute bottom-10 sm:left-16 left-2  flex flex-col items-start justify-center gap-6">
          <p className="sm:text-4xl text-2xl flex items-center gap-4 font-thin">
            sravanpuli2002@gmail.com{" "}
            <span>
              <a
                className="cursor-pointer"
                href="mailto:sravanpuli2002@gmail.com"
              >
                <MdOutlineMail />
              </a>
            </span>
            <span
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("sravanpuli2002@gmail.com");
                toast({
                  title: "email copied",
                });
              }}
            >
              <FaRegCopy />
            </span>
          </p>
          <p className="sm:text-3xl text-2xl font-bold">
            come, let&apos;s go for a coffee!! ☕ 🧋
          </p>
        </div>
      </section>
      <section className="flex flex-wrap items-center justify-center gap-8 py-10 text-black">
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
