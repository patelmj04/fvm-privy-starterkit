"use client"
import Image from "next/image";
import Link from 'next/link'
import { usePrivy } from "@privy-io/react-auth";


const Header = () => {

    // Privy hooks
    const {
      ready,
      authenticated, logout
    } = usePrivy();

  return (
    <div className="fixed top-0 w-full bg-blue-600 h-20 flex items-center z-10">
      <div className="relative left-4">
        <Link href="/">
          <Image
            className="cursor-pointer hidden lg:block"
            src="/assets/logos/fil-b-logo.png"
            width={250}
            height={250}
            alt="FIL-B Logo"
          />
          <div
            className="lg:hidden text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-full shadow-[5px_5px_black] text-center transform transition w-full px-2 py-2"
          >
            <Image
              className="cursor-pointer "
              src="/assets/logos/fil-b-mini-logo.png"
              width={30}
              height={30}
              alt="FIL-B Logo"
            />
          </div>
        </Link>
      </div>
      {ready && authenticated && <div className="fixed right-6">
        <div className="flex flex-row gap-8 items-center">
          <Link href="/defi">
            <div className="text-white font-bold">
              DeFi
            </div>
          </Link>
          <Link href="/sign">
            <div className="text-white font-bold">
              Sign
            </div>
          </Link>
          <Link href="/dummy">
            <div className="text-white font-bold">
              Dummy
            </div>
          </Link>
          <div className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-[20px] shadow-[5px_5px_black] text-center transform transition w-full lg:px-2 lg:py-2 lg:text-xl px-2 py-2">

            <button type="button" onClick={logout}>
              <Image
                className="cursor-pointer "
                src="/assets/icons/fvm.png"
                width={30}
                height={30}
                alt="FVM Logo"
              />
            </button>
          </div>
        </div>
      </div>
      }
    </div >
  );
};

export default Header;
