"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="relative">
      {/* <div className="sticky top-0 bg-white">
        <Header />
      </div> */}
      <div className="fixed top-0 left-0 w-full bg-white-A700 bg-white text-black flex justify-between items-center px-28 py-6">
        <p className="text-4xl text-[#31BDA3] font-bold">
          BMW Group (internship)
        </p>
        <Cross2Icon
          color="white"
          onClick={() => router.push("/projects")}
          className="h-10 w-10 bg-[#31BDA3] rounded-full p-1 cursor-pointer"
        />
      </div>
      <div className="mx-28 flex justify-center items-center mt-28">
        <Image
          src="/bmw.jpg"
          alt="medvarsity"
          width={1250}
          height={2000}
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
