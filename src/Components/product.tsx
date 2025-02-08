<<<<<<< HEAD
import React from 'react'
import Image from 'next/image'
function product() {
  return (
    <div>
      <div>
        <h1 className="font-extrabold"> featured Product</h1>
      </div>
      <div className="flex justify-center">
        <Image
          src="/Products (2).png"
          alt="maskgroup"
          width={312}
          height={377}
        />
        <Image src="/Image.png" alt="maskgroup" width={312} height={377} />
        <Image
          src="/Products (3).png"
          alt="maskgroup"
          width={312}
          height={377}
        />
        <Image src="/Products.png" alt="maskgroup" width={312} height={377} />
      </div>
      <div>
        <h1>TOP Categories</h1>
      </div>
      <div className="categories flex justify-center py-5">
              <Image src="/Category (3).png" alt="maskgroup" width={424} height={424} />
              <Image src="/Image (2).png" alt="maskgroup" width={424} height={424} />
              <Image src="/Category (4).png" alt="maskgroup" width={424} height={424} />


          </div>
          <div>
              
          </div>
    </div>
  );
}

export default product
=======
import React from "react";
import Image from "next/image";

function Product() {
  return (
    <div className="mt-[80px] px-4">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold">TOP Categories</h1>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        <Image
          src="/Category (3).png"
          alt="Category 1"
          width={424}
          height={424}
          className="w-full h-auto rounded-lg"
        />
        <Image
          src="/Image (2).png"
          alt="Category 2"
          width={424}
          height={424}
          className="w-full h-auto rounded-lg"
        />
        <Image
          src="/Category (4).png"
          alt="Category 3"
          width={424}
          height={424}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default Product;

// import React from 'react'
// import Image from 'next/image'
// function product() {
//   return (
//     <div className='mt-[80px]'>
//       {/* <div>
//         <h1 className="font-extrabold"> featured Product</h1>
//       </div>
//       <div className="flex justify-center">
//         <Image
//           src="/Products (2).png"
//           alt="maskgroup"
//           width={312}
//           height={377}
//         />
//         <Image src="/Image.png" alt="maskgroup" width={312} height={377} />
//         <Image
//           src="/Products (3).png"
//           alt="maskgroup"
//           width={310}
//           height={370}
//         />
//         <Image src="/Products.png" alt="maskgroup" width={312} height={377} />
//       </div> */}
//       <div>
//         <h1 className='text-3xl font-bold'>TOP Categories</h1>
//       </div>
//       <div className="categories flex justify-center py-5 gap-4">
//               <Image src="/Category (3).png" alt="maskgroup" width={424} height={424} />
//               <Image src="/Image (2).png" alt="maskgroup" width={424} height={424} />
//               <Image src="/Category (4).png" alt="maskgroup" width={424} height={424} />

//           </div>
//           <div>

//           </div>
//     </div>
//   );
// }

// export default product
>>>>>>> ac0e253 (Updated files)
