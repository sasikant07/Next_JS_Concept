import React from 'react';
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Next Js pre-rendering</h1>
      <Link href="/users">
        Users
      </Link>
    </div>
  )
}

export default Home;