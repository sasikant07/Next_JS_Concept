import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/blog">
        Blog
      </Link>
      <Link href="/product">
        Products
      </Link>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
