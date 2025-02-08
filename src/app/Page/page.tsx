// "use client"; // ✅ Client component declaration

// import React from "react";
// import Image from "next/image";
// import { useShoppingCart } from "use-shopping-cart";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// const ProductClientComponent = ({ product }: { product: Product }) => {
//   const { addItem } = useShoppingCart(); // ✅ Ensure this is inside a client component

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-10">
//       <div className="flex flex-col lg:flex-row w-full max-w-screen-xl items-center gap-10 mb-10">
//         <div className="flex-1 flex justify-center lg:justify-start">
//           <Image
//             src={product.imageUrl}
//             alt={product.title}
//             height={607}
//             width={675}
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         <div className="flex-1 text-center lg:text-left px-8">
//           <h1 className="text-4xl font-extrabold mb-2">{product.title}</h1>
//           <p className="text-lg bg-cyan-500 inline-block px-4 py-2 text-white rounded-lg">
//             ${product.price.toFixed(2)}
//           </p>
//           <p className="text-gray-500 mt-8 max-w-lg">{product.description}</p>

//           <button
//             onClick={() =>
//               addItem({
//                 id: product._id,
//                 name: product.title,
//                 price: product.price,
//                 currency: "USD",
//                 image: product.imageUrl,
//               })
//             }
//             className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductClientComponent;






// "use client"; // Hooks use karne ke liye required hai
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import client from "@/sanity/lib/client";
// import { useShoppingCart } from "use-shopping-cart";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
// }

// const ProductListPage = () => {
//   const { addItem } = useShoppingCart(); // useShoppingCart ka hook
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "products"] {
//         _id,
//         title,
//         price,
//         "imageUrl": image.asset->url
//       }`;
//       const data = await client.fetch(query);
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-list p-4">
//       <h1 className="font-extrabold text-2xl mb-4">All Products</h1>
//       <div className="grid grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="border p-4 rounded-lg shadow">
//             <Link href={`/product/${product._id}`}>
//               <Image
//                 src={product.imageUrl}
//                 alt={product.title}
//                 width={312}
//                 height={377}
//                 className="rounded-md"
//               />
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="text-gray-700">${product.price}</p>
//             </Link>
//             {/* ✅ Add to Cart Button */}
//             <button
//               onClick={() =>
//                 addItem({
//                   id: product._id,
//                   name: product.title,
//                   price: product.price,
//                   currency: "USD",
//                   image: product.imageUrl,
//                 })
//               }
//               className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductListPage;


// import React from "react";


import Image from "next/image";
import Link from "next/link";
import client from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const ProductListPage = async () => {
  const query = `
    *[_type == "products"] {
       _id,
       title,
       price,
       "imageUrl": image.asset->url
 }
   `;
  const products: Product[] = await client.fetch(query);

  return (
    <div className="product-list">
      <div className="heading">
        <h1 className="font-extrabold text-2xl">All Products</h1>
      </div>
      <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link href={`/product/${product._id}`}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={312}
                height={377}
                className="rounded-md"
              />
              <h2 className="text-center mt-2">{product.title}</h2>
              <p className="text-center text-xl font-bold">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;