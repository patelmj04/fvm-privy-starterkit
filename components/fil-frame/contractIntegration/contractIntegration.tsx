"use client";

import Card from "../card/card";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./contractDetails";
import { useReadContract, useWriteContract } from "wagmi";

interface ContractProps {
  account: `0x${string}`;
  balance: string | undefined;
}

const ContractIntegration: React.FC<ContractProps> = ({ account, balance }) => {
  const { data } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "balanceOf",
    args: [account],
  });

  const tokenName = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "name",
  });

  const decimals = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "decimals",
  });

  const { writeContract } = useWriteContract()

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        <Card
          heading="TOKEN BALANCE"
          cta={`${(
            Number(data) /
            10 ** Number(decimals.data)
          )?.toString()} ${tokenName.data?.toString()}`}
        />
        <Card heading="MINT TOKEN"  onClick_={() => 
              writeContract({ 
                abi: CONTRACT_ABI,
                address: CONTRACT_ADDRESS,
                functionName: 'mint',
                args: [
                  account,
                  BigInt(100000000000000000000)
                ],
             })
        } cta={`Mint 100 Tokens`} />
      </div>
    </>
  );
};

export default ContractIntegration;
