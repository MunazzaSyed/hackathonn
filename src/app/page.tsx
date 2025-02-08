<<<<<<< HEAD
import React from 'react'
import Image from 'next/image';
import Logo from '@/Components/logo';
import Product from '@/Components/product';

function page() {
  return (
    <div>
      <div className="container-left max-w-screen-2xl px-6 py-44 absolute top-0 left-4">
        <i>welcome to chairy</i>
        <br />
        <br />
        <i className="font-extrabold ">best Furniture
          
        </i>
        <br></br>
        <i className="font-extrabold ">
        Collection for You
        </i>
        <br></br>
        <i className="font-extrabold ">
          {" "}
          interior
        </i>
        <br></br>
      </div>
      <div className="container-left flex justify-end rounded-lg">
        <Image src={"/Product Image.png"} alt={"home"} height={300} width={400} />
      </div>
      <Logo />
      <Product/>
    </div>
  );
}

export default page
=======
// import React from "react";
// import Image from "next/image";
// import Header from "@/Components/Header";
// import Logo from "@/Components/Logo";
// import Product from "@/Components/product";
// import Our from "@/Components/Our";
// import FeaturePage from "@/Components/Feature";

// function page() {
//   return (
//     <section className="home section mx-2 max-w-screen-2xl bg-gray-100">
//       <div>
//         <div className="container-left max-w-screen-2xl px-6 py-44 absolute top-0 left-4">
//           <i className="text-2xl">welcome to chairy</i>
//           <br />
//           <br />
//           <i className="font-extrabold text-4xl ">best Furniture</i>
//           <br></br>
//           <i className="font-extrabold text-2xl">Collection for You</i>
//           <br></br>
//           <i className="font-extrabold text-2xl "> interior</i>
//           <br></br>
//         </div>
//         <div className="container-left flex justify-end rounded-lg">
//           <Image
//             src={"/Product Image.png"}
//             alt={"home"}
//             height={300}
//             width={400}
//           />
//         </div>
        
//         <Logo />
//         <FeaturePage/>
//         <Product />
//         <Our />
//       </div>
//     </section>
//   );
// }

// export default page;





import React from "react";
import Image from "next/image";
import Logo from "@/Components/Logo";
import Product from "@/Components/product";
import Our from "@/Components/Our";
import FeaturePage from "@/Components/Feature";

function Page() {
  return (
    <section className="home section mx-2 max-w-screen-2xl bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:py-32 lg:py-44">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <i className="text-xl sm:text-2xl md:text-3xl text-gray-700">
            Welcome to Chairy
          </i>
          <br />
          <br />
          <i className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-900">
            Best Furniture
          </i>
          <br />
          <i className="font-extrabold text-xl sm:text-2xl md:text-3xl text-gray-900">
            Collection for You
          </i>
          <br />
          <i className="font-extrabold text-xl sm:text-2xl md:text-3xl text-gray-900">
            Interior
          </i>
          <br />
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={"/Product Image.png"}
            alt={"home"}
            height={300}
            width={400}
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>

      {/* Other Components */}
      <div className="relative mt-16 md:mt-24">
        <Logo />
      </div>
      <FeaturePage />
      <Product />
      <Our />
    </section>
  );
}

export default Page;
>>>>>>> ac0e253 (Updated files)
