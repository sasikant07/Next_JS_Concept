import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import "../components/Navbar.css"
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
    </SessionProvider>
    </>
  )
}

export default MyApp
