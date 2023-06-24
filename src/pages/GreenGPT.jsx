import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GreenGPTAI } from "../components";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const GreenGPT = () => {
  const address = useAddress();
  return (
    <div className="bg-slate-100 py-10 md:py-24">
      <div className="container mx-auto px-5 md:px-24">
        <div className="md:mx-40 mb-5">
          <h1 className="md:text-7xl text-3xl text-center tracking-wide">
            Unleash the power of
            <br />
            <span className="font-bold space-x-2"> AI </span>
            in<span className="font-bold space-x-2"> Blockchain. </span>
          </h1>
          <p className="py-6">
            Contract deployed & audited by
            <a
              href="https://www.chaingpt.org"
              className="text-primary font-bold"
            >
              ChainGPT AI
            </a>
            . By Combining AI and blockchain can enhance the security,
            scalability, and efficiency of decentralized systems. AI can help
            analyze and automate blockchain data, unlocking new possibilities
            for innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-3">
            <button className="btn btn-primary rounded-full space-1 mt-1">
              Buy $gGPT
            </button>
            <Link
              to={"/stake"}
              className="btn btn-primary rounded-full space-1 mt-1"
            >
              Stake
            </Link>
            <Link
              to={"/marketplace"}
              className="btn btn-primary rounded-full space-1 mt-1"
            >
              Marketplace
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/greengpt_ai"
              className="btn btn-primary rounded-full space-1 mt-1"
            >
              <FaTelegram className="" size={20} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/gGPT_ai"
              className="btn btn-primary rounded-full space-1 mt-1"
            >
              <FaTwitter className="" size={20} />
            </a>
          </div>
        </div>
        {address ? (
          <GreenGPTAI />
        ) : (
          <div className="flex flex-col">
            <ConnectWallet />
          </div>
        )}
      </div>
    </div>
  );
};

export default GreenGPT;
