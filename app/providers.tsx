'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {defineChain, http} from 'viem';
import {filecoin, filecoinCalibration} from 'viem/chains';
import type {PrivyClientConfig} from '@privy-io/react-auth';
import {PrivyProvider} from '@privy-io/react-auth';
import {WagmiProvider, createConfig} from '@privy-io/wagmi';

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [filecoin, filecoinCalibration],
  transports: {
    [filecoin.id]: http(),
    [filecoinCalibration.id]: http(),
  },
});

export const myCustomChain = defineChain({
  id: 314159,
  name: "Filecoin Calibration",
  nativeCurrency:{
    decimals: 18,
    name: 'FIL',
    symbol: 'FIL'
  },
  rpcUrls: {
    default: {
      http: ['https://api.calibration.node.glif.io/rpc/v1'],
      webSocket: ['wss://filecoin-calibration.drpc.org']
    }
  },
  blockExplorers: {
    default: {name: 'FilFox', url: 'https://calibration.filfox.info/en'}
  }

})

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    requireUserPasswordOnCreate: true,
    noPromptOnSignature: false,
  },
  defaultChain: myCustomChain,
  loginMethods: ['wallet', 'email', 'sms'],
};

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      apiUrl={process.env.NEXT_PUBLIC_PRIVY_AUTH_URL as string}
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={privyConfig}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
 