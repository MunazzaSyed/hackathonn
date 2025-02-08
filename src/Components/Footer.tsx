<<<<<<< HEAD
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
=======
// "use client";
// import Link from "next/link";
// import React from "react";
// import { FaInstagram, FaTwitter, FaCcPaypal } from "react-icons/fa";
// import { IoMailSharp } from "react-icons/io5";
// import { TiSocialFacebookCircular } from "react-icons/ti";
// import Image from "next/image";
// import { AiOutlineYoutube } from "react-icons/ai";
// import { RiLinkedinBoxLine, RiVisaLine } from "react-icons/ri";
// import { SiAmericanexpress } from "react-icons/si";

// const Footer = () => {
//   return (
//     <main
//       style={{
//         maxWidth: "1536px",
//         margin: "0 auto",
//         height: "auto",
//         padding: "1rem",
//       }}
//     >
//       <hr style={{ borderColor: "#4b5563" }} />

//       {/* Main Content Section */}
//       <div
//         style={{
//           marginTop: "40px",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-between",
//           padding: "2rem",
//           gap: "2rem",
//         }}
//       >
//         {/* Company Info */}
//         <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
//           <Link
//             href="/"
//             style={{
//               fontWeight: "bold",
//               display: "flex",
//               alignItems: "center",
//               gap: "0.5rem",
//             }}
//           >
//             <Image src="/Logo Icon.png" alt="mainLogo" height={35} width={35} />
//             <span style={{ fontSize: "1.25rem", textTransform: "uppercase" }}>
//               Conforty
//             </span>
//           </Link>
//           <p style={{ marginTop: "1.5rem", color: "#272343" }}>
//             Vivamus tristique odio sit amet velit semper.
//           </p>
//           <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
//             <FaInstagram />
//             <TiSocialFacebookCircular />
//             <FaTwitter />
//             <AiOutlineYoutube />
//             <RiLinkedinBoxLine />
//           </div>
//         </div>

//         {/* Category Section */}
//         <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
//           <p style={{ color: "#babbbd", fontWeight: "600" }}>Category</p>
//           {["Sofa", "Arm Chair", "Wing Chair", "Desk Chair"].map((item) => (
//             <p key={item} style={{ marginTop: "0.5rem", color: "#06b6d4" }}>
//               {item}
//             </p>
//           ))}
//         </div>

//         {/* Support Section */}
//         <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
//           <p style={{ color: "#babbbd", fontWeight: "600" }}>Support</p>
//           {["Help & Support", "Terms & Conditions", "Privacy Policy"].map(
//             (link) => (
//               <p key={link} style={{ marginTop: "0.5rem", color: "#06b6d4" }}>
//                 <Link href="/">{link}</Link>
//               </p>
//             )
//           )}
//         </div>
//       </div>

//       {/* Newsletter Section */}
//       <div
//         style={{
//           marginTop: "2rem",
//           display: "flex",
//           flexDirection: "column",
//           gap: "1rem",
//         }}
//       >
//         <h2 style={{ color: "#babbbd", fontWeight: "600" }}>Newsletter</h2>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
//           <input
//             type="text"
//             placeholder="Enter your Email"
//             style={{
//               padding: "1rem",
//               flex: "1 1 auto",
//               borderRadius: "8px",
//               border: "none",
//               backgroundColor: "#f4f5f5",
//             }}
//           />
//           <button
//             style={{
//               padding: "1rem",
//               borderRadius: "8px",
//               border: "none",
//               backgroundColor: "#06b6d4",
//               color: "white",
//               fontWeight: "bold",
//             }}
//           >
//             Subscribe
//           </button>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//       <hr style={{ borderColor: "#4b5563", marginTop: "2rem" }} />
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-between",
//           padding: "1rem",
//           gap: "1rem",
//         }}
//       >
//         <p>© 2021 - Blogy - Designed & Developed by Zakirsoft</p>
//         <div style={{ display: "flex", gap: "1rem" }}>
//           <FaCcPaypal size={32} />
//           <SiAmericanexpress size={32} />
//           <RiVisaLine size={32} />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Footer;

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
>>>>>>> ac0e253 (Updated files)
