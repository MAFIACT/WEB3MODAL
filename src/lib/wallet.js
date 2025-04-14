'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { EthereumClient } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

export const projectId = 'TON_PROJECT_ID' // remplace avec ton vrai ID

const chains = [base]
const wagmiConfig = defaultWagmiConfig({
  projectId,
  chains,
  metadata: {
    name: 'Web3 Dashboard',
    description: 'Wallet, PNL, Portfolio on Base',
    url: 'https://my-web3-dashboard1.vercel.app',
    icons: ['https://vercel.com/_next/static/media/vercel.3679f29b.svg']
  }
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)

createWeb3Modal({ wagmiConfig, projectId, chains })

export { wagmiConfig, ethereumClient }
