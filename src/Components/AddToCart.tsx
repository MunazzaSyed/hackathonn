// // AddToCart.tsx
// "use client"; // ✅ Add this line at the top

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import client from "@/sanity/lib/client";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// interface ProductProps {
//   params: { id: string };
// }

// const AddToCart = ({ params }: ProductProps) => {
//   const { id } = params;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const query = `
//         *[_type == "products" && _id == $id][0] {
//           _id,
//           title,
//           price,
//           description,
//           "imageUrl": image.asset->url
//         }
//       `;
//       const fetchedProduct: Product | null = await client.fetch(query, { id });

//       if (!fetchedProduct) {
//         notFound();
//       } else {
//         setProduct(fetchedProduct);
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   const addToCart = (product: Product) => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   if (loading) return <p className="text-center text-lg">Loading...</p>;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-10">
//       <div className="flex flex-col lg:flex-row w-full max-w-screen-xl items-center gap-10 mb-10">
//         {/* Product Image */}
//         <div className="flex-1 flex justify-center lg:justify-start">
//           <Image
//             src={product!.imageUrl}
//             alt={product!.title}
//             height={607}
//             width={675}
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 text-center lg:text-left px-8">
//           <h1 className="text-4xl font-extrabold mb-2">{product!.title}</h1>
//           <p className="text-lg bg-cyan-500 inline-block px-4 py-2 text-white rounded-lg">
//             ${product!.price.toFixed(2)}
//           </p>
//           <p className="text-gray-500 mt-8 max-w-lg">{product!.description}</p>
//           <button
//             onClick={() => addToCart(product!)}
//             className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation"; // ✅ Import useRouter for safety
// import client from "@/sanity/lib/client";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// interface ProductProps {
//   params?: { id?: string }; // ✅ Make params optional
// }

// const AddToCart = ({ params }: ProductProps) => {
//   const router = useRouter(); // ✅ Use router for navigation if needed
//   const id = params?.id; // ✅ Prevents "Cannot destructure property 'id' of 'params' as it is undefined"
//   const [product, setProduct] = useState<Product | null>(null);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!id) return; // ✅ Avoid fetching if id is missing

//     const fetchProduct = async () => {
//       const query = `
//         *[_type == "products" && _id == $id][0] {
//           _id,
//           title,
//           price,
//           description,
//           "imageUrl": image.asset->url
//         }
//       `;
//       const fetchedProduct: Product | null = await client.fetch(query, { id });

//       if (!fetchedProduct) {
//         router.push("/404"); // ✅ Redirect to 404 if product not found
//       } else {
//         setProduct(fetchedProduct);
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id, router]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   const addToCart = (product: Product) => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   if (!id) return <p className="text-center text-lg">No Product ID Provided</p>;
//   if (loading) return <p className="text-center text-lg">Loading...</p>;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-10">
//       <div className="flex flex-col lg:flex-row w-full max-w-screen-xl items-center gap-10 mb-10">
//         {/* Product Image */}
//         <div className="flex-1 flex justify-center lg:justify-start">
//           <Image
//             src={product!.imageUrl}
//             alt={product!.title}
//             height={607}
//             width={675}
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 text-center lg:text-left px-8">
//           <h1 className="text-4xl font-extrabold mb-2">{product!.title}</h1>
//           <p className="text-lg bg-cyan-500 inline-block px-4 py-2 text-white rounded-lg">
//             ${product!.price.toFixed(2)}
//           </p>
//           <p className="text-gray-500 mt-8 max-w-lg">{product!.description}</p>
//           <button
//             onClick={() => addToCart(product!)}
//             className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
//

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// interface AddToCartProps {
//   product: Product; // ✅ Accept `product` directly
// }

// const AddToCart = ({ product }: AddToCartProps) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   const addToCart = () => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

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
//             onClick={addToCart}
//             className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
// "use client";
// import React, { useState, useEffect } from "react";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// const AddToCart = ({ product }: { product: Product }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   const addToCart = () => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <button
//       onClick={addToCart}
//       className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
//     >
//       Add to Cart
//     </button>
//   );
// };

// export default AddToCart;

// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// const AddToCart = ({ product }: { product: Product }) => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const router = useRouter();

//   // Cart data ko localStorage se load karo
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Cart me product add karne ka function
//   const addToCart = () => {
//     const existingCart = [...cart];

//     // Check karo ki product already exist na kare
//     const isProductInCart = existingCart.some(
//       (item) => item._id === product._id
//     );
//     if (!isProductInCart) {
//       const updatedCart = [...existingCart, product];
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }

//     // Cart page par navigate karo
//     router.push("/cart");
//   };

//   return (
//     <button
//       onClick={addToCart}
//       className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
//     >
//       Add to Cart
//     </button>
//   );
// };

// export default AddToCart;
"use client";

import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

type AddToCartProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string; // ✅ Ensure imageUrl is in props
};

const AddToCart = ({ id, name, price, imageUrl }: AddToCartProps) => {
  const { addItem, cartDetails, setItemQuantity } = useShoppingCart();

  if (!addItem || !setItemQuantity) {
    console.error("ShoppingCart context is not available.");
    return <Button disabled>Add to Cart</Button>;
  }

  const product = {
    id,
    name,
    price,
    imageUrl, // ✅ Ensure imageUrl is stored correctly
    sku: id,
    currency: "USD",
  };

  const handleAddToCart = () => {
    try {
      const existingItem = cartDetails?.[id];

      if (existingItem) {
        setItemQuantity(id, existingItem.quantity + 1);
        toast.success(`${name} quantity updated!`);
      } else {
        addItem(product); // ✅ Add item with imageUrl
        toast.success(`${name} added to cart!`);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart.");
    }
  };

  return (
    <Button onClick={handleAddToCart} className="add-to-cart-btn">
      Add to Cart
    </Button>
  );
};

export default AddToCart;
