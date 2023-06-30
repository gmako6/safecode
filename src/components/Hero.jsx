import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero md:py-24 py-10 px-5">
        <div className="hero-content text-center">
          <div className="flex flex-col">
            <div className="md:mx-40">
              <h1 className="md:text-6xl text-3xl text-slate-100 tracking-wide font-bold">
                Cutting Edge Web3 Solutions
                <br />
                That Enhance Humanity.
              </h1>
              <p className="py-6 text-2xl text-slate-300">
                Blockchain - AI/ML - IoT - AR/VR
              </p>
              <div className="flex flex-wrap justify-center items-center space-x-3">
                <button className="btn btn-primary rounded-full space-1 mt-1">
                  CONTACT US
                </button>
                <Link
                  to={"/greengpt"}
                  className="btn btn-primary rounded-full space-1 mt-1"
                >
                  SAFE AI
                </Link>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/safecode"
                  className="btn btn-primary rounded-full space-1 mt-1"
                >
                  <FaTelegram className="" size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/safecode"
                  className="btn btn-primary rounded-full space-1 mt-1"
                >
                  <FaTwitter className="" size={20} />
                </a>
              </div>
            </div>

            <div className="md:mx-40 mt-10">
              <p className="py-6 text-2xl text-slate-300 ">Trusted By</p>
              <div className="">---</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
