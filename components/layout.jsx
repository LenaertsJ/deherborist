import Navbar from "./navbar"
import Footer from './footer'
import Head from "next/head";

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>De Herborist</title>
                <meta name="description" content="Charlotte Smolders: herborist" />
                <link rel="icon" href="/images/logo-herborist.svg" />
            </Head>

            <Navbar />
            { children }
            <Footer />
        </>
    )
}

export default Layout
