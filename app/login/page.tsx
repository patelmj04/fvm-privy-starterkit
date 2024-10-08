"use client";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

export default function Login() {
  
  const router = useRouter();

  const handleClick = () => {
    router.push("/defi"); // Replace with your target route
  };

  // Privy hooks
  const {
    ready,
    authenticated,
    login
  } = usePrivy();

  if (!ready) {
    return null;
  }

  return (
    <div className="flex flex-row fixed w-full">
      {/* LEFT SECTION */}
      <div className="w-3/5 h-screen bg-login-background hidden lg:block"></div>
      {/* RIGHT SECTION */}
      <div className="lg:w-2/5 h-screen bg-blue-600 flex justify-center items-center">
        <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-300 w-3/4">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="items-center w-full justify-center grid grid-cols-1 text-left">
              <div>
                <h2 className="text-black font-bold text-lg lg:text-3xl">
                  LOGIN WITH BLOCKCHAIN WALLET
                </h2>
                <p className="text-black tracking-tight xl:text-2xl mt-5"></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-between pb-8 px-6 sm:px-8 space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-4 lg:py-4 lg:text-4xl px-4 py-2 cursor-pointer">
                {ready && !authenticated && (
                  <>
                    <div className="flex items-center gap-4">
                      <button onClick={login} type="button">
                        Login with Privy
                      </button>
                    </div>
                  </>
                )}
                {ready && authenticated && (
                  <>
                    <div className="flex items-center gap-4">
                      <button onClick={handleClick} type="button">
                        Enter dApp
                      </button>
                    </div>
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
