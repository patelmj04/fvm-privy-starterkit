"use client";

import Card from "../card/card";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./contractDetails";
import { useReadContract } from "wagmi";

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

  return (
    <>
      <div className="flex flex-row justify-center gap-8">
        <Card
          heading="TOKEN BALANCE"
          cta={`${(
            Number(data) /
            10 ** Number(decimals.data)
          )?.toString()} ${tokenName.data?.toString()}`}
        />
        <Card heading="MINT TOKEN" cta={`Mint 100 Tokens`} />
      </div>
    </>
  );
};

export default ContractIntegration;
