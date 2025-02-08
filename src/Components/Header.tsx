// // "use client";

// import React from "react";
// import { FaCheck } from "react-icons/fa6";
// import { useShoppingCart } from "use-shopping-cart";
// import Link from "next/link";
// import { BsCartDash } from "react-icons/bs";
// import { IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";

// function Header() {
//   const { cartCount } = useShoppingCart(); // ✅ Get the dynamic cart count

//   return (
//     <div className="parentdiv">
//       {/* Blue Section */}
//       <div className="operdiv bg-blue-950 text-white flex justify-between items-center p-2">
//         <div className="flex items-center gap-2">
//           <FaCheck />
//           <span>Free Shipping On All Orders Over $50</span>
//         </div>
//         <div className="flex gap-4 items-center text-sm">
//           <Link
//             href="/English"
//             className="px-3 py-2 rounded-lg flex gap-2 items-center"
//           >
//             Eng
//             <IoIosArrowDown />
//           </Link>
//           <Link href="/Faqs">Faqs</Link>
//           <Link href="/">Need Help</Link>
//         </div>
//       </div>

//       {/* White Section */}
//       <div className="bg-gray-100 text-black flex items-center justify-between p-2 md:px-6">
//         <div className="flex items-center gap-2">
//           <Image src="/Logo Icon.png" alt="maskgroup" width={40} height={40} />
//           <p className="font-extrabold text-lg md:text-2xl">Comforty</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <Link href="/cart" className="relative flex items-center gap-2">
//             <span className="text-xl">
//               <BsCartDash size={24} />
//             </span>
//             <span>Cart</span>
//             {cartCount && cartCount > 0 ? (
//               <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 absolute top-0 right-0 transform translate-x-2 -translate-y-2">
//                 {cartCount}
//               </span>
//             ) : null}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

function Header() {
  const { cartCount } = useShoppingCart(); // ✅ Get the dynamic cart count

  return (
    <div className="parentdiv">
      {/* Blue Section */}
      <div className="operdiv bg-blue-950 text-white flex justify-between items-center p-2 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <FaCheck />
          <span>Free Shipping On All Orders Over $50</span>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/English"
            className="px-3 py-2 rounded-lg flex gap-2 items-center"
          >
            Eng
            <IoIosArrowDown />
          </Link>
          <Link href="/Faqs">Faqs</Link>
          <Link href="/">Need Help</Link>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-gray-100 text-black flex items-center justify-between p-2 md:px-6 md:py-4">
        <div className="flex items-center gap-2">
          <Image src="/Logo Icon.png" alt="maskgroup" width={40} height={40} />
          <p className="font-extrabold text-lg md:text-2xl">Comforty</p>
        </div>

        {/* Mobile and Desktop Navigation */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/cart" className="relative flex items-center gap-2">
              <span className="text-xl">
                <BsCartDash size={24} />
              </span>
              <span>Cart</span>
              {cartCount && cartCount > 0 ? (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  {cartCount}
                </span>
              ) : null}
            </Link>
          </div>

          {/* Mobile Cart */}
          <div className="md:hidden flex items-center gap-2 relative">
            <Link href="/cart">
              <BsCartDash size={24} />
              {cartCount && cartCount > 0 ? (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  {cartCount}
                </span>
              ) : null}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;