import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Meet
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Decentralized Video Conferencing
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Private, secure video meetings with blockchain-verified participants.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Encrypted Calls</h2>
          <p className="text-lg text-gray-400">All video and audio is encrypted end-to-end. Your conversations stay private.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">No Central Servers</h2>
          <p className="text-lg text-gray-400">Peer-to-peer connections ensure your data never touches a central server.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Token-Gated Access</h2>
          <p className="text-lg text-gray-400">Create exclusive meetings accessible only to token holders.</p>
        </div>
      </section>

    </main>
  )
}
