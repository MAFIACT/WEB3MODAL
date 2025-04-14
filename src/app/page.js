'use client'

import { useWeb3ModalAccount, useWeb3Modal } from '../lib/wallet'

export default function Home() {
  const { address, isConnected } = useWeb3ModalAccount()
  const { open } = useWeb3Modal()

  const pnl = 5423.76
  const tokens = [
    { symbol: 'SKINME', amount: 420, price: 0.0002088 },
    { symbol: 'MOT', amount: 100000, price: 0.047666 },
    { symbol: 'DOGI', amount: 50000, price: 0.0007360 },
    { symbol: 'BRETT', amount: 3500, price: 0.03526 },
    { symbol: 'AI', amount: 100, price: 2.8 }
  ]

  return (
    <main className="min-h-screen p-8 text-white bg-black">
      <header className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">Web3 Dashboard</h1>
        {!isConnected ? (
          <button onClick={open} className="bg-white text-black px-4 py-2 rounded">Connect Wallet</button>
        ) : (
          <p className="text-green-400">Connected: {address}</p>
        )}
      </header>

      {isConnected && (
        <>
          <section className="mb-6">
            <h2 className="text-xl mb-2">💸 PNL</h2>
            <p className="text-3xl text-green-400 font-bold">${pnl.toLocaleString()}</p>
          </section>

          <section>
            <h2 className="text-xl mb-2">📊 Portfolio</h2>
            <ul className="space-y-2">
              {tokens.map((t, i) => (
                <li key={i} className="flex justify-between border-b border-gray-700 pb-1">
                  <span>{t.symbol}</span>
                  <span className="text-gray-400">{t.amount} × ${t.price.toFixed(6)}</span>
                  <span className="text-green-400 font-semibold">
                    ${(t.amount * t.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  )
}