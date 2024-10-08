"use client";
import Header from "@components/header";
import Footer from "@components/footer";
import { usePrivy } from "@privy-io/react-auth";
import Connect from "@components/fil-frame/connect";
import ContractIntegration from "@/components/fil-frame/contractIntegration/contractIntegration";
import AccountDetails from "@/components/fil-frame/accountDetails/showAccountDetails";
import { useAccount, useBalance } from "wagmi";

export default function Defi() {
  // Privy hooks
  const { ready } = usePrivy();

  // WAGMI hooks
  const { address, isConnected } = useAccount();

  const { data } = useBalance({
    address: address,
  });

  return (
    <div className="w-full min-h-screen bg-blue-600">
      <Header />
      <div className="flex flex-col justify-center items-center relative lg:flex-row gap-8 pt-48 pb-40">
        {ready && isConnected && address ? (
          <div className="flex flex-col gap-8">
            <div>
              {/* <ContractIntegration
                account={address}
                balance={data?.formatted}
              /> */}
            </div>
            <div>
              <AccountDetails />
            </div>
          </div>
        ) : (
          <>
            <Connect />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
