"use client";

import { shorten } from "../lib/utils";
import { useAccount, useSignMessage, useSignTypedData } from "wagmi";
import { usePrivy } from "@privy-io/react-auth";
import Card from "../card/card";

const SignData = () => {
  const { user } = usePrivy();
  const { address, chain } = useAccount();
  const {
    data: signMessageData,
    isPending: signMessageIsPending,
    isSuccess,
    signMessage,
  } = useSignMessage({
    mutation: {
      onSuccess: () => {
        console.log("Sign Message Success");
      },
    },
  });

  // Sign Typed Data Var Init
  const {
    data: signTypedMessageData,
    isPending: signTypedMessageIsPending,
    signTypedData,
  } = useSignTypedData();

  // All properties on a domain are optional
  const domain = {
    name: "Ether Mail",
    version: "1",
    chainId: chain?.id,
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
  } as const;

  // The named list of all type definitions
  const types = {
    Person: [
      { name: "name", type: "string" },
      { name: "wallet", type: "address" },
    ],
    Mail: [
      { name: "from", type: "Person" },
      { name: "to", type: "Person" },
      { name: "contents", type: "string" },
    ],
  } as const;

  const message = {
    from: {
      name: "Cow",
      wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
    },
    to: {
      name: "Bob",
      wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
    },
    contents: "Hello, Bob!",
  } as const;

  return (
    <>
      <div className="flex flex-col justify-center gap-8">
        <Card
          heading="useSignMessage"
          cta={
            isSuccess
              ? `Signature: ${shorten(signMessageData)}`
              : `Sign Message`
          }
          onClick_={() => {
            signMessage({
              message: `Signing with WAGMI\nWAGMI address: ${shorten(
                address
              )}\nPrivy address: ${shorten(user?.wallet?.address)}`,
            });
          }}
          disabled={signMessageIsPending}
        />

        <Card
          heading="useSignTypedMessage"
          cta={
            isSuccess
              ? `Signature: ${shorten(signTypedMessageData)}`
              : `Sign typed data`
          }
          onClick_={() => {
            signTypedData({
              primaryType: "Mail",
              domain,
              types,
              message,
            });
          }}
          disabled={signTypedMessageIsPending}
        />
      </div>
    </>
  );
};

export default SignData;
