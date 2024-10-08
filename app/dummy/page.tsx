"use client"

import Image from "next/image";
import Footer from "@components/footer";
import Header from "@components/header";

export default function Dummy() {
  return (
    <>
    <Header/>
      <div className="w-full min-h-screen bg-blue-600 flex justify-center items-center p-2">
        <div className="flex flex-col gap-8 items-center">
          <Image
            className="cursor-pointer "
            src="/assets/logos/fil-b-mini-logo.png"
            width={200}
            height={200}
            alt="FIL-B Logo"
          />
          <div className="text-2xl text-white p-8 text-center">
            This is a sample page. Feel free to customize !
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )

}
