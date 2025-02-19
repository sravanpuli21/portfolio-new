"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 bg-white">
        <Header />
      </div>
      {/* <div className="fixed top-0 left-0 w-full bg-white-A700 bg-white text-black flex justify-between items-center px-28 py-6">
        <p className="text-4xl font-bold">Medvarsity</p>
        <Cross2Icon
          color="white"
          onClick={() => router.push("/projects")}
          className="h-10 w-10 bg-teal-300 rounded-full p-1 "
        />
      </div> */}
      <div className="mx-28 flex justify-center items-center mt-28">
        <Image
          src="/farmfood-case.jpg"
          alt="medvarsity"
          width={500}
          height={500}
          className="w-full h-auto rounded-2xl"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
