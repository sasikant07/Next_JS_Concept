import Link from 'next/link';
// import {signIn, signOut} from 'next-auth/client'
import { signIn, signOut } from 'next-auth/react'

function Navbar() {
    return (
        <nav className="header">
            <h1 className="logo">
                <a href="#">NextAuth</a>
            </h1>
            <ul className={`main-nav`}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/api/auth/signin" onClick={(e) => {
                        e.preventDefault()
                        signIn('github')
                    }}>
                        Sign In
                    </Link>
                </li>
                <li>
                    <Link href="/api/auth/signin" onClick={(e) => {
                        e.preventDefault()
                        signOut()
                    }}>
                        Sign Out
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;