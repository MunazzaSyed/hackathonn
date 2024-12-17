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
