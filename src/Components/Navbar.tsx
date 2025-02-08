<<<<<<< HEAD
import React from 'react'

function Navbar() {
  return (
      <div className='flex justify-center gap-7'>
      <div className="Home">Home</div>
      <div className="shop">Shop</div>
      <div className="product">Products</div>
      <div className="pages">Pages</div>
      <div className="about">About</div>

     </div>
  )
}

export default Navbar
=======
// // import React from "react";
// import Link from "next/link";

// function Navbar() {
//   return (
//     <div className="flex flex-wrap justify-between items-center px-8 py-4">
//       {/* Left Side Buttons */}
//       <div className="flex flex-wrap gap-7 md:gap-10">
//         <Link href="/" className="px-3 py-2 rounded-lg">
//           Home
//         </Link>
//         <Link href="/cart" className="px-3 py-2 rounded-lg">
//           Shop
//         </Link>
//         <Link href="/Page" className="px-3 py-2 rounded-lg">
//           Products
//         </Link>
//         <Link href="/product/id" className="px-3 py-2 rounded-lg">
//           Pages
//         </Link>
//         <Link href="/About" className="px-3 py-2 rounded-lg">
//           About
//         </Link>
//       </div>

//       {/* Right Side Contact Button */}
//       <div className="ml-auto flex items-center gap-4">
//         <Link href="/Contact" className="px-3 py-2 hidden md:block">
//           Contact
//         </Link>
//         <span className="hidden md:block">(808) 555-0111</span>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden flex items-center gap-4">
//         {/* Here you can use a hamburger menu if needed */}
//         <button className="text-xl text-gray-800">☰</button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex justify-between items-center px-8 py-4">
      {/* Left Side Buttons */}
      <div className="flex gap-7 items-center">
        <Link href="/" className="px-3 py-2 rounded-lg">
          Home
        </Link>
        <Link href="/cart" className="px-3 py-2 rounded-lg">
          Shop
        </Link>
        <Link href="/Page" className="px-3 py-2 rounded-lg">
          Products
        </Link>
        <Link href="/product/id" className="px-3 py-2 rounded-lg">
          Pages
        </Link>
        <Link href="/About" className="px-3 py-2 rounded-lg">
          About
        </Link>
      </div>

      {/* Right Side Contact Button */}
      <div className="ml-auto flex items-center gap-4">
        <Link href="/Contact" className="px-3 py-2">
          Contact
        </Link>
        <span className="hidden sm:block">(808) 555-0111</span>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-xl">
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4">
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="px-3 py-2">
              Home
            </Link>
            <Link href="/cart" className="px-3 py-2">
              Shop
            </Link>
            <Link href="/Page" className="px-3 py-2">
              Products
            </Link>
            <Link href="/product/id" className="px-3 py-2">
              Pages
            </Link>
            <Link href="/About" className="px-3 py-2">
              About
            </Link>
            <Link href="/Contact" className="px-3 py-2">
              Contact
            </Link>
            <span>(808) 555-0111</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
>>>>>>> ac0e253 (Updated files)
