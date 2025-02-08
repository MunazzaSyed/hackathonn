
// import React from "react";
// import { notFound } from "next/navigation";
// import client from "@/sanity/lib/client";
// import ProductClientComponent from "@/app/Page/page" // ✅ Client Component ko yaha import karo

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// interface ProductPageProps {
//   params: { id: string };
// }

// const ProductPage = async ({ params }: ProductPageProps) => {
//   const { id } = params;

//   const query = `
//     *[_type == "products" && _id == $id][0] {
//       _id,
//       title,
//       price,
//       description,
//       "imageUrl": image.asset->url
//     }
//   `;
//   const product: Product | null = await client.fetch(query, { id });

//   if (!product) {
//     notFound();
//   }

//   return <ProductClientComponent product={product} />; // ✅ Server Component -> Client Component
// };

// export default ProductPage;



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

//src/app/product/[id]/page.tsx
//  import React from "react";
//  import Image from "next/image";
//  import { notFound } from "next/navigation";
// import client from "@/sanity/lib/client";
//  import AddToCart from "@/Components/AddToCart"

//  interface Product {
//    _id: string;
//    title: string;
//    price: number;
//    description: string;
//    imageUrl: string;
//  }

//  interface ProductPageProps {
//    params: { id: string };
//  }

//  const ProductPage = async ({ params }: ProductPageProps) => {
//    const { id } = params;

//    const query = `
//      *[_type == "products" && _id == $id][0] {
//        _id,
//        title,
//        price,
//        description,
//        "imageUrl": image.asset->url
//      }
//    `;
//    const product: Product | null = await client.fetch(query, { id });

//    if (!product) {
//      notFound(); // This will render the 404 page if the product is not found
//    }

//    return (
//      <div className="flex flex-col items-center justify-center min-h-screen p-10">
//        <div className="flex flex-col lg:flex-row w-full max-w-screen-xl items-center gap-10 mb-10">
//          {/* Product Image */}
//          <div className="flex-1 flex justify-center lg:justify-start">
//            <Image
//              src={product.imageUrl}
//              alt={product.title}
//              height={607}
//              width={675}
//              className="rounded-lg shadow-lg"
//            />
//          </div>

//          {/* Product Details */}
//          <div className="flex-1 text-center lg:text-left px-8">
//            <h1 className="text-4xl font-extrabold mb-2">{product.title}</h1>
//            <p className="text-lg bg-cyan-500 inline-block px-4 py-2 text-white rounded-lg">
//              ${product.price.toFixed(2)}
//            </p>
//            <p className="text-gray-500 mt-8 max-w-lg">{product.description}</p>
//            <AddToCart product={product} />
//          </div>
//        </div>
//      </div>
//    );
//  };

//  export default ProductPage;
// {/* <button className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">
//   Add to Cart
// </button>;
//         */}

  //       "use client"; // Ensures the component runs on the client-side
  //       import React, { useState, useEffect } from "react";
  //       import Image from "next/image";
  //       import { notFound } from "next/navigation";
  //       import client from "@/sanity/lib/client";

  //       // Define product interface
  //       interface Product {
  //         _id: string;
  //         title: string;
  //         price: number;
  //         description: string;
  //         imageUrl: string;
  //       }

  //       // Define props for ProductPage
  //       interface ProductPageProps {
  //         params: { id: string };
  //       }

  //       // AddToCart component (moved inside same file for simplicity)
  //       const AddToCart: React.FC<{ product: Product }> = ({ product }) => {
  //         const [cart, setCart] = useState<Product[]>([]);

  //         useEffect(() => {
  //           const storedCart = localStorage.getItem("cart");
  //           if (storedCart) {
  //             setCart(JSON.parse(storedCart));
  //           }
  //         }, []);

  //         const addToCart = () => {
  //           const updatedCart = [...cart, product];
  //           setCart(updatedCart);
  //           localStorage.setItem("cart", JSON.stringify(updatedCart));
  //           alert(`${product.title} added to cart!`); // Simple feedback
  //         };

  //         return (
  //           <button
  //             onClick={addToCart}
  //             className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
  //           >
  //             Add to Cart
  //           </button>
  //         );
  //       };

  //       // Main Product Page component
  //       const ProductPage = async ({ params }: ProductPageProps) => {
  //         const { id } = params;

  //         if (!id) {
  //           return <p className="text-red-500">No Product ID Provided</p>;
  //         }

  //         const query = `
  //   *[_type == "products" && _id == $id][0] {
  //     _id,
  //     title,
  //     price,
  //     description,
  //     "imageUrl": image.asset->url
  //   }
  // `;
  //         const product: Product | null = await client.fetch(query, { id });

  //         if (!product) {
  //           notFound(); // This will render the 404 page if the product is not found
  //         }

  //         return (
  //           <div className="flex flex-col items-center justify-center min-h-screen p-10">
  //             <div className="flex flex-col lg:flex-row w-full max-w-screen-xl items-center gap-10 mb-10">
  //               {/* Product Image */}
  //               <div className="flex-1 flex justify-center lg:justify-start">
  //                 <Image
  //                   src={product.imageUrl}
  //                   alt={product.title}
  //                   height={607}
  //                   width={675}
  //                   className="rounded-lg shadow-lg"
  //                 />
  //               </div>

  //               {/* Product Details */}
  //               <div className="flex-1 text-center lg:text-left px-8">
  //                 <h1 className="text-4xl font-extrabold mb-2">
  //                   {product.title}
  //                 </h1>
  //                 <p className="text-lg bg-cyan-500 inline-block px-4 py-2 text-white rounded-lg">
  //                   ${product.price.toFixed(2)}
  //                 </p>
  //                 <p className="text-gray-500 mt-8 max-w-lg">
  //                   {product.description}
  //                 </p>

  //                 {/* AddToCart component */}
  //                 {product ? (
  //                   <AddToCart product={product} />
  //                 ) : (
  //                   <p>Loading product...</p>
  //                 )}
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       };

//       export default ProductPage;
  //src/app/product/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import client from "@/sanity/lib/client";
import AddToCart from "@/Components/AddToCart";

interface Product {
  image:string
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface ProductPageProps {
  params: { id: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = params;

  if (!id) {
    return <p>No Product ID Provided</p>;
  }

  const query = `*[_type == "products" && _id == $id][0] {
    _id, title, price, description, "imageUrl": image.asset->url
  }`;

  const product: Product | null = await client.fetch(query, { id });

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-10">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl items-center gap-10">
        <Image
          src={product.imageUrl}
          alt={product.title}
          height={400}
          width={400}
          className="rounded-lg shadow-lg"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-lg bg-cyan-500 inline-block px-4 py-2 text-white rounded-lg">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-500 mt-4">{product.description}</p>
          {/* Client Component ko data pass kar rahe hain */}
          <AddToCart
            imageUrl={product.imageUrl}
            // image={product.imageUrl}
            id={product._id}
            name={product.title}
            price={product.price}
          />{" "}
          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

