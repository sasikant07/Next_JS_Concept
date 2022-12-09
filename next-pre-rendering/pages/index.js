import React from 'react';
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/users">
        Users
      </Link>
      <Link href="/posts">
        Posts
      </Link>
      <h1>Next Js pre-rendering</h1>
    </div>
  )
}

export default Home;