import * as React from "react"
import Head from "next/head";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export interface LayoutProps {
    children: any;
}

export default function Layout(props: LayoutProps) {

    const children = props.children

    return (
        <>

            <Head>
                <link rel="icon" href="/favicon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <title>Ange & Vie</title>
                <meta name="description" content="Ange & Vie" />
            </Head>

            <Navbar />

            <main>{children}</main>

            <Footer />


        </>
    )
}