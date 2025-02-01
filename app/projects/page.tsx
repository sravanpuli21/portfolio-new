import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { projects } from "@/config/projects";
import Image from "next/image";
import { RiBuilding2Fill, RiPencilRuler2Fill } from "react-icons/ri";

function page() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center">
      <div className="w-full">
        <Header />
      </div>
      <section className="w-full h-full flex flex-col items-center pt-10">
        <p className="text-3xl font-bold mb-6">Projects</p>
        <div>
          {projects.map((item) => (
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
      </section>
      <section className="my-16 w-[940px] h-[400px] border border-[#191919]/20 flex flex-col items-center justify-center gap-4 rounded-2xl px-40 py-32">
        <p className="text-lg ">HAD A PROJECT IN MIND</p>
        <h2 className="text-6xl font-bold text-[#31BDA3]">Let&apos;s Talk!</h2>
        <p className="text-center pt-8">
          About growing a company, starting a digital product, stuck somewhere
          in the process or something entirely new, let&apos;s explore it
          together!
        </p>
        <Button
          className="rounded-full py-6 px-8 border-[#31BDA3] text-[#31BDA3]"
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

export default page;
