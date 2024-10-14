"use client";

import { useAccount, useBalance } from "wagmi";
import Card from "../card/card";
import { parseEther } from "viem";
import type { Config } from "wagmi";
import { useSendTransaction } from "wagmi";
import type { SendTransactionVariables } from "wagmi/query";

const AccountDetails: React.FC = () => {
  const { address } = useAccount();
  const { data: addressData, isError, isLoading } = useBalance({ address });
  const transactionRequest: SendTransactionVariables<Config, number> = {
    to: "0xF2A919977c6dE88dd8ed90feAADFcC5d65D66038" as `0x${string}`,
    value: parseEther("0.001"),
    type: "eip1559",
  };
  const {
    data: txData,
    isPending,
    isSuccess,
    sendTransaction,
  } = useSendTransaction();
  return (
    <>
        <div className="flex flex-col justify-center gap-8 lg:flex-row">
          <Card
            heading="FIL BALANCE"
            cta={`${addressData?.formatted.slice(0, 10)} ${
              addressData?.symbol
            }`}
          />
          <Card
            heading="SEND FIL"
            cta="SEND 0.001 FIL"
            onClick_={() => sendTransaction(transactionRequest)}
            disabled={!sendTransaction}
          />
        </div>
    </>
  );
};

export default AccountDetails;
