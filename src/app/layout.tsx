"use client"; // This must stay if the file uses client-only logic

import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import { CartProvider } from "use-shopping-cart";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
          currency="USD"
          successUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/success`}
          cancelUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/cancel`}
          shouldPersist={true}
        >
          <Header />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
