import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link'
export default function Home() {

  return (
    <div className="w-full min-h-screen bg-blue-600">
      <Header/>
      <div >
        <div
          className="relative w-full pt-48 pb-40 m-auto flex justify-center text-center flex-col items-center z-1 text-white"
          style={{ maxWidth: "1200px" }}
        >
          <p className="text-xl mb-5">Hey, We are FIL Builders</p>
          <h1 className="inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
            Cross the <span className="text-fun-pink">Filecoin</span> chasm{" "}
            with <span className="text-fun-pink">us.</span>
          </h1>
          <Link href="/login">
            <div className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-[20px] shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-2 lg:text-xl px-8 py-2">
              Launch dApp
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
