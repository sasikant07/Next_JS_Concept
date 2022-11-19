import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  // Navigating Programatically
  const handleClick = () => {
    console.log("Placing your order.");
    // router.push("/product");
    router.replace("/product");
  };

  return (
    <div>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
