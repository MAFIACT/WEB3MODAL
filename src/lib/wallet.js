'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const projectId = 'YOUR_PROJECT_ID' // à remplacer par ton vrai ID Web3Modal

const metadata = {
  name: 'Web3 Dashboard',
  description: 'Track your PNL & Portfolio',
  url: 'https://yourdomain.com',
  icons: ['https://yourdomain.com/icon.png']
}

export const { Web3Modal, useWeb3Modal, useWeb3ModalAccount } = createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [
    {
      chainId: 8453,
      name: 'Base',
      currency: 'ETH',
      rpcUrl: 'https://mainnet.base.org',
      explorerUrl: 'https://basescan.org'
    }
  ],
  projectId
})