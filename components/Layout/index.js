import Head from "next/head"
import Navbar from "../Navbar"
import Footer from "../Footer"

import { Container } from "@mui/material"

function Layout({ children }){
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}

export default Layout