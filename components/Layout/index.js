import Head from "next/head"
import Navbar from "../Navbar"
import Footer from "../Footer"

function Layout({ children }){
    return (
        <>
            <Head>
                <title>Marvel Next</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout