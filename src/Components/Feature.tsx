// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import client from "@/sanity/lib/client";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
// }

// const FeaturePage = async () => {
//   const query = `
//     *[_type == "products"][0...4] {
//       _id,
//       title,
//       price,
//       "imageUrl": image.asset->url
//     }
//   `;
//   const products: Product[] = await client.fetch(query);

//   return (
//     <div className="product-list">
//       <div className="heading">
//         <h1 className="font-extrabold text-2xl">Feature Products</h1>
//       </div>
//       <div className="product-grid grid grid-cols-4 gap-4">
//         {products.map((product) => (
//           <div key={product._id} className="product-card">
//             <Link href={`/product/${product._id}`}>
//               <Image
//                 src={product.imageUrl}
//                 alt={product.title}
//                 width={312}
//                 height={377}
//                 className="rounded-md"
//               />
//               <h2>{product.title}</h2>
//               <p>${product.price}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturePage;





import React from "react";
import Image from "next/image";
import Link from "next/link";
import client from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const FeaturePage = async () => {
  const query = `
    *[_type == "products"][0...4] {
      _id,
      title,
      price,
      "imageUrl": image.asset->url
    }
  `;
  const products: Product[] = await client.fetch(query);

  return (
    <div className="px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="font-extrabold text-2xl md:text-3xl">
          Feature Products
        </h1>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/product/${product._id}`} className="block">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={312}
                height={377}
                className="rounded-md w-full object-cover"
              />
              <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePage;

