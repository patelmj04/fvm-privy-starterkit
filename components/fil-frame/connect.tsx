"use client";
import { usePrivy } from "@privy-io/react-auth";

export default function Connect() {
  // Privy hooks
  const { ready, authenticated, login } = usePrivy();

  return (
    <div
      className="relative w-full m-auto flex justify-center text-center flex-col items-center z-1 text-white"
      style={{ maxWidth: "1200px" }}
    >
      <p className="text-xl mb-5">Hey, We are FIL Builders</p>
      <h1 className="inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
        Cross the <span className="text-fun-pink">Filecoin</span> chasm with{" "}
        <span className="text-fun-pink">us.</span>
      </h1>
      <a className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-80 lg:px-4 lg:py-4 lg:text-4xl px-4 py-2 cursor-pointer">
        <button type="button" onClick={login}>Connect Wallet</button>
      </a>
    </div>
  );
}
