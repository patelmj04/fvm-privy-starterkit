"use client";

import { shorten } from "../lib/utils";
import { useAccount, useSignMessage, useSignTypedData } from "wagmi";
import { usePrivy } from "@privy-io/react-auth";

const SignData = () => {
  const { user } = usePrivy();
  const { address, chain } = useAccount();
  const { data, isPending, isSuccess, isError, signMessage } = useSignMessage({
    mutation: {
      onSuccess: () => {
        console.log("Sign Message Success");
      },
    },
  });

  // Sign Typed Data Var Init
  const { signTypedData } = useSignTypedData();

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
      <h2 className="mt-6 text-2xl">useSignMessage</h2>
      <button
        disabled={isPending}
        onClick={() => {
          signMessage({
            message: `Signing with WAGMI\nWAGMI address: ${shorten(
              address
            )}\nPrivy address: ${shorten(user?.wallet?.address)}`,
          });
        }}
      >
        Sign Message
      </button>
      {isSuccess && <div>Signature: {shorten(data)}</div>}
      {isError && <div>Error signing message</div>}

      <h2 className="mt-6 text-2xl">useSignTypedMessage</h2>
      <button
        disabled={isPending}
        onClick={() => {
          signTypedData({
            primaryType: "Mail",
            domain,
            types,
            message,
          });
        }}
      >
        Sign typed data
      </button>
      {isSuccess && <div>Signature: {shorten(data)}</div>}
      {isError && <div>Error signing message</div>}
    </>
  );
};

export default SignData;
