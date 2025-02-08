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

const Our = async () => {
  const query = `
    *[_type == "products"][5...13] {
      _id,
      title,
      price,
      "imageUrl": image.asset->url
    }
  `;
  const products: Product[] = await client.fetch(query);

  return (
    <div className="px-4 py-8 mt-10">
      <div className="text-center mb-6">
        <h1 className="font-extrabold text-2xl md:text-3xl">Our Products</h1>
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

export default Our;

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

// const Our = async () => {
//   const query = `
//     *[_type == "products"][5...13] {
//       _id,
//       title,
//       price,
//       "imageUrl": image.asset->url
//     }
//   `;
//   const products: Product[] = await client.fetch(query);

//   return (
//     <div className="product-list mt-[80px]">
//       <div className="heading">
//         <h1 className="font-extrabold text-2xl">Our Products</h1>
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

// export default Our;

// "use client"; // Add this line at the top of your file

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import sanityClient from "@/sanity/lib/client"; // Adjust this import path based on your file structure

// // Define the types for the product data
// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount: number;
//   badge: string;
//   imageUrl: string;
//   category: {
//     _id: string;
//     title: string;
//   };
//   description: string;
//   inventory: number;
//   tags: string[];
// }

// function Our() {
//   const [products, setProducts] = useState<Product[]>([]); // Type the products state as an array of Product
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Sanity query to fetch products
//     sanityClient
//       .fetch(
//         `*[_type == "products" && "featured" in tags] {
//           _id,
//           title,
//           price,
//           priceWithoutDiscount,
//           badge,
//           "imageUrl": image.asset->url,
//           category->{
//             _id,
//             title
//           },
//           description,
//           inventory,
//           tags
//         }`
//       )
//       .then((data) => {
//         // Type assertion to let TypeScript know the structure of the data
//         setProducts(data as Product[]); // Assert the type of the returned data
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading products...</div>;
//   }

//   return (
//     <div>
//       <div>
//         <h1 className="font-extrabold flex justify-center text-2xl">
//           Our Products
//         </h1>
//       </div>

//       <div className="section1 flex justify-center py-3 max-w-screen-2xl mx-auto">
//         {products.slice(0, 4).map((product) => (
//           <div key={product._id} className="product-card p-4">
//             <Image
//               src={product.imageUrl || "/fallback-image.png"} // Fallback image
//               alt={product.title}
//               width={312}
//               height={377}
//             />
//             <h2 className="text-center">{product.title}</h2>
//             <p className="text-center text-sm text-gray-600">
//               {product.description}
//             </p>
//             <div className="flex justify-center mt-2">
//               <span className="text-xl font-semibold">${product.price}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="section2 flex justify-center py-2 max-w-screen-2xl mx-auto">
//         {products.slice(4, 8).map((product) => (
//           <div key={product._id} className="product-card p-4">
//             <Image
//               src={product.imageUrl || "/fallback-image.png"} // Fallback image
//               alt={product.title}
//               width={312}
//               height={377}
//             />
//             <h2 className="text-center">{product.title}</h2>
//             <p className="text-center text-sm text-gray-600">
//               {product.description}
//             </p>
//             <div className="flex justify-center mt-2">
//               <span className="text-xl font-semibold">${product.price}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Our;
