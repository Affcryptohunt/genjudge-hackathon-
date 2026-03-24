'use client';

import { useState } from 'react';

export default function GenJudge() {
  const contract = "0x9016448CB2f181b44C917F3ced443e0bc9Eb9043";
  const disputeId = "demo1";

  const createCmd = `genlayer write ${contract} create_dispute --args "${disputeId}" "Elon vs Zuck cage fight" "Who actually won the fight?" "https://x.com/elonmusk/status/1880000000000000000" "https://x.com/zuck/status/1880000000000000001"`;
  const resolveCmd = `genlayer write ${contract} resolve_dispute --args "${disputeId}"`;
  const viewCmd = `genlayer call ${contract} get_dispute --args "${disputeId}"`;

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("✅ Copied! Paste into terminal now.");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-2">🧑‍⚖️ GenJudge</h1>
        <p className="text-xl text-gray-400 mb-10">AI-Powered Dispute Resolver • Bradbury Testnet</p>

        <div className="bg-zinc-900 rounded-3xl p-8 mb-8">
          <h2 className="text-2xl mb-6">Create Dispute</h2>
          <div className="bg-black p-5 rounded-2xl font-mono text-sm mb-6 break-all text-left">{createCmd}</div>
          <button onClick={() => copy(createCmd)} className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-gray-200">Copy Create Command</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-xl mb-4">Resolve Dispute (AI Judge)</h3>
            <div className="bg-black p-5 rounded-2xl font-mono text-sm mb-6 break-all text-left">{resolveCmd}</div>
            <button onClick={() => copy(resolveCmd)} className="w-full bg-purple-600 py-4 rounded-2xl font-bold text-lg hover:bg-purple-700">Copy Resolve Command</button>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-xl mb-4">View Verdict</h3>
            <div className="bg-black p-5 rounded-2xl font-mono text-sm mb-6 break-all text-left">{viewCmd}</div>
            <button onClick={() => copy(viewCmd)} className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-gray-200">Copy View Command</button>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          Contract: <span className="font-mono text-purple-400 break-all">{contract}</span><br />
          Your dispute "demo1" is already created + resolved on the real testnet!
        </div>
      </div>
    </div>
  );
}