
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
