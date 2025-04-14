'use client'

import './globals.css'
import { Web3Modal, wagmiConfig } from '../lib/wallet'
import { WagmiConfig } from 'wagmi'

export const metadata = {
  title: 'Web3 Dashboard',
  description: 'PNL & Wallet on Base chain'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WagmiConfig config={wagmiConfig}>
          {children}
          <Web3Modal />
        </WagmiConfig>
      </body>
    </html>
  )
}
