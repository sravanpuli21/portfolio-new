"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { projects } from "@/config/projects";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiBuilding2Fill, RiPencilRuler2Fill } from "react-icons/ri";

function Page() {
  const router = useRouter();
  return (
    <div className="w-full h-full bg-white flex flex-col items-center">
      <div className="w-full bg-[#E3DFDA] text-black py-4 sm:px-40 px-5 flex flex-row items-center gap-2">
        <p className="text-sm bg-[#31BDA3] py-1 px-2 rounded-full text-white font-light">
          IMP
        </p>
        <p className="text-sm">
          I have worked for 20+ clients across multiple sectors and domains
          ranging from Fintech, Healthcare, Commerce and many more. Those
          projects can be displayed upon request.
        </p>
      </div>
      <div className="w-full">
        <Header />
      </div>
      <section className="w-full h-full flex flex-col items-center pt-10">
        <p className="text-3xl font-bold mb-6">Projects</p>
        <div className="max-w-7xl w-full">
          {projects.map((item) => (
            <div
              key={item.id}
              className="flex sm:flex-row flex-col items-center justify-center gap-8 sm:w-full sm:h-[564px] w-full h-auto sm:px-8 px-5 py-14"
            >
              <div className="">
                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={500}
                  className="w-full h-full max-w-[400px] max-h-[460px] object-contain"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-4 w-full h-full sm:py-10 py-2">
                <p className="text-sm font-bold text-[#31BDA3]">{item.id}</p>
                <div className="flex flex-wrap gap-2 items-end">
                  <h2 className="text-5xl font-bold pt-4">{item.title}</h2>
                  {item.isintern && (
                    <span className="text-2xl">(internship)</span>
                  )}
                </div>
                {item.subheadline && (
                  <p className="text-2xl">{item.subheadline}</p>
                )}
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
      </section>
      <section className="my-16 sm:w-[940px] w-full sm:h-[400px] h-auto border border-[#191919]/20 flex flex-col items-center justify-center gap-4 rounded-2xl sm:px-40 px-5 sm:py-32 py-8">
        <p className="text-lg ">HAD A PROJECT IN MIND</p>
        <h2 className="text-6xl font-bold text-[#31BDA3]">Let&apos;s Talk!</h2>
        <p className="text-center pt-8">
          About growing a company, starting a digital product, stuck somewhere
          in the process or something entirely new, let&apos;s explore it
          together!
        </p>
        <Button
          className="rounded-full py-6 px-8 border-[#31BDA3] text-[#31BDA3] hover:border-[#E3DFDA] hover:bg-[#E3DFDA]"
          variant="outline"
        >
          Contact Me
        </Button>
      </section>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
