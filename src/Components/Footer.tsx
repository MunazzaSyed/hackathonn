import React from "react";

import { FaFacebook } from "react-icons/fa6";

import { FaTwitter } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

import { RiShutDownLine } from "react-icons/ri";

import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-[500px] py-32">
      <div className="">
        vivamuss tristique odio sit amet velit semper,
        <br></br>
        eu posuere turpis interdum
        <br></br>
        Cras egestas pururs
        <br></br>
        <div className="flex"> 
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <RiShutDownLine />
          <FaYoutube />
        </div>
      </div>

      <div className="max-w-screen-2xl px-96">
        <h4>CATEGORY</h4>

        <ul>
          <li>Sofa</li>

          <li>Armchair</li>

          <li>Wring Chair</li>

          <li>
            <span className="text-teal-600">Desk Chair</span>
          </li>

          <li>wooden chair</li>

          <li>Park Bench</li>
        </ul>

        <ul>
          <h4>SUPPORT</h4>

          <li>Help & Support</li>

          <li>Tearms & conditions</li>

          <li>privacy policy</li>

          <li>Help</li>
        </ul>

        <div className="para">
          <hr />

          <p>
            2021 Blogy. Design & Develop by{" "}
            <span className="font-bold text-2xl">Zakirsoft</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
