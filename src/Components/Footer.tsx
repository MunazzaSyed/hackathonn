"use client";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaCcPaypal } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { TiSocialFacebookCircular } from "react-icons/ti";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiLinkedinBoxLine, RiVisaLine } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";

const Footer = () => {
  return (
    <main className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <hr className="border-gray-500" />

      {/* Main Content Section */}
      <div className="mt-8 flex flex-wrap justify-between gap-8">
        {/* Company Info */}
        <div className="flex-1 min-w-[250px]">
          <Link
            href="/"
            className="font-bold flex items-center gap-2 text-lg md:text-xl"
          >
            <Image src="/Logo Icon.png" alt="mainLogo" height={35} width={35} />
            <span className="text-xl uppercase">Comforty</span>
          </Link>
          <p className="mt-4 text-gray-700">
            Vivamus tristique odio sit amet velit semper.
          </p>
          <div className="mt-4 flex gap-4">
            <FaInstagram size={32} />
            <TiSocialFacebookCircular size={32} />
            <FaTwitter size={32} />
            <AiOutlineYoutube size={32} />
            <RiLinkedinBoxLine size={32} />
          </div>
        </div>

        {/* Category Section */}
        <div className="flex-1 min-w-[250px]">
          <p className="text-gray-500 font-semibold">Category</p>
          {["Sofa", "Arm Chair", "Wing Chair", "Desk Chair"].map((item) => (
            <p key={item} className="mt-2 text-blue-500">
              {item}
            </p>
          ))}
        </div>

        {/* Support Section */}
        <div className="flex-1 min-w-[250px]">
          <p className="text-gray-500 font-semibold">Support</p>
          {["Help & Support", "Terms & Conditions", "Privacy Policy"].map(
            (link) => (
              <p key={link} className="mt-2 text-blue-500">
                <Link href="/">{link}</Link>
              </p>
            )
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-8 flex flex-col gap-4">
        <h2 className="text-gray-500 font-semibold">Newsletter</h2>
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Enter your Email"
            className="flex-1 p-4 rounded-lg border border-gray-300 bg-gray-50"
          />
          <button className="px-6 py-4 bg-blue-500 text-white rounded-lg font-bold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="border-gray-500 mt-8" />
      <div className="mt-6 flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © 2021 - Comforty - Designed & Developed by Munazza Abdul.Rehman
        </p>
        <div className="flex gap-4">
          <FaCcPaypal size={32} />
          <SiAmericanexpress size={32} />
          <RiVisaLine size={32} />
        </div>
      </div>
    </main>
  );
};

export default Footer;
