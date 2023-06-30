import React from "react";
import { Link } from "react-router-dom";

const Metrics = () => {
  return (
    <div className="bg-slate-100 md:py-24 py-10">
      <div className="container mx-auto px-5 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 content-center gap-20">
          <div className="grid col-span-2 text-slate-900">
            <div className="">
              <h5 className="font-bold italic md:text-5xl text-2xl text-center md:text-start">
                Have an Idea in mind...?
              </h5>
              <p className="md:text-2xl md:mt-10 mt-5 text-justify md:text-start">
                If you have an idea that can be brought to life using blockchain
                technology, you’re not alone. We work hand in hand with
                companies to create long-lasting solutions that enhance your
                current organization through blockchain technology.
              </p>
              <div className="flex md:justify-start justify-center items-center space-x-3 md:mt-10 mt-5">
                <Link
                  to={"/stake"}
                  className="btn btn-primary rounded-full space-1"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="stats stats-horizontal lg:stats-vertical shadow">
              <div className="stat">
                <div className="stat-title">Project Impacts</div>
                <div className="stat-value h-10">46+</div>
                <div className="stat-desc">~ $600,000</div>
              </div>

              <div className="stat">
                <div className="stat-title">Lines of Code</div>
                <div className="stat-value h-10">18M+</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">Devs & Designers</div>
                <div className="stat-value h-10">18M+</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
