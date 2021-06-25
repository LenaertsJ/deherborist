import Navbar from "./navbar"
import Footer from './footer'
import Head from "next/head";
import { NextSeo } from 'next-seo';

function Layout({ children }) {
    return (
        <>
        <NextSeo 
            title="De Herborist"
            description="Charlotte Smolders verteld je als herborist meer over de geneeskracht en symboliek van planten. In de webshop kan je geschenkjes aankopen waarin de geneeskrachtige palnten verwerkt werden."
            canonical="https://deherborist.vercel.app"
        />
            <Head>
                <link rel="icon" href="/images/logo-herborist.svg" />
            </Head>

            <Navbar />
            { children }
            <Footer />
        </>
    )
}

export default Layout
