import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {
    const { data: session, status } = useSession()
    console.log("SESSION", session, "STATUS", status)
    return (
        <nav className="header">
            <h1 className="logo">
                <a href="#">NextAuth</a>
            </h1>
            <ul className={`main-nav ${!session && status === 'loading' ? 'loading' : 'loaded'}`}>
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
                {
                    !session && (
                        <li>
                            <Link href="/api/auth/signin" onClick={(e) => {
                                e.preventDefault()
                                signIn('github')
                            }}>
                                Sign In
                            </Link>
                        </li>
                    )
                }

                {
                    session && (
                        <li>
                            <Link href="/api/auth/signin" onClick={(e) => {
                                e.preventDefault()
                                signOut()
                            }}>
                                Sign Out
                            </Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;