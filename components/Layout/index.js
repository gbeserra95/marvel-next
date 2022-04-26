import Head from "next/head"
import Navbar from "../Navbar"
import Footer from "../Footer"

import { Main } from "./styles"

function Layout({ children }){
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Marvel Next</title>
            </Head>
            <Navbar />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default Layout