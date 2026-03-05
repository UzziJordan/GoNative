import React from "react";
import bitcoin from "../../Images/bitcoin.svg";

const NBTCSection = () => {
  return (
    <div className="mt-20 bg-linear-to-r relative from-[#08132b] via-[#030c24] to-[#08132b] w-[95vw] pb-20 text-amber-50">

        <div className='p-10 px-10 text-[18px]'>
            <h1 className='text-3xl'>Why nBTC?</h1>
            <p>nBTC is a non-custodial, trust-minimized representation of Bitcoin, maintaining a 1:1 backing with real BTC. It brings Bitcoin’s liquidity into DeFi while preserving user control and aligning with Bitcoin’s core principles. Designed with security, decentralization, and permissionless verification at its core, nBTC enables users to transact, stake, and engage in DeFi with Bitcoin, all without compromising sovereignty.</p>
            <h2>Why Protocols Choose nBTC</h2>
            <p>nBTC brings the deepest asset in crypto - Bitcoin - into DeFi with security developers can trust.</p>
            <p>Built on IKA's zero-trust MPC architecture, nBTC delivers Bitcoin to any Sui app without custodians, bridges, or attack-surface bloat.</p>
            <p>For builders, that means:</p>
            <p>Instant access to Bitcoin’s $2T+ liquidity</p>
            <p>Plug nBTC into lending, LP, perps, options, stablecoins - your TVL and volumes scale instantly.</p>
            <p>Production-grade security</p>
            <p>Backed by battle-tested 2PC–MPC, nBTC removes the bridge-risk and multisig nightmares that killed BTC bridges in the past.</p>
            <p>Composable by design</p>
            <p>nBTC is native to Sui: move, borrow, LP, mint, stake, leverage - everything works out-of-the-box, no wrapping games.</p>
            <p>Higher yield for your users</p>
            <p>Bitcoin holders finally get real DeFi yield, and your protocol becomes the gateway for it.</p>
            <p>Bring Bitcoin into your protocol. Attract more users. Unlock deeper liquidity.</p>
            <p>Build with nBTC.</p>

        </div>

      <div className="absolute right-5 bottom-2">
        <img className="size-30" src={bitcoin} alt="" />
      </div>

    </div>
  );
};

export default NBTCSection;